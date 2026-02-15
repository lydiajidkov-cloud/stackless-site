// Curly Girl UK - Application Logic

// ============ NAVIGATION ============

function toggleNav() {
  var links = document.getElementById('navLinks');
  if (links) links.classList.toggle('open');
}

// ============ INGREDIENT CHECKER ============

function parseIngredients(text) {
  // Split by comma, newline, or semicolon
  return text
    .split(/[,;\n]+/)
    .map(function(s) { return s.trim(); })
    .filter(function(s) { return s.length > 0; });
}

function normalise(str) {
  return str.toLowerCase().replace(/[^a-z0-9\s\/\-]/g, '').trim();
}

function matchIngredient(rawName) {
  var norm = normalise(rawName);
  if (!norm) return null;

  // 1. Exact match against database aliases
  var ingredients = window.CG_INGREDIENTS || [];
  for (var i = 0; i < ingredients.length; i++) {
    var ing = ingredients[i];
    for (var j = 0; j < ing.aliases.length; j++) {
      if (normalise(ing.aliases[j]) === norm) {
        return { name: ing.name, status: ing.status, reason: ing.reason, category: ing.category };
      }
    }
  }

  // 2. Fuzzy: check if any alias is contained within the input or vice versa
  for (var i = 0; i < ingredients.length; i++) {
    var ing = ingredients[i];
    for (var j = 0; j < ing.aliases.length; j++) {
      var alias = normalise(ing.aliases[j]);
      if (alias.length > 3 && (norm.indexOf(alias) !== -1 || alias.indexOf(norm) !== -1)) {
        return { name: ing.name, status: ing.status, reason: ing.reason, category: ing.category };
      }
    }
  }

  // 3. Pattern-based rules
  var rules = window.CG_RULES || [];
  for (var r = 0; r < rules.length; r++) {
    var rule = rules[r];
    if (rule.pattern.test(rawName)) {
      // Check exception
      if (rule.exception && rule.exception.test(rawName)) continue;
      return { name: rawName.trim(), status: rule.status, reason: rule.reason, category: rule.category };
    }
  }

  // 4. Not found
  return null;
}

function checkIngredients() {
  var input = document.getElementById('ingredientInput');
  var resultsEl = document.getElementById('results');
  if (!input || !resultsEl) return;

  var raw = input.value.trim();
  if (!raw) {
    resultsEl.innerHTML = '';
    return;
  }

  var items = parseIngredients(raw);
  var results = [];
  var hasNotApproved = false;
  var hasCaution = false;

  for (var i = 0; i < items.length; i++) {
    var match = matchIngredient(items[i]);
    if (match) {
      results.push({ input: items[i], name: match.name, status: match.status, reason: match.reason, category: match.category });
      if (match.status === 'not_approved') hasNotApproved = true;
      if (match.status === 'caution') hasCaution = true;
    } else {
      results.push({ input: items[i], name: items[i], status: 'unknown', reason: 'Not in our database. Check CurlsBot.com for verification.', category: 'unknown' });
    }
  }

  // Build verdict
  var verdictClass, verdictText;
  if (hasNotApproved) {
    verdictClass = 'verdict-not-approved';
    verdictText = 'Not CG Approved: contains problematic ingredients';
  } else if (hasCaution) {
    verdictClass = 'verdict-caution';
    verdictText = 'Caution: some ingredients may cause buildup';
  } else {
    verdictClass = 'verdict-approved';
    verdictText = 'CG Approved: all ingredients look good!';
  }

  var html = '<div class="verdict-banner ' + verdictClass + '">' + verdictText + '</div>';
  html += '<div class="ingredient-list">';

  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    var dotClass = 'dot-' + r.status;
    var nameClass = 'status-' + r.status;
    var badgeClass = 'badge-' + r.status;
    var badgeLabel = r.status === 'not_approved' ? 'Not Approved' :
                     r.status === 'approved' ? 'Approved' :
                     r.status === 'caution' ? 'Caution' : 'Unknown';

    html += '<div class="ingredient-item">';
    html += '  <div class="ingredient-dot ' + dotClass + '"></div>';
    html += '  <div class="ingredient-info">';
    html += '    <div class="ingredient-name ' + nameClass + '">' + escHtml(r.name) + '</div>';
    html += '    <div class="ingredient-reason">' + escHtml(r.reason) + '</div>';
    html += '  </div>';
    html += '  <span class="ingredient-badge ' + badgeClass + '">' + badgeLabel + '</span>';
    html += '</div>';
  }

  html += '</div>';
  resultsEl.innerHTML = html;
}

