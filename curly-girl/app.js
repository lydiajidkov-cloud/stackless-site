// Curly Girl UK - Application Logic

// ============ NAVIGATION ============

function toggleNav() {
  var links = document.getElementById('navLinks');
  if (links) links.classList.toggle('open');
}

// ============ TAB SWITCHING ============

function switchTab(tabName) {
  // Update tab buttons
  var tabs = document.querySelectorAll('.checker-tab');
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active');
    if (tabs[i].getAttribute('data-tab') === tabName) {
      tabs[i].classList.add('active');
    }
  }
  // Update panels
  var panels = document.querySelectorAll('.tab-panel');
  for (var i = 0; i < panels.length; i++) {
    panels[i].classList.remove('active');
  }
  var target = document.getElementById('tab-' + tabName);
  if (target) target.classList.add('active');
}

// ============ PRODUCT SEARCH ============

function searchProducts() {
  var input = document.getElementById('productSearchInput');
  var resultsEl = document.getElementById('productSearchResults');
  if (!input || !resultsEl) return;

  var query = input.value.trim().toLowerCase();
  if (query.length < 2) {
    resultsEl.innerHTML = '';
    return;
  }

  var products = window.CG_PRODUCTS || [];
  var matches = [];

  for (var i = 0; i < products.length; i++) {
    var p = products[i];
    var searchable = (p.brand + ' ' + p.name).toLowerCase();
    if (searchable.indexOf(query) !== -1) {
      matches.push(p);
      if (matches.length >= 15) break;
    }
  }

  if (matches.length === 0) {
    resultsEl.innerHTML = '<p class="text-muted mt-1" style="font-size:0.9rem;">No products found. Try a different name, or paste the ingredient list below.</p>';
    return;
  }

  var html = '';
  for (var i = 0; i < matches.length; i++) {
    var m = matches[i];
    var verdictClass = 'product-' + m.cgm;
    var verdictLabel = m.cgm === 'approved' ? 'CG Approved' :
                       m.cgm === 'caution' ? 'Caution' : 'Not Approved';
    var badgeClass = 'badge-' + m.cgm.replace('not_approved', 'not-approved');

    html += '<div class="product-card ' + verdictClass + '" onclick="toggleProductDetail(this)">';
    html += '  <div class="product-card-main">';
    html += '    <div class="product-card-info">';
    html += '      <div class="product-card-name">' + escHtml(m.name) + '</div>';
    html += '      <div class="product-card-meta">' + escHtml(m.brand) + ' &middot; ' + escHtml(m.retailer) + ' &middot; ' + escHtml(m.price) + '</div>';
    html += '    </div>';
    html += '    <span class="ingredient-badge ' + badgeClass + '">' + verdictLabel + '</span>';
    html += '  </div>';
    html += '  <div class="product-card-detail">';
    html += '    <div class="product-detail-row"><span class="product-detail-label">Category:</span> ' + escHtml(formatCategory(m.category)) + '</div>';
    html += '    <div class="product-detail-row"><span class="product-detail-label">Hair type:</span> ' + escHtml(m.hairType) + '</div>';
    html += '    <div class="product-detail-row"><span class="product-detail-label">Weight:</span> ' + escHtml(m.weight) + '</div>';
    if (m.notes) {
      html += '  <div class="product-detail-row"><span class="product-detail-label">Notes:</span> ' + escHtml(m.notes) + '</div>';
    }
    if (m.tags && m.tags.length > 0) {
      html += '  <div class="product-detail-tags">';
      for (var j = 0; j < m.tags.length; j++) {
        html += '<span class="product-tag">' + escHtml(m.tags[j]) + '</span>';
      }
      html += '  </div>';
    }
    html += '  </div>';
    html += '</div>';
  }

  if (matches.length >= 15) {
    html += '<p class="text-muted mt-1" style="font-size:0.85rem;">Showing first 15 results. Type more to narrow down.</p>';
  }

  resultsEl.innerHTML = html;
}

function toggleProductDetail(card) {
  card.classList.toggle('expanded');
}

function formatCategory(cat) {
  return cat.replace(/-/g, ' ').replace(/\b\w/g, function(c) { return c.toUpperCase(); });
}

// ============ OCR (SNAP INGREDIENTS) ============

var tesseractLoaded = false;
var tesseractWorker = null;

function loadTesseract(callback) {
  if (tesseractLoaded) { callback(); return; }
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js';
  script.onload = function() { tesseractLoaded = true; callback(); };
  script.onerror = function() {
    var progress = document.getElementById('ocrProgress');
    var progressText = document.getElementById('ocrProgressText');
    if (progress) progress.classList.add('active');
    if (progressText) progressText.textContent = 'Failed to load OCR engine. Check your internet connection.';
  };
  document.head.appendChild(script);
}