function clearChecker() {
  var input = document.getElementById('ingredientInput');
  var results = document.getElementById('results');
  if (input) input.value = '';
  if (results) results.innerHTML = '';
}

function loadExample() {
  var input = document.getElementById('ingredientInput');
  if (input) {
    input.value = 'Aqua, Cetearyl Alcohol, Behentrimonium Chloride, Glycerin, Dimethicone, Panthenol, Phenoxyethanol, Parfum, Citric Acid, Sodium Laureth Sulfate, Linalool';
    checkIngredients();
  }
}

// ============ SEARCH ============

function searchIngredients() {
  var input = document.getElementById('searchInput');
  var resultsEl = document.getElementById('searchResults');
  if (!input || !resultsEl) return;

  var query = normalise(input.value);
  if (query.length < 2) {
    resultsEl.innerHTML = '';
    return;
  }

  var ingredients = window.CG_INGREDIENTS || [];
  var matches = [];

  for (var i = 0; i < ingredients.length; i++) {
    var ing = ingredients[i];
    var found = false;

    // Check name
    if (normalise(ing.name).indexOf(query) !== -1) found = true;

    // Check aliases
    if (!found) {
      for (var j = 0; j < ing.aliases.length; j++) {
        if (normalise(ing.aliases[j]).indexOf(query) !== -1) {
          found = true;
          break;
        }
      }
    }

    if (found) {
      matches.push(ing);
      if (matches.length >= 20) break;
    }
  }

  if (matches.length === 0) {
    resultsEl.innerHTML = '<p class="text-muted mt-1" style="font-size:0.9rem;">No matches found. Try a different spelling or check CurlsBot.com.</p>';
    return;
  }

  var html = '';
  for (var i = 0; i < matches.length; i++) {
    var m = matches[i];
    var dotClass = 'dot-' + m.status;
    var nameClass = 'status-' + m.status;
    var badgeClass = 'badge-' + m.status;
    var badgeLabel = m.status === 'not_approved' ? 'Not Approved' :
                     m.status === 'approved' ? 'Approved' : 'Caution';

    html += '<div class="ingredient-item">';
    html += '  <div class="ingredient-dot ' + dotClass + '"></div>';
    html += '  <div class="ingredient-info">';
    html += '    <div class="ingredient-name ' + nameClass + '">' + escHtml(m.name) + '</div>';
    html += '    <div class="ingredient-reason">' + escHtml(m.reason) + '</div>';
    html += '  </div>';
    html += '  <span class="ingredient-badge ' + badgeClass + '">' + badgeLabel + '</span>';
    html += '</div>';
  }

  resultsEl.innerHTML = html;
}

// ============ QUIZ ============

var quizAnswers = {};
var currentQuestion = 0;
var totalQuestions = 7;

function initQuiz() {
  // Build progress bar
  var progress = document.getElementById('quizProgress');
  if (!progress) return;

  var html = '';
  for (var i = 0; i < totalQuestions; i++) {
    html += '<div class="quiz-progress-step" data-step="' + i + '"></div>';
  }
  progress.innerHTML = html;
  updateProgress();

  // Check for saved results
  var saved = localStorage.getItem('cgQuizResults');
  if (saved) {
    try {
      quizAnswers = JSON.parse(saved);
      showResults();
    } catch(e) {}
  }
}

function updateProgress() {
  var steps = document.querySelectorAll('.quiz-progress-step');
  for (var i = 0; i < steps.length; i++) {
    steps[i].className = 'quiz-progress-step';
    if (i < currentQuestion) steps[i].classList.add('done');
    if (i === currentQuestion) steps[i].classList.add('current');
  }
}

function selectOption(el) {
  // Deselect siblings
  var siblings = el.parentElement.querySelectorAll('.quiz-option');
  for (var i = 0; i < siblings.length; i++) {
    siblings[i].classList.remove('selected');
  }
  el.classList.add('selected');

  // Store answer
  var questionEl = el.closest('.quiz-question');
  var qIndex = parseInt(questionEl.getAttribute('data-q'));
  quizAnswers[qIndex] = el.getAttribute('data-value');

  // Enable next button
  var nextBtn = document.getElementById('nextBtn' + qIndex);
  if (nextBtn) nextBtn.disabled = false;
}

function nextQuestion() {
  if (currentQuestion >= totalQuestions - 1) return;

  var questions = document.querySelectorAll('.quiz-question');
  questions[currentQuestion].classList.remove('active');
  currentQuestion++;
  questions[currentQuestion].classList.add('active');
  updateProgress();
}

function prevQuestion() {
  if (currentQuestion <= 0) return;

  var questions = document.querySelectorAll('.quiz-question');
  questions[currentQuestion].classList.remove('active');
  currentQuestion--;
  questions[currentQuestion].classList.add('active');
  updateProgress();
}

function submitQuiz() {
  localStorage.setItem('cgQuizResults', JSON.stringify(quizAnswers));
  showResults();
}

function retakeQuiz() {
  localStorage.removeItem('cgQuizResults');
  quizAnswers = {};
  currentQuestion = 0;

  var quizContainer = document.getElementById('quizContainer');
  var quizResults = document.getElementById('quizResults');
  if (quizContainer) quizContainer.style.display = '';
  if (quizResults) quizResults.classList.remove('active');

  // Reset all questions
  var questions = document.querySelectorAll('.quiz-question');
  for (var i = 0; i < questions.length; i++) {
    questions[i].classList.remove('active');
    var opts = questions[i].querySelectorAll('.quiz-option');
    for (var j = 0; j < opts.length; j++) opts[j].classList.remove('selected');
    var btn = document.getElementById('nextBtn' + i);
    if (btn) btn.disabled = true;
  }
  if (questions[0]) questions[0].classList.add('active');
  updateProgress();
}