function handleOCRFile(input) {
  if (!input.files || !input.files[0]) return;
  var file = input.files[0];
  var reader = new FileReader();
  reader.onload = function(e) {
    var preview = document.getElementById('ocrPreview');
    var img = document.getElementById('ocrImagePreview');
    if (preview && img) {
      img.src = e.target.result;
      preview.classList.add('active');
    }
    // Hide previous results
    var review = document.getElementById('ocrReview');
    var results = document.getElementById('ocrResults');
    if (review) review.classList.remove('active');
    if (results) results.innerHTML = '';
    runOCR(e.target.result);
  };
  reader.readAsDataURL(file);
}

function runOCR(imageData) {
  var progress = document.getElementById('ocrProgress');
  var progressFill = document.getElementById('ocrProgressFill');
  var progressText = document.getElementById('ocrProgressText');
  if (progress) progress.classList.add('active');
  if (progressFill) progressFill.style.width = '5%';
  if (progressText) progressText.textContent = 'Loading OCR engine...';

  loadTesseract(function() {
    if (progressText) progressText.textContent = 'Recognising text...';
    if (progressFill) progressFill.style.width = '20%';

    Tesseract.recognize(imageData, 'eng', {
      logger: function(m) {
        if (m.status === 'recognizing text' && typeof m.progress === 'number') {
          var pct = Math.round(20 + m.progress * 75);
          if (progressFill) progressFill.style.width = pct + '%';
          if (progressText) progressText.textContent = 'Reading ingredients... ' + Math.round(m.progress * 100) + '%';
        }
      }
    }).then(function(result) {
      if (progressFill) progressFill.style.width = '100%';
      if (progressText) progressText.textContent = 'Done!';
      setTimeout(function() {
        if (progress) progress.classList.remove('active');
      }, 800);

      var text = result.data.text || '';
      // Clean up OCR artifacts
      text = text.replace(/\n+/g, ', ').replace(/\s{2,}/g, ' ').trim();

      var review = document.getElementById('ocrReview');
      var reviewText = document.getElementById('ocrReviewText');
      if (review) review.classList.add('active');
      if (reviewText) reviewText.value = text;
    }).catch(function(err) {
      if (progressText) progressText.textContent = 'OCR failed: ' + (err.message || 'Unknown error');
      if (progressFill) progressFill.style.width = '0%';
    });
  });
}

function checkOCRIngredients() {
  var reviewText = document.getElementById('ocrReviewText');
  var resultsEl = document.getElementById('ocrResults');
  if (!reviewText || !resultsEl) return;

  var raw = reviewText.value.trim();
  if (!raw) return;

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

  var html = '<div class="verdict-banner ' + verdictClass + '" style="margin-top:1rem;">' + verdictText + '</div>';
  html += '<div class="ingredient-list">';
  for (var i = 0; i < results.length; i++) {
    var r = results[i];
    var badgeLabel = r.status === 'not_approved' ? 'Not Approved' :
                     r.status === 'approved' ? 'Approved' :
                     r.status === 'caution' ? 'Caution' : 'Unknown';
    html += '<div class="ingredient-item">';
    html += '  <div class="ingredient-dot dot-' + r.status + '"></div>';
    html += '  <div class="ingredient-info">';
    html += '    <div class="ingredient-name status-' + r.status + '">' + escHtml(r.name) + '</div>';
    html += '    <div class="ingredient-reason">' + escHtml(r.reason) + '</div>';
    html += '  </div>';
    html += '  <span class="ingredient-badge badge-' + r.status.replace('not_approved', 'not-approved') + '">' + badgeLabel + '</span>';
    html += '</div>';
  }
  html += '</div>';
  resultsEl.innerHTML = html;
}

function resetOCR() {
  var preview = document.getElementById('ocrPreview');
  var progress = document.getElementById('ocrProgress');
  var review = document.getElementById('ocrReview');
  var results = document.getElementById('ocrResults');
  var fileInput = document.getElementById('ocrFileInput');
  if (preview) preview.classList.remove('active');
  if (progress) progress.classList.remove('active');
  if (review) review.classList.remove('active');
  if (results) results.innerHTML = '';
  if (fileInput) fileInput.value = '';
}

// ============ BARCODE SCANNER ============

var html5QrcodeLoaded = false;
var html5QrcodeScanner = null;

function loadHtml5Qrcode(callback) {
  if (html5QrcodeLoaded) { callback(); return; }
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/html5-qrcode@2.3.8/html5-qrcode.min.js';
  script.onload = function() { html5QrcodeLoaded = true; callback(); };
  script.onerror = function() {
    var result = document.getElementById('barcodeResult');
    if (result) {
      result.classList.add('active');
      result.innerHTML = '<div class="info-box"><div class="info-box-icon">&#9888;</div><div>Failed to load barcode scanner. Check your internet connection.</div></div>';
    }
  };
  document.head.appendChild(script);
}