function showResults() {
  var quizContainer = document.getElementById('quizContainer');
  var quizResults = document.getElementById('quizResults');
  if (quizContainer) quizContainer.style.display = 'none';
  if (quizResults) quizResults.classList.add('active');

  var texture = quizAnswers[0] || 'wavy';
  var porosity = quizAnswers[1] || 'medium';
  var density = quizAnswers[2] || 'medium';
  var width = quizAnswers[3] || 'medium';
  var scalp = quizAnswers[4] || 'normal';
  var concern = quizAnswers[5] || 'frizz';
  var budget = quizAnswers[6] || 'budget';

  // Profile Card
  var profileCard = document.getElementById('profileCard');
  if (profileCard) {
    var textureLabel = { wavy: 'Wavy (Type 2)', curly: 'Curly (Type 3)', coily: 'Coily (Type 4)', straight: 'Straight (Type 1)' };
    var porosityLabel = { low: 'Low Porosity', medium: 'Medium Porosity', high: 'High Porosity', unsure: 'Porosity Unknown' };
    var densityLabel = { thin: 'Low Density', medium: 'Medium Density', thick: 'High Density' };
    var widthLabel = { fine: 'Fine Strands', medium: 'Medium Strands', coarse: 'Coarse Strands' };
    var scalpLabel = { dry: 'Dry Scalp', normal: 'Balanced Scalp', oily: 'Oily Scalp' };
    var concernLabel = { frizz: 'Frizz Control', definition: 'Curl Definition', moisture: 'Moisture', volume: 'Volume', damage: 'Damage Repair' };

    var html = '<div class="profile-header"><h3>Your Hair Type</h3></div>';
    html += '<div class="profile-tags">';
    html += '<span class="profile-tag">' + textureLabel[texture] + '</span>';
    html += '<span class="profile-tag">' + porosityLabel[porosity] + '</span>';
    html += '<span class="profile-tag">' + densityLabel[density] + '</span>';
    html += '<span class="profile-tag">' + widthLabel[width] + '</span>';
    html += '<span class="profile-tag">' + scalpLabel[scalp] + '</span>';
    html += '<span class="profile-tag">Focus: ' + concernLabel[concern] + '</span>';
    html += '</div>';

    // Summary paragraph
    html += '<p class="text-muted mt-2" style="font-size:0.9rem;">' + getProfileSummary(texture, porosity, density, width) + '</p>';

    profileCard.innerHTML = html;
  }

  // Routine Steps
  var routineSteps = document.getElementById('routineSteps');
  if (routineSteps) {
    routineSteps.innerHTML = buildRoutine(texture, porosity, density, width, scalp, concern);
  }

  // Product Suggestions
  var productSuggestions = document.getElementById('productSuggestions');
  if (productSuggestions) {
    productSuggestions.innerHTML = buildProductSuggestions(texture, porosity, width, scalp, concern, budget);
  }
}

function getProfileSummary(texture, porosity, density, width) {
  var summaries = [];

  if (texture === 'wavy') {
    summaries.push('Wavy hair needs lightweight products to avoid being weighed down.');
  } else if (texture === 'curly') {
    summaries.push('Curly hair benefits from regular deep conditioning and moisture-rich products.');
  } else if (texture === 'coily') {
    summaries.push('Coily hair thrives with intensive moisture, thick butters, and the LOC/LCO layering method.');
  } else {
    summaries.push('Even straight hair benefits from gentle, sulphate-free cleansing and good hydration.');
  }

  if (porosity === 'low') {
    summaries.push('Low porosity hair resists moisture, so use lightweight, water-based products and occasional heat (warm water, steam) to open cuticles.');
  } else if (porosity === 'high') {
    summaries.push('High porosity hair absorbs then loses moisture quickly. Focus on protein treatments and sealing with oils/butters.');
  }

  if (width === 'fine') {
    summaries.push('Fine strands are easily weighed down, so avoid heavy butters and thick creams.');
  } else if (width === 'coarse') {
    summaries.push('Coarse strands can handle heavier products and benefit from rich moisturisers.');
  }

  return summaries.join(' ');
}

function buildRoutine(texture, porosity, density, width, scalp, concern) {
  var steps = [];

  // Step 0: Reset
  steps.push({
    number: 0,
    title: 'Final Wash (One-Time)',
    desc: 'Before starting CGM, do one clarifying wash with a sulphate shampoo (no silicones) to remove all existing buildup. Deep condition for 30 minutes afterwards.',
    products: ['Alberto Balsam Shampoo', "Johnson's Baby Shampoo", 'Pretty Curly Girl Reset Shampoo']
  });

  // Step 1: Cleanse
  var cleanseDesc = '';
  var cleanseProducts = [];
  if (texture === 'wavy' || scalp === 'oily') {
    cleanseDesc = 'Use a sulphate-free shampoo (low-poo) every 2-3 days. If your scalp gets oily quickly, a gentle low-poo is better than co-washing for your hair type.';
    cleanseProducts = ['Noughty Wave Hello Shampoo', 'Garnier Hair Food Banana Shampoo', 'Cantu Cleansing Cream'];
  } else if (texture === 'coily') {
    cleanseDesc = 'Co-wash (wash with conditioner) once a week. Massage into scalp for at least 60 seconds. A sulphate-free shampoo every 2-3 weeks for a deeper clean.';
    cleanseProducts = ['XHC Banana Conditioner (for co-wash)', 'Shea Moisture Raw Shea Butter Shampoo', 'Cantu Cleansing Cream'];
  } else {
    cleanseDesc = 'Alternate between co-washing and sulphate-free shampoo 1-3 times per week. Start with low-poo and adjust based on how your hair responds.';
    cleanseProducts = ['Cantu Cleansing Cream', 'Garnier Hair Food Shampoo', 'XHC Banana Conditioner (for co-wash)'];
  }
  steps.push({ number: 1, title: 'Cleanse', desc: cleanseDesc, products: cleanseProducts });

  // Step 2: Condition
  var condDesc = '';
  var condProducts = [];
  if (porosity === 'low' || width === 'fine') {
    condDesc = 'Use a lightweight conditioner. Apply generously, detangle with a wide-tooth comb or fingers, then rinse out almost completely. Low-porosity hair can struggle with heavy conditioners sitting on top.';
    condProducts = ['XHC Papaya Conditioner', 'Garnier Hair Food Aloe Conditioner', 'Noughty To The Rescue Conditioner'];
  } else if (porosity === 'high' || texture === 'coily') {
    condDesc = 'Apply a rich, moisturising conditioner generously. Detangle gently with a wide-tooth comb. Leave a generous amount in for extra moisture. Deep condition weekly for 30+ minutes.';
    condProducts = ['Cantu Hydrating Cream Conditioner', 'Shea Moisture Coconut & Hibiscus Conditioner', 'Garnier Hair Food Banana Mask'];
  } else {
    condDesc = 'Apply conditioner mid-length to ends. Detangle with a wide-tooth comb or fingers. Rinse out about 90%, leaving a little for moisture. Deep condition every 1-2 weeks.';
    condProducts = ['XHC Banana Conditioner', 'Cantu Hydrating Cream Conditioner', 'Noughty To The Rescue Conditioner'];
  }
  steps.push({ number: 2, title: 'Condition', desc: condDesc, products: condProducts });

  // Step 3: Style
  var styleDesc = '';
  var styleProducts = [];
  if (concern === 'frizz') {
    styleDesc = 'On soaking wet hair, apply a strong-hold gel using praying hands then scrunch upwards. Gel creates a cast that locks out humidity. Once 100% dry, scrunch out the crunch (SOTC) for soft, defined, frizz-free curls.';
    styleProducts = ['Umberto Giannini Curl Jelly', 'Boots Essentials Gel', 'Cantu Curl Activator Cream + gel'];
  } else if (concern === 'definition') {
    styleDesc = 'On soaking wet hair, rake a curl cream through sections, then apply gel on top. Use finger coiling on trouble spots. The cream defines, the gel holds. SOTC when fully dry.';
    styleProducts = ['Noughty Wave Hello Curl Cream + gel', 'Umberto Giannini Curl Jelly', 'Cantu Curl Activator Cream'];
  } else if (concern === 'moisture') {
    styleDesc = 'On soaking wet hair, apply a leave-in conditioner first, then a lightweight cream or mousse. Seal with a small amount of oil if high porosity. Less gel, more moisture-focused products.';
    styleProducts = ['XHC No Rinse Conditioner', 'Cantu Curl Activator Cream', 'Garnier Hair Food Banana Mask (leave-in)'];
  } else if (concern === 'volume') {
    styleDesc = 'On soaking wet hair, apply a lightweight mousse or gel. Flip head upside down and scrunch products in. Clip roots while drying for lift. Diffuse upside down on low heat.';
    styleProducts = ['Boots Essentials Gel (lightweight)', 'Umberto Giannini Curl Jelly', 'Root clips'];
  } else if (concern === 'damage') {
    styleDesc = 'On soaking wet hair, apply a protein-rich leave-in, followed by a cream and gel. Focus on sealing moisture in. Minimise manipulation. Use the LOC method (Liquid, Oil, Cream) if high porosity.';
    styleProducts = ['Shea Moisture JBCO Treatment Masque', 'Cantu Curl Activator Cream', 'Umberto Giannini Curl Jelly'];
  } else {
    styleDesc = 'On soaking wet hair, apply your styling products. Use praying hands and scrunching. Apply from ends upward. Once fully dry, scrunch out the crunch.';
    styleProducts = ['Umberto Giannini Curl Jelly', 'Boots Essentials Gel'];
  }
  steps.push({ number: 3, title: 'Style', desc: styleDesc, products: styleProducts });

  // Step 4: Dry
  var dryDesc = '';
  if (texture === 'wavy') {
    dryDesc = 'Plop in a microfibre towel or t-shirt for 10-20 minutes. Then either air dry or diffuse using the pixie method (scoop curls into diffuser cup) on low heat. Wavies often get better results with some diffusing.';
  } else if (texture === 'coily') {
    dryDesc = 'Air drying is kindest to coily hair. Blot gently with a microfibre towel. If diffusing, hover only (no touching) on low heat. Expect significant shrinkage as hair dries.';
  } else {
    dryDesc = 'Plop in a microfibre towel for 15-30 minutes. Then air dry or hover-diffuse on low heat, low speed. Do not touch your hair while it dries. Once 100% dry, scrunch out the crunch.';
  }
  steps.push({ number: 4, title: 'Dry', desc: dryDesc, products: ['Microfibre towel', 'Diffuser attachment'] });

  // Step 5: Refresh
  steps.push({
    number: 5,
    title: 'Refresh (Day 2+)',
    desc: 'Sleep with hair in a loose pineapple (gathered at the crown) with a silk/satin scrunchie. Use a silk/satin pillowcase. In the morning: spritz with water and a little leave-in conditioner, scrunch, and go. Re-gel if needed.',
    products: ['Silk/satin pillowcase', 'Satin scrunchie', 'Spray bottle with water + leave-in']
  });

  // Build HTML
  var html = '';
  for (var i = 0; i < steps.length; i++) {
    var s = steps[i];
    html += '<div class="routine-step">';
    html += '<span class="routine-step-number">' + s.number + '</span>';
    html += '<h4>' + s.title + '</h4>';
    html += '<p>' + s.desc + '</p>';
    if (s.products && s.products.length) {
      html += '<div class="product-suggestions">';
      for (var j = 0; j < s.products.length; j++) {
        html += '<span class="product-suggestion">' + escHtml(s.products[j]) + '</span>';
      }
      html += '</div>';
    }
    html += '</div>';
  }

  return html;
}