function startBarcodeScanner() {
  var scannerBox = document.getElementById('barcodeScannerBox');
  var scanBtn = document.getElementById('barcodeScanBtn');
  var resultEl = document.getElementById('barcodeResult');

  if (html5QrcodeScanner) {
    html5QrcodeScanner.stop().then(function() {
      html5QrcodeScanner = null;
      if (scannerBox) scannerBox.classList.remove('active');
      if (scanBtn) scanBtn.innerHTML = '<span class="camera-btn-icon">&#128722;</span> Scan Barcode';
    }).catch(function() {});
    return;
  }

  if (resultEl) { resultEl.classList.remove('active'); resultEl.innerHTML = ''; }
  if (scanBtn) scanBtn.innerHTML = '<span class="camera-btn-icon">&#9209;</span> Stop Scanner';

  loadHtml5Qrcode(function() {
    if (scannerBox) scannerBox.classList.add('active');
    html5QrcodeScanner = new Html5Qrcode('barcodeReader');
    html5QrcodeScanner.start(
      { facingMode: 'environment' },
      { fps: 10, qrbox: { width: 250, height: 150 }, aspectRatio: 1.5 },
      function(decodedText) {
        // Barcode scanned successfully
        html5QrcodeScanner.stop().then(function() {
          html5QrcodeScanner = null;
          if (scannerBox) scannerBox.classList.remove('active');
          if (scanBtn) scanBtn.innerHTML = '<span class="camera-btn-icon">&#128722;</span> Scan Again';
          lookupBarcode(decodedText);
        });
      },
      function() { /* ignore scan errors, keep scanning */ }
    ).catch(function(err) {
      if (scannerBox) scannerBox.classList.remove('active');
      if (scanBtn) scanBtn.innerHTML = '<span class="camera-btn-icon">&#128722;</span> Scan Barcode';
      if (resultEl) {
        resultEl.classList.add('active');
        var msg = 'Could not access camera.';
        if (err && err.toString().indexOf('NotAllowedError') !== -1) {
          msg = 'Camera permission denied. Please allow camera access in your browser settings and try again.';
        } else if (err && err.toString().indexOf('NotFoundError') !== -1) {
          msg = 'No camera found on this device. Try the Search or Snap tab instead.';
        }
        resultEl.innerHTML = '<div class="info-box"><div class="info-box-icon">&#9888;</div><div><p>' + msg + '</p></div></div>';
      }
    });
  });
}

function lookupBarcode(barcode) {
  var resultEl = document.getElementById('barcodeResult');
  if (!resultEl) return;

  resultEl.classList.add('active');
  resultEl.innerHTML = '<div class="info-box" style="justify-content:center;"><div class="info-box-icon" style="animation:spin 1s linear infinite;">&#9881;</div><div>Looking up barcode ' + escHtml(barcode) + '...</div></div>';

  fetch('https://world.openfoodfacts.org/api/v2/product/' + encodeURIComponent(barcode) + '.json')
    .then(function(response) { return response.json(); })
    .then(function(data) {
      if (data.status === 1 && data.product) {
        var p = data.product;
        var name = p.product_name || 'Unknown product';
        var brand = p.brands || 'Unknown brand';
        var ingredients = p.ingredients_text || p.ingredients_text_en || '';

        var html = '<div class="card" style="margin-top:1rem; text-align:left;">';
        html += '<h4 style="margin-bottom:0.25rem;">' + escHtml(name) + '</h4>';
        html += '<p class="text-muted" style="font-size:0.85rem;">' + escHtml(brand) + ' &middot; Barcode: ' + escHtml(barcode) + '</p>';

        if (ingredients) {
          html += '<p style="font-size:0.85rem; margin-top:0.75rem; color:var(--text-muted);">Ingredients found. Checking CGM compatibility...</p>';
          html += '</div>';

          // Run ingredient check
          var items = parseIngredients(ingredients);
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
              results.push({ input: items[i], name: items[i], status: 'unknown', reason: 'Not in our database.', category: 'unknown' });
            }
          }

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

          html += '<div class="verdict-banner ' + verdictClass + '">' + verdictText + '</div>';
          html += '<div class="ingredient-list">';
          for (var i = 0; i < results.length; i++) {
            var r = results[i];
            var badgeLabel = r.status === 'not_approved' ? 'Not Approved' :
                             r.status === 'approved' ? 'Approved' :
                             r.status === 'caution' ? 'Caution' : 'Unknown';
            html += '<div class="ingredient-item">';
            html += '  <div class="ingredient-dot dot-' + r.status + '"></div>';
            html += '  <div class="ingredient-info">';
            html += '    <div class="ingredient-name status-' + r.status + '">' + escHtml(r.name) + '</div>';
            html += '    <div class="ingredient-reason">' + escHtml(r.reason) + '</div>';
            html += '  </div>';
            html += '  <span class="ingredient-badge badge-' + r.status.replace('not_approved', 'not-approved') + '">' + badgeLabel + '</span>';
            html += '</div>';
          }
          html += '</div>';
        } else {
          html += '<div class="info-box" style="margin-top:0.75rem;"><div class="info-box-icon">&#128533;</div><div>Product found but no ingredient list available in the database. Try the <strong>Snap</strong> tab to photograph the ingredients instead.</div></div>';
          html += '</div>';
        }

        resultEl.innerHTML = html;
      } else {
        resultEl.innerHTML = '<div class="card" style="margin-top:1rem; text-align:center;">' +
          '<div style="font-size:2rem; margin-bottom:0.75rem;">&#128533;</div>' +
          '<h4>Product not found</h4>' +
          '<p class="text-muted" style="font-size:0.85rem;">Barcode ' + escHtml(barcode) + ' isn\'t in the Open Beauty Facts database. UK haircare coverage is limited.</p>' +
          '<p class="text-muted" style="font-size:0.85rem; margin-top:0.5rem;">Try <strong>Search Product</strong> to check our 300+ UK product database, or <strong>Snap Ingredients</strong> to photograph the label.</p>' +
          '</div>';
      }
    })
    .catch(function() {
      resultEl.innerHTML = '<div class="info-box"><div class="info-box-icon">&#9888;</div><div>Network error looking up barcode. Check your internet connection and try again.</div></div>';
    });
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
    summaries.push('Wavy hair (Type 2) has a gentler curl pattern, so natural oils travel further down the shaft than on curlier types, but not as easily as on straight hair. You need lightweight products that enhance your wave pattern without weighing it down. Many wavies find that less product gives better results.');
  } else if (texture === 'curly') {
    summaries.push('Curly hair (Type 3) has an elliptical cross-section that creates bends where natural oils get stuck. This is why curly hair tends to be oily at the roots but dry at the ends. Regular deep conditioning and moisture-rich products replace what your scalp oils cannot deliver.');
  } else if (texture === 'coily') {
    summaries.push('Coily hair (Type 4) has the tightest curl pattern and the most bends per strand, making it the driest hair type. Natural scalp oils barely travel past the first centimetre. Your hair thrives with intensive moisture, thick butters, and the LOC/LCO layering method to lock hydration in.');
  } else {
    summaries.push('Even straight hair benefits from gentle, sulphate-free cleansing. Without harsh stripping, your natural oils can do their job of moisturising from root to tip.');
  }

  if (porosity === 'low') {
    summaries.push('Your cuticle layer is tightly packed, so water and products tend to sit on top rather than absorb. Use lightweight, water-based products and apply to warm, damp hair (warmth opens cuticles slightly). Avoid heavy butters that will just sit on the surface.');
  } else if (porosity === 'high') {
    summaries.push('Your cuticle layer has gaps, so moisture rushes in but leaks out just as fast. Focus on protein treatments to temporarily fill those gaps, then seal with oils or butters. The LOC method (Liquid, Oil, Cream) works well for locking moisture in.');
  }

  if (width === 'fine') {
    summaries.push('Fine strands have a smaller diameter and are easily weighed down. Avoid heavy butters and thick creams. Mousses and lightweight gels are your friends.');
  } else if (width === 'coarse') {
    summaries.push('Coarse strands have a larger diameter and can handle heavier products. Rich creams, butters, and oils that would weigh down fine hair will work well for you.');
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
  var refreshDesc = 'Sleep with hair in a loose pineapple (gathered at the crown) with a silk/satin scrunchie. Use a silk/satin pillowcase to reduce friction. In the morning: spritz with water and a little leave-in conditioner, scrunch, and go. Re-gel if needed.';
  if (texture === 'wavy') {
    refreshDesc = 'Sleep with hair in a loose pineapple or medusa clips (multiple clips for longer hair). Use a silk/satin pillowcase. In the morning: lightly spritz with water, scrunch, and go. Wavies often get better day-2 hair by not over-wetting. If waves have dropped, try scrunching in a tiny amount of mousse on dry hair.';
  }
  steps.push({
    number: 5,
    title: 'Refresh (Day 2+)',
    desc: refreshDesc,
    products: ['Silk/satin pillowcase', 'Satin scrunchie', 'Spray bottle with water + leave-in']
  });

  // Step 6: Hard Water (UK-specific)
  steps.push({
    number: 6,
    title: 'Hard Water Check (UK)',
    desc: 'Over 60% of the UK has hard water. Hard water leaves mineral deposits (calcium, magnesium) on hair that block moisture absorption and cause buildup. Signs: hair feels waxy, products stop working, limp curls. If you are in a hard water area, use a chelating or clarifying shampoo monthly (like Noughty Detox Dynamo), or consider a shower filter. Apple cider vinegar rinses can also help dissolve mineral buildup.',
    products: ['Noughty Detox Dynamo Shampoo', 'Shower filter', 'Apple cider vinegar rinse (1 tbsp ACV in 500ml water)']
  });

  // Step 7: Transition Period
  steps.push({
    number: 7,
    title: 'The Transition Period',
    desc: 'Expect 2-8 weeks of adjustment when starting CGM. Your scalp needs time to recalibrate oil production after years of harsh cleansing. Hair may feel greasy, flat, or unpredictable during this time. This is normal. Stick with it for at least 4-6 weeks before judging results. Wavies often have a shorter transition (2-4 weeks) because their scalp oil production is usually less disrupted.',
    products: []
  });

  // Protein-Moisture Balance tip
  if (concern === 'damage' || porosity === 'high') {
    steps.push({
      number: 8,
      title: 'Protein-Moisture Balance',
      desc: 'The wet strand test: take a wet strand and gently pull. If it stretches and bounces back, the balance is right. If it snaps immediately, you need moisture. If it stretches like gum without returning, you need protein. High porosity and damaged hair often need regular protein treatments (every 1-2 weeks). Alternate with deep moisture treatments. Look for hydrolysed protein, keratin, or silk amino acids in products.',
      products: ['Shea Moisture JBCO Treatment Masque (protein)', 'Garnier Hair Food Banana Mask (moisture)', 'Curlsmith Bond Curl Rehab Salve (both)']
    });
  }

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
    html += '<p class="text-muted" style="font-size:0.9rem;">Available at Poundland, Savers, Home Bargains, and Boots.</p>';
    html += '<div class="product-suggestions mt-1">';
    html += '<span class="product-suggestion">XHC Banana Conditioner 400ml - &pound;1 (co-wash + conditioner)</span>';
    html += '<span class="product-suggestion">XHC Papaya Shampoo 400ml - &pound;1 (sulphate-free cleanser)</span>';
    html += '<span class="product-suggestion">Boots Essentials Gel - 99p (styling hold)</span>';
    html += '<span class="product-suggestion">XHC No Rinse Conditioner 250ml - &pound;1.25 (leave-in)</span>';
    html += '</div>';
    html += '</div>';

    // Budget alternatives by hair type
    html += '<div class="card mb-2">';
    html += '<h3>Budget Alternatives by Hair Type</h3>';
    html += '<div class="product-suggestions mt-1">';
    if (texture === 'wavy' || width === 'fine') {
      html += '<span class="product-suggestion">Studio 2000 Extra Hold Mousse - ~&pound;1.50 at Savers (lightweight for wavies)</span>';
      html += '<span class="product-suggestion">Tesco Extreme Styling Gel - &pound;1.50 (firm hold)</span>';
      html += '<span class="product-suggestion">Superdrug Hair Mousse Firm Hold - ~&pound;2 (budget mousse)</span>';
      html += '<span class="product-suggestion">Pantene Mousse No 5 - ~&pound;3-4 at Savers (community favourite for wavies)</span>';
    } else if (texture === 'coily') {
      html += '<span class="product-suggestion">Eco Styler Olive Oil Gel 236ml - &pound;2.99 at Savers/Pak\'s (holy grail for curlies)</span>';
      html += '<span class="product-suggestion">Inecto Naturals Coconut Conditioner 500ml - &pound;1.99 at Home Bargains</span>';
      html += '<span class="product-suggestion">XHC Biotin & Collagen Conditioner - &pound;1 (protein boost)</span>';
    } else {
      html += '<span class="product-suggestion">Wella Shockwaves Wet Look Gel - ~&pound;2.50 at Savers (strong hold)</span>';
      html += '<span class="product-suggestion">Eco Styler Krystal Gel 236ml - &pound;2.99 (clear, no residue)</span>';
      html += '<span class="product-suggestion">XHC Strawberry Conditioner 400ml - &pound;1 (alternative co-wash)</span>';
    }
    html += '</div>';
    html += '</div>';

    // Budget deep conditioning
    html += '<div class="card mb-2">';
    html += '<h3>Budget Deep Conditioning</h3>';
    html += '<p class="text-muted" style="font-size:0.9rem;">Treat your hair weekly without spending much.</p>';
    html += '<div class="product-suggestions mt-1">';
    html += '<span class="product-suggestion">Organic Shop Hair Masks - &pound;2.50 at Tesco (7 varieties, all protein-free)</span>';
    html += '<span class="product-suggestion">Garnier Hair Food Banana Mask - &pound;4-6 at Boots/Superdrug (doubles as styler)</span>';
    html += '<span class="product-suggestion">XHC Argan Hair Treatment Shots - &pound;1.25 at Poundland (quick treatment)</span>';
    html += '</div>';
    html += '</div>';

    // Supermarket finds
    html += '<div class="card mb-2">';
    html += '<h3>Supermarket Finds</h3>';
    html += '<p class="text-muted" style="font-size:0.9rem;">CGM-friendly products in your weekly shop.</p>';
    html += '<div class="product-suggestions mt-1">';
    html += '<span class="product-suggestion">Tesco Extreme Styling Gel (Green/Blue Tub) - &pound;1.50</span>';
    html += '<span class="product-suggestion">Tesco Pro Vitamin B5 Conditioner - ~&pound;1.50</span>';
    html += '<span class="product-suggestion">Sainsbury\'s Apple Conditioner - ~&pound;1</span>';
    html += '<span class="product-suggestion">Asda Apple Conditioner - ~&pound;1 (budget co-wash)</span>';
    html += '</div>';
    html += '<p class="text-muted" style="font-size:0.8rem;margin-top:0.5rem;"><strong>Warning:</strong> Tesco Extracts conditioners now contain Dimethicone. No longer approved.</p>';
    html += '</div>';

  } else if (budget === 'mid') {
    html += '<div class="card mb-2">';
    html += '<h3>Mid-Range Starter Kit (&pound;20-35 total)</h3>';
    html += '<p class="text-muted" style="font-size:0.9rem;">Available at Boots, Superdrug, and Pak\'s.</p>';
    html += '<div class="product-suggestions mt-1">';

    if (texture === 'wavy' || width === 'fine') {
      html += '<span class="product-suggestion">Noughty Wave Hello Shampoo 250ml - &pound;6.99 (designed for wavies)</span>';
      html += '<span class="product-suggestion">Noughty Wave Hello Conditioner 250ml - &pound;6.99</span>';
      html += '<span class="product-suggestion">Noughty Wave Hello Curl Cream 150ml - &pound;6.99-8.99</span>';
      html += '<span class="product-suggestion">Umberto Giannini Boho Beach Jelly - &pound;6.50-8 (lightweight for waves)</span>';
    } else if (texture === 'coily') {
      html += '<span class="product-suggestion">Cantu Cleansing Cream Shampoo 400ml - &pound;4.99-6.99</span>';
      html += '<span class="product-suggestion">Cantu Hydrating Cream Conditioner 400ml - &pound;4.99-6.99</span>';
      html += '<span class="product-suggestion">Cantu Define & Shine Custard - &pound;5-7 (great definition)</span>';
      html += '<span class="product-suggestion">Eco Styler Olive Oil Gel 473ml - &pound;3.50-4 (holy grail hold)</span>';
    } else {
      html += '<span class="product-suggestion">Cantu Cleansing Cream Shampoo 400ml - &pound;4.99-6.99</span>';
      html += '<span class="product-suggestion">Cantu Hydrating Cream Conditioner 400ml - &pound;4.99-6.99</span>';
      html += '<span class="product-suggestion">Cantu Curl Activator Cream - &pound;5-7</span>';
      html += '<span class="product-suggestion">Umberto Giannini Curl Jelly 200ml - &pound;6.50-8 (UK bestseller)</span>';
    }
    html += '</div>';
    html += '</div>';

    // Mid-range alternatives
    html += '<div class="card mb-2">';
    html += '<h3>Other Mid-Range Options</h3>';
    html += '<div class="product-suggestions mt-1">';
    html += '<span class="product-suggestion">Imbue Curl Liberating Shampoo 400ml - &pound;8.99 at Superdrug (100% CGM)</span>';
    html += '<span class="product-suggestion">Imbue Curl Empowering Creme Gel - &pound;8.99 (styling)</span>';
    html += '<span class="product-suggestion">Faith in Nature Conditioners 400ml - &pound;4-6 at Boots (all CGM except Pomegranate)</span>';
    html += '<span class="product-suggestion">As I Am Coconut CoWash - &pound;8-10 at Superdrug (protein-free co-wash)</span>';
    html += '<span class="product-suggestion">Umberto Giannini Curl Jelly XL 500ml - &pound;12-15 (better value)</span>';
    if (scalp === 'oily') {
      html += '<span class="product-suggestion">Faith in Nature Tea Tree Conditioner - &pound;4-6 (clarifying)</span>';
      html += '<span class="product-suggestion">As I Am Dry & Itchy Scalp CoWash - &pound;8-10 (tea tree)</span>';
    }
    html += '</div>';
    html += '</div>';

    // Protein treatment if needed
    if (porosity === 'high' || concern === 'damage') {
      html += '<div class="card mb-2">';
      html += '<h3>Add: Protein Treatment</h3>';
      html += '<p class="text-muted" style="font-size:0.9rem;">Use weekly for 30 minutes. Essential for high porosity or damaged hair.</p>';
      html += '<div class="product-suggestions mt-1">';
      html += '<span class="product-suggestion">Shea Moisture JBCO Treatment Masque - &pound;9-13 at Boots (protein + moisture)</span>';
      html += '<span class="product-suggestion">Shea Moisture Power Greens Reconstructor - &pound;10-13 (protein boost)</span>';
      html += '<span class="product-suggestion">As I Am Restore & Repair JBCO Masque - &pound;10-12 at Superdrug</span>';
      html += '<span class="product-suggestion">Noughty To The Rescue Treatment 300ml - &pound;11.99 (weekly moisture)</span>';
      html += '</div>';
      html += '</div>';
    }

    // Money-saving tips
    html += '<div class="card mb-2">';
    html += '<h3>Money-Saving Tips</h3>';
    html += '<ul style="color:var(--text-muted);font-size:0.85rem;padding-left:1.25rem;margin-top:0.5rem;">';
    html += '<li>Boots 3-for-2 often includes Umberto Giannini, Garnier Hair Food, and Noughty</li>';
    html += '<li>Superdrug 3-for-2 on Cantu, Imbue, and As I Am</li>';
    html += '<li>Shea Moisture frequently goes on sale at Boots (check the &pound;8.66 price)</li>';
    html += "<li>Pak's and Afro hair shops are 10-20% cheaper on Cantu, Shea Moisture, and Eco Styler</li>";
    html += '<li>Faith in Nature 5L refills are the cheapest per-ml conditioner in the UK</li>';
    html += '</ul>';
    html += '</div>';

  } else {
    html += '<div class="card mb-2">';
    html += '<h3>Premium Kit (&pound;50-80 total)</h3>';
    html += '<p class="text-muted" style="font-size:0.9rem;">Available at LookFantastic, brand websites, Boots, and TK Maxx.</p>';
    html += '<div class="product-suggestions mt-1">';

    if (texture === 'wavy' || width === 'fine') {
      html += '<span class="product-suggestion">Boucleme Curl Cleanser - &pound;25 (gentle, lightweight)</span>';
      html += '<span class="product-suggestion">Curlsmith Weightless Air Dry Cream - &pound;22 (designed for fine/wavy)</span>';
      html += '<span class="product-suggestion">Curlsmith Hydro Flexi Jelly - &pound;22 (flexible hold)</span>';
      html += '<span class="product-suggestion">Boucleme Super Hold Styler - &pound;25 (strong hold without weight)</span>';
      html += '<span class="product-suggestion">Innersense I Create Volume - &pound;25-28 (volumising for fine hair)</span>';
    } else if (texture === 'coily') {
      html += '<span class="product-suggestion">Flora & Curl Flower Garden Shampoo - &pound;18 (gentle cleanse)</span>';
      html += '<span class="product-suggestion">Flora & Curl Sweet Hibiscus Curl Activating Lotion - &pound;16</span>';
      html += '<span class="product-suggestion">Boucleme Intensive Moisture Treatment - &pound;25 (deep moisture)</span>';
      html += '<span class="product-suggestion">Afrocenchix Seal - &pound;12-15 (Black-owned, UK brand)</span>';
      html += '<span class="product-suggestion">Curlsmith Double Cream Deep Quencher - &pound;26 (intense moisture)</span>';
    } else {
      html += '<span class="product-suggestion">Curlsmith Curl Quenching Conditioning Wash - &pound;22</span>';
      html += '<span class="product-suggestion">Boucleme Curl Conditioner - &pound;25</span>';
      html += '<span class="product-suggestion">Curlsmith Hold Me Softly Balm - &pound;22 (medium hold)</span>';
      html += '<span class="product-suggestion">Boucleme Super Hold Styler - &pound;25</span>';
      html += '<span class="product-suggestion">Flora & Curl Flower Garden Styling Gel - &pound;14</span>';
    }
    html += '</div>';
    html += '</div>';

    // Premium extras
    html += '<div class="card mb-2">';
    html += '<h3>Premium Treatments</h3>';
    html += '<div class="product-suggestions mt-1">';
    if (porosity === 'high' || concern === 'damage') {
      html += '<span class="product-suggestion">Curlsmith Bond Curl Rehab Salve - &pound;30 (bond repair + moisture)</span>';
      html += '<span class="product-suggestion">Curlsmith Strength Flexi-Protein Filler - &pound;26 (protein treatment)</span>';
    }
    html += '<span class="product-suggestion">Curlsmith Scalp Recipe Detox Kit - &pound;20 (clarifying treatment)</span>';
    html += '<span class="product-suggestion">Jessicurl Deep Conditioning Treatment - &pound;15-18 (from the US, available UK)</span>';
    html += '<span class="product-suggestion">Innersense Hydrating Cream Conditioner - &pound;25-28 (clean beauty)</span>';
    html += '</div>';
    html += '</div>';

    // TK Maxx tip
    html += '<div class="card mb-2">';
    html += '<h3>Save on Premium: TK Maxx</h3>';
    html += '<p class="text-muted" style="font-size:0.9rem;">TK Maxx regularly stocks premium curly brands at 30-60% off. Stock is unpredictable, but worth checking regularly.</p>';
    html += '<ul style="color:var(--text-muted);font-size:0.85rem;padding-left:1.25rem;margin-top:0.5rem;">';
    html += '<li>Giovanni 1L bottles: &pound;6-10 (RRP &pound;12-18)</li>';
    html += '<li>Shea Moisture: &pound;6-9 (RRP &pound;10-13)</li>';
    html += '<li>Camille Rose: &pound;8-12 (RRP &pound;14-18)</li>';
    html += '<li>Bumble & Bumble Curl: &pound;12-18 (RRP &pound;25-35)</li>';
    html += '</ul>';
    html += '</div>';
  }

  // Specialist retailers for all budgets
  if (texture === 'coily' || texture === 'curly') {
    html += '<div class="card mb-2">';
    html += '<h3>Specialist Retailers</h3>';
    html += '<div class="product-suggestions mt-1">';
    html += "<span class=\"product-suggestion\">Pak's Cosmetics - 7 UK stores, 10-20% cheaper on Shea Moisture, Cantu, Eco Styler</span>";
    html += '<span class="product-suggestion">Only Curls - UK curly specialist, full range + starter kits</span>';
    html += '<span class="product-suggestion">Curlsmith direct - free shipping over &pound;30, full range</span>';
    html += '<span class="product-suggestion">Amazon UK - widest range, check seller ratings and expiry dates</span>';
    html += '</div>';
    html += '</div>';
  }

  // UK shopping tips
  html += '<div class="card">';
  html += '<h3>Where to Shop (UK)</h3>';
  html += '<p class="text-muted" style="font-size:0.9rem;">UK retailers stocking CGM-friendly products, from budget to premium:</p>';
  html += '<ul style="color:var(--text-muted);font-size:0.85rem;padding-left:1.25rem;margin-top:0.5rem;">';
  html += '<li><strong>Poundland / Savers:</strong> XHC range from 99p. Best budget CGM products in the UK.</li>';
  html += '<li><strong>Lidl:</strong> Cien range occasionally includes silicone-free options. Check labels, ranges rotate.</li>';
  html += '<li><strong>Aldi:</strong> Lacura range has occasional sulphate-free shampoos. Limited but worth checking.</li>';
  html += '<li><strong>Superdrug:</strong> Best high street range. Cantu, Noughty, Shea Moisture, own-brand options. Look for 3-for-2 offers.</li>';
  html += '<li><strong>Boots:</strong> Umberto Giannini (often 3-for-2), Garnier Hair Food, Curlsmith, Boucleme. Advantage card points add up.</li>';
  html += "<li><strong>Pak's / Afro hair shops:</strong> Best range and prices for Shea Moisture, Cantu, Eco Styler, and brands not stocked on the high street. Often cheaper than Boots/Superdrug.</li>";
  html += '<li><strong>Tesco / Sainsbury\'s:</strong> Limited but growing. Garnier Hair Food, some Cantu, Alberto Balsam for clarifying.</li>';
  html += '<li><strong>TK Maxx:</strong> Premium brands (Boucleme, Flora & Curl, Curlsmith) at up to 60% off. Stock is random, worth checking regularly.</li>';
  html += '<li><strong>Amazon UK:</strong> Widest range online. Good for Curlsmith, Jessicurl, Kinky-Curly, and US imports. Check seller ratings and expiry dates.</li>';
  html += '<li><strong>Only Curls / Curlsmith direct:</strong> UK-based curly hair specialists. Full ranges, bundles, and starter kits. Free shipping over certain thresholds.</li>';
  html += '<li><strong>LookFantastic:</strong> 20+ CGM brands including Boucleme, Cantu, Curlsmith. Regular discount codes.</li>';
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