function buildProductSuggestions(texture, porosity, width, scalp, concern, budget) {
  var html = '';

  if (budget === 'budget') {
    html += '<div class="card mb-2">';
    html += '<h3>Budget Starter Kit (under &pound;5 total)</h3>';
    html += '<p class="text-muted" style="font-size:0.9rem;">Available at Poundland, Savers, Boots, and Superdrug.</p>';
    html += '<div class="product-suggestions mt-1">';
    html += '<span class="product-suggestion">XHC Banana Conditioner - &pound;1 (co-wash + conditioner)</span>';
    html += '<span class="product-suggestion">XHC Papaya Shampoo - &pound;1 (sulphate-free cleanser)</span>';
    html += '<span class="product-suggestion">Boots Essentials Gel - 99p (styling)</span>';
    html += '<span class="product-suggestion">XHC No Rinse Conditioner - &pound;1.25 (leave-in)</span>';
    html += '</div>';
    html += '</div>';

    if (concern === 'frizz' || concern === 'definition') {
      html += '<div class="card mb-2">';
      html += '<h3>Extra: Garnier Hair Food Range</h3>';
      html += '<p class="text-muted" style="font-size:0.9rem;">&pound;6-8 each at Boots and Superdrug. The Banana mask doubles as a deep conditioner and styling product.</p>';
      html += '</div>';
    }
  } else if (budget === 'mid') {
    html += '<div class="card mb-2">';
    html += '<h3>Mid-Range Kit (&pound;20-30 total)</h3>';
    html += '<p class="text-muted" style="font-size:0.9rem;">Available at Boots, Superdrug, and online.</p>';
    html += '<div class="product-suggestions mt-1">';
    html += '<span class="product-suggestion">Cantu Cleansing Cream Shampoo - &pound;6.99</span>';
    html += '<span class="product-suggestion">Cantu Hydrating Cream Conditioner - &pound;6.99</span>';

    if (texture === 'wavy' || width === 'fine') {
      html += '<span class="product-suggestion">Noughty Wave Hello Curl Cream - &pound;8.99</span>';
      html += '<span class="product-suggestion">Umberto Giannini Curl Jelly - &pound;8.95</span>';
    } else {
      html += '<span class="product-suggestion">Cantu Curl Activator Cream - &pound;9.99</span>';
      html += '<span class="product-suggestion">Umberto Giannini Curl Jelly - &pound;8.95</span>';
    }
    html += '</div>';
    html += '</div>';

    if (porosity === 'high' || concern === 'damage') {
      html += '<div class="card mb-2">';
      html += '<h3>Add: Protein Treatment</h3>';
      html += '<p class="text-muted" style="font-size:0.9rem;">Shea Moisture Jamaican Black Castor Oil Treatment Masque - &pound;9.75 at Boots (often on sale). Use weekly for 30 minutes.</p>';
      html += '</div>';
    }
  } else {
    html += '<div class="card mb-2">';
    html += '<h3>Premium Kit (&pound;50-80 total)</h3>';
    html += '<p class="text-muted" style="font-size:0.9rem;">Available at LookFantastic, brand websites, and select Boots stores.</p>';
    html += '<div class="product-suggestions mt-1">';

    if (texture === 'wavy' || width === 'fine') {
      html += '<span class="product-suggestion">Boucleme Curl Cleanser - &pound;25</span>';
      html += '<span class="product-suggestion">Curlsmith Weightless Air Dry Cream</span>';
      html += '<span class="product-suggestion">Boucleme Super Hold Styler - &pound;25</span>';
    } else {
      html += '<span class="product-suggestion">Flora & Curl Flower Garden Shampoo</span>';
      html += '<span class="product-suggestion">Boucleme Intensive Moisture Treatment - &pound;25</span>';
      html += '<span class="product-suggestion">Jessicurl Confident Coils Lotion</span>';
      html += '<span class="product-suggestion">Boucleme Super Hold Styler - &pound;25</span>';
    }
    html += '</div>';
    html += '</div>';
  }

  // UK shopping tips
  html += '<div class="card">';
  html += '<h3>Where to Shop (UK)</h3>';
  html += '<p class="text-muted" style="font-size:0.9rem;">Tips for finding CGM products on the UK high street:</p>';
  html += '<ul style="color:var(--text-muted);font-size:0.85rem;padding-left:1.25rem;margin-top:0.5rem;">';
  html += '<li><strong>Poundland / Savers:</strong> XHC range from 99p. Best budget CGM products.</li>';
  html += '<li><strong>Superdrug:</strong> Best high street range. Look for 3-for-2 offers on Cantu and Noughty.</li>';
  html += '<li><strong>Boots:</strong> Good for Umberto Giannini (often 3-for-2), Garnier Hair Food, and Curlsmith.</li>';
  html += '<li><strong>TK Maxx:</strong> Premium brands at up to 60% off. Worth checking regularly.</li>';
  html += '<li><strong>LookFantastic:</strong> Widest online range with 20+ CGM brands.</li>';
  html += '</ul>';
  html += '</div>';

  return html;
}

// ============ UTILITIES ============

function escHtml(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

// ============ INIT ============

document.addEventListener('DOMContentLoaded', function() {
  // Init quiz if on quiz page
  if (document.getElementById('quizProgress')) {
    initQuiz();
  }
});
