// ============================================================
// Pitching 101 -- Interactive Features
// Vanilla JS, no frameworks. All pitch data stored here.
// ============================================================

// ============================================================
// 1. PITCH DATA
// Complete data for all 10 pitch types. Velocity/break ranges
// reflect 2025-2026 MLB Statcast averages.
// ============================================================
var PITCHES = {
  'four-seam': {
    name: 'Four-Seam Fastball',
    abbr: 'FF',
    family: 'fastball',
    velocity: '91-101 mph',
    velMid: 96,
    vBreak: '+16"',
    hBreak: '6-8"',
    hBreakMid: 7,
    description: 'The fastest and straightest pitch. High backspin generates lift, making it appear to "rise" through the zone.',
    whenUsed: 'Most common first pitch in MLB. Devastating as a strikeout pitch when elevated. Relied on most when behind in the count.',
    // Strike zone heat: 3x3 grid, 0-1 intensity
    // [Up-In, Up-Mid, Up-Out, Mid-In, Heart, Mid-Out, Low-In, Low-Mid, Low-Out]
    zoneHeat: [0.30, 0.45, 0.25, 0.15, 0.20, 0.10, 0.05, 0.08, 0.05],
    mlbUsagePct: 35,
    usageContext: 'About 1 in 3 pitches thrown',
    color: '#ef4444',
    trajectory: { type: 'straight' }
  },
  'two-seam': {
    name: 'Two-Seam Fastball',
    abbr: 'FT',
    family: 'fastball',
    velocity: '89-96 mph',
    velMid: 93,
    vBreak: '+10"',
    hBreak: '13-17"',
    hBreakMid: 15,
    description: 'A fastball that tails sharply toward the arm side. Less rise than a four-seam but much more horizontal run.',
    whenUsed: 'Used by ground-ball pitchers to get early-count strikes or induce weak contact. Effective to jam same-side batters.',
    zoneHeat: [0.08, 0.10, 0.20, 0.15, 0.25, 0.35, 0.10, 0.20, 0.30],
    mlbUsagePct: 4,
    usageContext: 'Uncommon \u2014 roughly 1 in 25',
    color: '#ef4444',
    trajectory: { type: 'armside' }
  },
  'cutter': {
    name: 'Cutter',
    abbr: 'FC',
    family: 'fastball',
    velocity: '85-95 mph',
    velMid: 90,
    vBreak: '+11"',
    hBreak: '2-4"',
    hBreakMid: 3,
    description: 'A fastball that breaks slightly toward the glove side at the last moment. Jams same-handed batters and shatters bats.',
    whenUsed: 'Devastating against same-handed hitters. Used to jam batters inside or paint the back edge of the plate.',
    zoneHeat: [0.15, 0.20, 0.10, 0.30, 0.35, 0.15, 0.10, 0.15, 0.05],
    mlbUsagePct: 9,
    usageContext: 'Roughly 1 in 11 pitches',
    color: '#ef4444',
    trajectory: { type: 'gloveside' }
  },
  'sinker': {
    name: 'Sinker',
    abbr: 'SI',
    family: 'fastball',
    velocity: '89-97 mph',
    velMid: 93,
    vBreak: '+7"',
    hBreak: '13-19"',
    hBreakMid: 16,
    description: 'A fastball that dives downward with heavy arm-side run. The go-to pitch for ground-ball pitchers.',
    whenUsed: 'The ultimate double-play pitch. Thrown low in the zone with runners on base. Ground-ball approach centerpiece.',
    zoneHeat: [0.03, 0.05, 0.08, 0.10, 0.20, 0.30, 0.15, 0.35, 0.45],
    mlbUsagePct: 12,
    usageContext: 'Roughly 1 in 8 pitches',
    color: '#ef4444',
    trajectory: { type: 'sink' }
  },
  'curveball': {
    name: 'Curveball',
    abbr: 'CU',
    family: 'breaking',
    velocity: '72-85 mph',
    velMid: 79,
    vBreak: '-6 to -14"',
    hBreak: '4-10"',
    hBreakMid: 7,
    description: 'The classic breaking ball. Strong topspin makes it drop sharply -- the famous 12-to-6 trajectory.',
    whenUsed: 'A devastating chase pitch below the zone on two-strike counts. Also thrown early to disrupt timing with speed difference.',
    zoneHeat: [0.03, 0.05, 0.03, 0.20, 0.15, 0.10, 0.45, 0.35, 0.20],
    mlbUsagePct: 9,
    usageContext: 'Roughly 1 in 11 pitches',
    color: '#60a5fa',
    trajectory: { type: 'curve' }
  },
  'slider': {
    name: 'Slider',
    abbr: 'SL',
    family: 'breaking',
    velocity: '80-90 mph',
    velMid: 85,
    vBreak: '-2 to -6"',
    hBreak: '2-6"',
    hBreakMid: 4,
    description: 'The most common strikeout pitch. Looks like a fastball then suddenly darts down and to the glove side.',
    whenUsed: 'The premier two-strike wipeout pitch. Thrown below or off the edge of the zone for swings-and-misses.',
    zoneHeat: [0.05, 0.05, 0.03, 0.25, 0.15, 0.05, 0.45, 0.30, 0.10],
    mlbUsagePct: 20,
    usageContext: 'About 1 in 5 pitches thrown',
    color: '#60a5fa',
    trajectory: { type: 'slider' }
  },
  'sweeper': {
    name: 'Sweeper',
    abbr: 'ST',
    family: 'breaking',
    velocity: '78-86 mph',
    velMid: 82,
    vBreak: '~0"',
    hBreak: '12-18"',
    hBreakMid: 16,
    description: 'Extreme horizontal sweep like a frisbee -- up to 18 inches of lateral movement. Classified by Statcast in 2023.',
    whenUsed: 'Devastating against opposite-handed hitters. Used as a chase pitch off the plate and for called strikes on the back edge.',
    zoneHeat: [0.03, 0.03, 0.02, 0.30, 0.15, 0.05, 0.40, 0.20, 0.05],
    mlbUsagePct: 7,
    usageContext: 'Roughly 1 in 14 pitches',
    color: '#60a5fa',
    trajectory: { type: 'sweep' }
  },
  'changeup': {
    name: 'Changeup',
    abbr: 'CH',
    family: 'offspeed',
    velocity: '80-90 mph',
    velMid: 85,
    vBreak: '+4"',
    hBreak: '12-16"',
    hBreakMid: 14,
    description: 'Identical arm action to a fastball but arrives 8-15 mph slower. The premier speed-deception pitch.',
    whenUsed: 'Devastating against opposite-handed batters. The go-to after establishing the fastball. Elite swing-and-miss below the zone.',
    zoneHeat: [0.03, 0.05, 0.08, 0.05, 0.10, 0.25, 0.08, 0.20, 0.45],
    mlbUsagePct: 10,
    usageContext: 'Roughly 1 in 10 pitches',
    color: '#4ade80',
    trajectory: { type: 'change' }
  },
  'splitter': {
    name: 'Splitter',
    abbr: 'FS',
    family: 'offspeed',
    velocity: '84-93 mph',
    velMid: 88,
    vBreak: '-2 to -8"',
    hBreak: '2-6"',
    hBreakMid: 4,
    description: 'Looks like a fastball at belt height then suddenly drops straight down -- "falls off a table."',
    whenUsed: 'Ultimate put-away pitch on two-strike counts. Thrown below the zone to bait swings. Extremely high chase rates.',
    zoneHeat: [0.02, 0.03, 0.02, 0.10, 0.15, 0.10, 0.30, 0.45, 0.30],
    mlbUsagePct: 3,
    usageContext: 'Uncommon \u2014 roughly 1 in 33',
    color: '#4ade80',
    trajectory: { type: 'split' }
  },
  'knuckleball': {
    name: 'Knuckleball',
    abbr: 'KN',
    family: 'offspeed',
    velocity: '65-85 mph',
    velMid: 75,
    vBreak: '???',
    hBreak: '???',
    hBreakMid: 0,
    description: 'Almost zero spin means unpredictable flutter. Neither batter, catcher, nor pitcher knows where it ends up.',
    whenUsed: 'Knuckleballers throw it on almost every pitch. A handful of specialists have built entire careers on it.',
    zoneHeat: [0.11, 0.11, 0.11, 0.11, 0.11, 0.11, 0.11, 0.11, 0.11],
    mlbUsagePct: 0.1,
    usageContext: 'Nearly extinct in modern MLB',
    color: '#4ade80',
    trajectory: { type: 'knuckle' }
  }
};

// ============================================================
// 2. GLOSSARY TERMS FOR INLINE TOOLTIPS
// ============================================================
var GLOSSARY_TERMS = {
  'strikeout': 'Three strikes and the batter is out. Can be swinging (batter swings and misses) or looking (called strike three).',
  'walk': 'When a pitcher throws 4 balls in an at-bat, the batter is awarded first base.',
  'count': 'The running tally of balls and strikes, written as balls-strikes (e.g., "2-1" = 2 balls, 1 strike).',
  'strike zone': 'An imaginary box over home plate, 17 inches wide, from the batter\'s knees to the letters on the jersey.',
  'magnus effect': 'The force created by spin that causes a ball to curve. Backspin creates lift; topspin creates drop.',
  'chase rate': 'The percentage of pitches outside the strike zone that batters swing at.',
  'whiff rate': 'The percentage of swings that result in a miss.',
  'tunneling': 'Throwing different pitches on the same trajectory through the decision point before they diverge.',
  'era': 'Earned Run Average -- average earned runs allowed per 9 innings. Lower is better.',
  'cy young': 'Annual award for the best pitcher in each league.',
  'bullpen': 'The group of relief pitchers on a team, or the area where they warm up.',
  'save': 'Stat credited to a reliever who finishes a game the team wins while protecting a close lead.'
};

// ============================================================
// UTILITY: debounce helper
// ============================================================
function debounce(fn, delay) {
  var timer = null;
  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}


// ============================================================
// MAIN INIT
// ============================================================
document.addEventListener('DOMContentLoaded', function () {

  // Cache commonly used elements
  var nav = document.getElementById('main-nav');
  var navLinksContainer = document.getElementById('nav-links');
  var hamburger = document.getElementById('hamburger-btn');
  var pitchGrid = document.getElementById('pitch-grid');
  var pitchFamilyTabs = document.getElementById('pitch-family-tabs');
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ============================================================
  // 3. SMOOTH SCROLL NAVIGATION + ACTIVE SECTION HIGHLIGHTING
  // ============================================================

  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href === '#') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        if (navLinksContainer && hamburger && navLinksContainer.classList.contains('open')) closeNav();
        return;
      }
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        var headerOffset = 72;
        var elementPosition = target.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        if (navLinksContainer && hamburger && navLinksContainer.classList.contains('open')) closeNav();
      }
    });
  });

  // Mobile nav toggle
  function closeNav() {
    navLinksContainer.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.removeEventListener('keydown', navKeyHandler);
  }

  function openNav() {
    navLinksContainer.classList.add('open');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.addEventListener('keydown', navKeyHandler);
    var firstLink = navLinksContainer.querySelector('a');
    if (firstLink) firstLink.focus();
  }

  function navKeyHandler(e) {
    if (e.key === 'Escape') {
      closeNav();
      hamburger.focus();
      return;
    }
    if (e.key === 'Tab') {
      var focusable = navLinksContainer.querySelectorAll('a, button');
      if (focusable.length === 0) return;
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
  }

  if (hamburger && navLinksContainer) {
    hamburger.addEventListener('click', function () {
      var isOpen = navLinksContainer.classList.contains('open');
      if (isOpen) {
        closeNav();
      } else {
        openNav();
      }
    });
  }

  // Sticky nav background + active section highlighting
  var sections = [];
  var navAnchors = [];
  if (navLinksContainer) {
    navLinksContainer.querySelectorAll('a[href^="#"]').forEach(function (a) {
      var id = a.getAttribute('href').substring(1);
      var section = document.getElementById(id);
      if (section) {
        sections.push(section);
        navAnchors.push(a);
      }
    });
  }

  var scrollTicking = false;
  function onScroll() {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(function () {
      // Sticky nav
      if (nav) {
        if (window.scrollY > 40) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
      }

      // Active section
      var scrollPos = window.scrollY + 120;
      var activeIdx = -1;
      for (var i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= scrollPos) {
          activeIdx = i;
          break;
        }
      }
      navAnchors.forEach(function (a, idx) {
        if (idx === activeIdx) {
          a.classList.add('active');
        } else {
          a.classList.remove('active');
        }
      });

      scrollTicking = false;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load

  // ============================================================
  // 4. PITCH CARD EXPAND/COLLAPSE
  // ============================================================
  document.querySelectorAll('.pitch-card').forEach(function (card) {
    var toggle = card.querySelector('.card-toggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        var isExpanded = card.classList.contains('expanded');
        card.classList.toggle('expanded');
        var label = toggle.querySelector('span:first-child');
        if (label) {
          label.textContent = isExpanded ? 'Show Details' : 'Hide Details';
        }
        // Update ARIA
        toggle.setAttribute('aria-expanded', String(!isExpanded));
      });
      // Set initial ARIA state
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  // ============================================================
  // 5. PITCH FAMILY FILTER + SORT
  // ============================================================

  var currentFamily = 'all';
  var currentSort = 'default';

  // Save original card order so "Default Order" actually restores it
  var originalCardOrder = [];
  if (pitchGrid) {
    var initialCards = pitchGrid.querySelectorAll('.pitch-card');
    for (var oi = 0; oi < initialCards.length; oi++) {
      originalCardOrder.push(initialCards[oi]);
    }
  }

  // Insert sort controls after the family tabs
  if (pitchFamilyTabs && pitchGrid) {
    var sortDiv = document.createElement('div');
    sortDiv.className = 'sort-controls';
    sortDiv.id = 'sort-controls';
    sortDiv.innerHTML =
      '<button class="sort-btn active" data-sort="default">Default Order</button>' +
      '<button class="sort-btn" data-sort="velocity">Sort by Velocity</button>' +
      '<button class="sort-btn" data-sort="break">Sort by H-Break</button>';
    pitchFamilyTabs.parentNode.insertBefore(sortDiv, pitchGrid);
  }

  function filterAndSortCards() {
    if (!pitchGrid) return;
    var cards;

    if (currentSort === 'default') {
      // Restore original DOM order
      cards = originalCardOrder.slice();
      cards.forEach(function (card) {
        pitchGrid.appendChild(card);
      });
    } else {
      cards = Array.prototype.slice.call(pitchGrid.querySelectorAll('.pitch-card'));
      cards.sort(function (a, b) {
        var pitchA = PITCHES[a.getAttribute('data-pitch')];
        var pitchB = PITCHES[b.getAttribute('data-pitch')];
        if (!pitchA || !pitchB) return 0;
        if (currentSort === 'velocity') {
          return pitchB.velMid - pitchA.velMid;
        } else if (currentSort === 'break') {
          return pitchB.hBreakMid - pitchA.hBreakMid;
        }
        return 0;
      });
      cards.forEach(function (card) {
        pitchGrid.appendChild(card);
      });
    }

    // Filter visibility
    cards.forEach(function (card) {
      var family = card.getAttribute('data-family');
      if (currentFamily === 'all' || family === currentFamily) {
        card.classList.remove('filter-hidden');
      } else {
        card.classList.add('filter-hidden');
      }
    });
  }

  // Family tab clicks
  if (pitchFamilyTabs) {
    pitchFamilyTabs.addEventListener('click', function (e) {
      var tab = e.target.closest('.pitch-family-tab');
      if (!tab) return;
      currentFamily = tab.getAttribute('data-family');
      pitchFamilyTabs.querySelectorAll('.pitch-family-tab').forEach(function (t) {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      filterAndSortCards();
    });
  }

  // Sort button clicks
  var sortControls = document.getElementById('sort-controls');
  if (sortControls) {
    sortControls.addEventListener('click', function (e) {
      var btn = e.target.closest('.sort-btn');
      if (!btn) return;
      currentSort = btn.getAttribute('data-sort');
      sortControls.querySelectorAll('.sort-btn').forEach(function (b) {
        b.classList.remove('active');
      });
      btn.classList.add('active');
      filterAndSortCards();
    });
  }

  // ============================================================
  // 6. PITCH COMPARISON TOOL
  // ============================================================

  var selectA = document.getElementById('compare-select-a');
  var selectB = document.getElementById('compare-select-b');
  var panelA = document.getElementById('compare-panel-a');
  var panelB = document.getElementById('compare-panel-b');

  // Build a small overhead trajectory SVG for the comparison panel
  function buildComparisonSVG(pitch) {
    var color = pitch.color;
    var t = pitch.trajectory;
    var endX, cp1X;

    // Knuckleball gets a unique wobbly path
    if (t.type === 'knuckle') {
      return '<svg viewBox="0 0 170 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Knuckleball trajectory: erratic path">' +
        '<rect x="5" y="5" width="160" height="130" rx="6" fill="#0a1628" stroke="#243352" stroke-width="1"/>' +
        '<line x1="85" y1="12" x2="85" y2="128" stroke="#243352" stroke-width="0.5" stroke-dasharray="3,3"/>' +
        '<circle cx="85" cy="18" r="3" fill="#94a3b8" opacity="0.4"/>' +
        '<rect x="72" y="112" width="26" height="3" rx="1" fill="#94a3b8" opacity="0.4"/>' +
        '<path d="M85,22 Q92,38 80,52 Q73,65 88,78 Q98,88 82,100 Q78,108 80,115" fill="none" stroke="' + color + '" stroke-width="2" stroke-linecap="round"/>' +
        '<polygon points="80,115 83,108 77,110" fill="' + color + '"/>' +
        '<text x="105" y="70" fill="' + color + '" font-family="Inter,sans-serif" font-size="8" font-weight="600">???</text>' +
        '</svg>';
    }

    // Map trajectory type to path control points
    switch (t.type) {
      case 'straight':   endX = 92;  cp1X = 88;  break;
      case 'armside':    endX = 108; cp1X = 98;  break;
      case 'gloveside':  endX = 78;  cp1X = 82;  break;
      case 'sink':       endX = 106; cp1X = 96;  break;
      case 'curve':      endX = 82;  cp1X = 80;  break;
      case 'slider':     endX = 74;  cp1X = 86;  break;
      case 'sweep':      endX = 58;  cp1X = 72;  break;
      case 'change':     endX = 104; cp1X = 96;  break;
      case 'split':      endX = 88;  cp1X = 87;  break;
      default:           endX = 88;  cp1X = 86;
    }

    var label = pitch.name + ' trajectory';
    return '<svg viewBox="0 0 170 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + label + '">' +
      '<rect x="5" y="5" width="160" height="130" rx="6" fill="#0a1628" stroke="#243352" stroke-width="1"/>' +
      '<line x1="85" y1="12" x2="85" y2="128" stroke="#243352" stroke-width="0.5" stroke-dasharray="3,3"/>' +
      '<circle cx="85" cy="18" r="3" fill="#94a3b8" opacity="0.4"/>' +
      '<rect x="72" y="112" width="26" height="3" rx="1" fill="#94a3b8" opacity="0.4"/>' +
      '<path d="M85,22 Q' + cp1X + ',65 ' + endX + ',115" fill="none" stroke="' + color + '" stroke-width="2" stroke-linecap="round"/>' +
      '<polygon points="' + endX + ',115 ' + (endX + 3) + ',108 ' + (endX - 4) + ',110" fill="' + color + '"/>' +
      '</svg>';
  }

  function populatePanel(panel, pitchKey) {
    if (!pitchKey) {
      panel.innerHTML = '<p class="panel-placeholder">Select a pitch to compare</p>';
      panel.classList.remove('populated');
      return;
    }
    var p = PITCHES[pitchKey];
    if (!p) return;

    panel.classList.add('populated');
    panel.innerHTML =
      '<div class="pitch-name">' + p.name + '</div>' +
      '<span class="pitch-abbr ' + p.family + '">' + p.abbr + '</span>' +
      '<p class="pitch-desc">' + p.description + '</p>' +
      '<div class="compare-stats-row">' +
        '<div class="compare-stat-item"><div class="label">Velocity</div><div class="value">' + p.velocity + '</div></div>' +
        '<div class="compare-stat-item"><div class="label">V-Break</div><div class="value">' + p.vBreak + '</div></div>' +
        '<div class="compare-stat-item"><div class="label">H-Break</div><div class="value">' + p.hBreak + '</div></div>' +
      '</div>' +
      '<div class="panel-trajectory">' + buildComparisonSVG(p) + '</div>' +
      '<div class="when-used"><strong>When It\'s Used</strong> ' + p.whenUsed + '</div>';
  }

  if (selectA && panelA) {
    selectA.addEventListener('change', function () {
      populatePanel(panelA, this.value);
    });
  }
  if (selectB && panelB) {
    selectB.addEventListener('change', function () {
      populatePanel(panelB, this.value);
    });
  }

  // ============================================================
  // 7. SCROLL ANIMATIONS (IntersectionObserver)
  // ============================================================

  // Tag elements that should animate on scroll
  var revealSelectors = [
    '.basics-card',
    '.pitch-card',
    '.legend-card',
    '.pitcher-type-card',
    '.strategy-block',
    '.section-header',
    '.compare-tool',
    '.cheat-sheet',
    '.strike-zone-container',
    '.strategy-example',
    '.count-grid'
  ];

  if (prefersReducedMotion) {
    revealSelectors.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el) {
        el.classList.add('reveal', 'visible');
      });
    });
  } else {
    revealSelectors.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el) {
        el.classList.add('reveal');
      });
    });

    if ('IntersectionObserver' in window) {
      var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var parent = entry.target.parentElement;
            if (parent) {
              var siblings = parent.querySelectorAll('.reveal:not(.visible)');
              var delay = 0;
              siblings.forEach(function (sib) {
                if (sib === entry.target) {
                  sib.style.transitionDelay = delay * 0.06 + 's';
                  sib.classList.add('visible');
                  delay++;
                  revealObserver.unobserve(sib);
                }
              });
            }
            if (!entry.target.classList.contains('visible')) {
              entry.target.classList.add('visible');
            }
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

      document.querySelectorAll('.reveal').forEach(function (el) {
        revealObserver.observe(el);
      });
    } else {
      document.querySelectorAll('.reveal').forEach(function (el) {
        el.classList.add('visible');
      });
    }
  }

  // ============================================================
  // 8. GLOSSARY SEARCH (debounced)
  // ============================================================

  var glossarySearch = document.getElementById('glossary-search');
  if (glossarySearch) {
    var glossaryItems = document.querySelectorAll('.glossary-item');

    glossarySearch.addEventListener('input', debounce(function () {
      var query = this.value.toLowerCase().trim();
      glossaryItems.forEach(function (item) {
        var term = (item.getAttribute('data-term') || '').toLowerCase();
        var dt = item.querySelector('dt');
        var dd = item.querySelector('dd');
        var dtText = dt ? dt.textContent.toLowerCase() : '';
        var ddText = dd ? dd.textContent.toLowerCase() : '';
        if (!query || term.indexOf(query) !== -1 || dtText.indexOf(query) !== -1 || ddText.indexOf(query) !== -1) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    }, 150));
  }

  // ============================================================
  // 9. GLOSSARY INLINE TOOLTIPS
  // ============================================================
  // Find bold/em terms in page content that match glossary terms
  // and wrap them with hoverable tooltip triggers.

  function setupGlossaryTooltips() {
    var contentAreas = document.querySelectorAll(
      '.basics-card p, .card-summary, .card-details-inner p, .strategy-block p, .pitcher-type-card p'
    );

    var termKeys = Object.keys(GLOSSARY_TERMS);

    contentAreas.forEach(function (el) {
      var strongs = el.querySelectorAll('strong, em');
      strongs.forEach(function (tag) {
        var text = tag.textContent.toLowerCase().trim();
        for (var i = 0; i < termKeys.length; i++) {
          if (text === termKeys[i] || text.indexOf(termKeys[i]) !== -1) {
            // Skip if already wrapped
            if (tag.parentElement && tag.parentElement.classList.contains('glossary-tooltip-trigger')) return;

            var wrapper = document.createElement('span');
            wrapper.className = 'glossary-tooltip-trigger';
            wrapper.setAttribute('tabindex', '0');
            wrapper.setAttribute('role', 'button');
            wrapper.setAttribute('aria-label', 'Definition of ' + tag.textContent);

            var tooltip = document.createElement('span');
            tooltip.className = 'glossary-tooltip';
            tooltip.setAttribute('role', 'tooltip');
            tooltip.textContent = GLOSSARY_TERMS[termKeys[i]];

            tag.parentNode.insertBefore(wrapper, tag);
            wrapper.appendChild(tag);
            wrapper.appendChild(tooltip);
            break;
          }
        }
      });
    });
  }

  setupGlossaryTooltips();

  function dismissAllTooltips() {
    document.querySelectorAll('.glossary-tooltip-trigger.tooltip-active').forEach(function (el) {
      el.classList.remove('tooltip-active');
      var tip = el.querySelector('.glossary-tooltip');
      if (tip) {
        tip.style.left = '';
        tip.style.right = '';
        tip.style.top = '';
        tip.style.bottom = '';
        tip.style.transform = '';
      }
    });
  }

  document.addEventListener('click', function (e) {
    var trigger = e.target.closest('.glossary-tooltip-trigger');
    if (trigger) {
      e.preventDefault();
      var wasActive = trigger.classList.contains('tooltip-active');
      dismissAllTooltips();
      if (!wasActive) {
        trigger.classList.add('tooltip-active');
        var tooltip = trigger.querySelector('.glossary-tooltip');
        if (tooltip) {
          requestAnimationFrame(function () {
            var tipRect = tooltip.getBoundingClientRect();
            if (tipRect.left < 8) {
              var shiftRight = 8 - tipRect.left;
              tooltip.style.left = '50%';
              tooltip.style.transform = 'translateX(calc(-50% + ' + shiftRight + 'px))';
            } else if (tipRect.right > window.innerWidth - 8) {
              var shiftLeft = tipRect.right - (window.innerWidth - 8);
              tooltip.style.left = '50%';
              tooltip.style.transform = 'translateX(calc(-50% - ' + shiftLeft + 'px))';
            }
            if (tipRect.top < 0) {
              tooltip.style.bottom = 'auto';
              tooltip.style.top = 'calc(100% + 8px)';
            }
          });
        }
      }
    } else if (!e.target.closest('.glossary-tooltip')) {
      dismissAllTooltips();
    }
  });

  // ============================================================
  // 10. INTERACTIVE STRIKE ZONE
  // ============================================================

  var szContainer = document.querySelector('.strike-zone-container');
  if (szContainer) {

    // -- Section intro: title and explanatory text --
    var szIntro = document.createElement('div');
    szIntro.className = 'sz-section-intro';
    szIntro.innerHTML =
      '<h3>Where Pitches Cross the Plate</h3>' +
      '<p>The strike zone is an imaginary rectangle over home plate, roughly from the batter\u2019s ' +
      'knees to mid-chest. Different pitches tend to target different areas. ' +
      'Select a pitch below to see where it\u2019s most commonly thrown.</p>' +
      '<p class="sz-handedness-note">These diagrams show a <strong>right-handed pitcher</strong> facing a <strong>right-handed batter</strong>. ' +
      'For a lefty pitcher, mirror "inside" and "outside" \u2014 the break directions flip horizontally.</p>';
    szContainer.parentNode.insertBefore(szIntro, szContainer);

    var szWrapper = document.createElement('div');
    szWrapper.className = 'sz-interactive-wrapper';
    szWrapper.setAttribute('aria-label', 'Interactive strike zone heat map');

    var zoneLabels = ['Up-In', 'Up-Mid', 'Up-Out', 'Mid-In', 'Heart', 'Mid-Out', 'Low-In', 'Low-Mid', 'Low-Out'];

    // -- Grid container with edge labels and silhouette --
    var gridContainer = document.createElement('div');
    gridContainer.className = 'sz-grid-container';

    var gridArea = document.createElement('div');
    gridArea.className = 'sz-grid-area';

    // Edge labels
    var edgeLabels = [
      { text: 'High', cls: 'sz-edge-label sz-edge-label--top' },
      { text: 'Low', cls: 'sz-edge-label sz-edge-label--bottom' },
      { text: 'Inside', cls: 'sz-edge-label sz-edge-label--left' },
      { text: 'Outside', cls: 'sz-edge-label sz-edge-label--right' }
    ];
    edgeLabels.forEach(function (lbl) {
      var el = document.createElement('span');
      el.className = lbl.cls;
      el.textContent = lbl.text;
      gridArea.appendChild(el);
    });

    // Batter silhouette (simple SVG stick figure)
    var batterDiv = document.createElement('div');
    batterDiv.className = 'sz-batter-silhouette';
    batterDiv.setAttribute('aria-hidden', 'true');
    batterDiv.innerHTML =
      '<svg width="40" height="120" viewBox="0 0 40 120" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<circle cx="20" cy="12" r="8" stroke="#94a3bb" stroke-width="1.5" fill="none"/>' +
        '<line x1="20" y1="20" x2="20" y2="60" stroke="#94a3bb" stroke-width="1.5" stroke-linecap="round"/>' +
        '<line x1="20" y1="60" x2="12" y2="95" stroke="#94a3bb" stroke-width="1.5" stroke-linecap="round"/>' +
        '<line x1="20" y1="60" x2="28" y2="95" stroke="#94a3bb" stroke-width="1.5" stroke-linecap="round"/>' +
        '<line x1="20" y1="32" x2="6" y2="22" stroke="#94a3bb" stroke-width="1.5" stroke-linecap="round"/>' +
        '<line x1="6" y1="22" x2="2" y2="8" stroke="#94a3bb" stroke-width="1.5" stroke-linecap="round"/>' +
        '<line x1="20" y1="35" x2="34" y2="42" stroke="#94a3bb" stroke-width="1.5" stroke-linecap="round"/>' +
      '</svg>';
    gridArea.appendChild(batterDiv);

    // Build the zone label (status text)
    var gridLabel = document.createElement('div');
    gridLabel.className = 'sz-zone-label';
    gridLabel.id = 'sz-label';
    gridLabel.textContent = 'Click a pitch type to see its heat map';
    gridLabel.setAttribute('aria-live', 'polite');

    // Build the 3x3 grid
    var grid = document.createElement('div');
    grid.className = 'sz-grid';
    grid.id = 'sz-grid';
    grid.setAttribute('role', 'grid');
    grid.setAttribute('aria-describedby', 'sz-label');

    for (var zi = 0; zi < 9; zi++) {
      var cell = document.createElement('div');
      cell.className = 'sz-cell';
      cell.setAttribute('data-zone', zi);
      cell.setAttribute('title', zoneLabels[zi]);
      cell.setAttribute('role', 'gridcell');
      cell.setAttribute('aria-label', zoneLabels[zi] + ' zone');

      var overlay = document.createElement('div');
      overlay.className = 'heat-overlay';
      cell.appendChild(overlay);

      // Percentage label (hidden until active)
      var pctLabel = document.createElement('div');
      pctLabel.className = 'heat-pct';
      cell.appendChild(pctLabel);

      // Zone name watermark
      var zoneName = document.createElement('span');
      zoneName.className = 'zone-name';
      // Center cell gets a special marker
      zoneName.textContent = zi === 4 ? '\u2022' : zoneLabels[zi];
      cell.appendChild(zoneName);

      grid.appendChild(cell);
    }

    // Home plate indicator
    var homePlate = document.createElement('div');
    homePlate.className = 'sz-home-plate';
    homePlate.setAttribute('aria-hidden', 'true');

    gridArea.appendChild(grid);
    gridArea.appendChild(homePlate);
    gridContainer.appendChild(gridArea);
    gridContainer.appendChild(gridLabel);

    // -- Pitch selector: grouped by family with chip-style buttons --
    var selectorDiv = document.createElement('div');
    selectorDiv.className = 'sz-pitch-selector';

    var pitchGroups = [
      {
        label: 'Fastballs',
        labelClass: 'sz-pitch-group-label sz-pitch-group-label--fastball',
        keys: ['four-seam', 'two-seam', 'cutter', 'sinker']
      },
      {
        label: 'Breaking Balls',
        labelClass: 'sz-pitch-group-label sz-pitch-group-label--breaking',
        keys: ['curveball', 'slider', 'sweeper']
      },
      {
        label: 'Offspeed',
        labelClass: 'sz-pitch-group-label sz-pitch-group-label--offspeed',
        keys: ['changeup', 'splitter', 'knuckleball']
      }
    ];

    pitchGroups.forEach(function (group) {
      var groupLabel = document.createElement('div');
      groupLabel.className = group.labelClass;
      groupLabel.textContent = group.label;
      selectorDiv.appendChild(groupLabel);

      var groupDiv = document.createElement('div');
      groupDiv.className = 'sz-pitch-group';

      group.keys.forEach(function (key) {
        var p = PITCHES[key];
        var btn = document.createElement('button');
        btn.className = 'sz-pitch-btn';
        btn.setAttribute('data-pitch', key);
        btn.setAttribute('data-family', p.family);
        btn.setAttribute('aria-pressed', 'false');
        btn.innerHTML =
          '<span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:' +
          p.color + ';margin-right:5px;vertical-align:middle;" aria-hidden="true"></span>' +
          p.name;
        groupDiv.appendChild(btn);
      });

      selectorDiv.appendChild(groupDiv);
    });

    // Usage display (replaces heat legend bar)
    var usageDisplay = document.createElement('div');
    usageDisplay.className = 'sz-usage-display';
    usageDisplay.setAttribute('aria-live', 'polite');

    var usageHeader = document.createElement('div');
    usageHeader.className = 'sz-usage-header';

    var usageRank = document.createElement('span');
    usageRank.className = 'sz-usage-rank';

    var usageInMlb = document.createElement('span');
    usageInMlb.className = 'sz-usage-in-mlb';
    usageInMlb.textContent = 'in MLB';

    usageHeader.appendChild(usageRank);
    usageHeader.appendChild(usageInMlb);

    var usageNumber = document.createElement('div');
    usageNumber.className = 'sz-usage-number';

    var usageValue = document.createElement('span');
    usageValue.className = 'sz-usage-value';

    var usageSuffix = document.createElement('span');
    usageSuffix.className = 'sz-usage-suffix';
    usageSuffix.textContent = 'of all pitches';

    usageNumber.appendChild(usageValue);
    usageNumber.appendChild(usageSuffix);

    var usageContext = document.createElement('div');
    usageContext.className = 'sz-usage-context';

    usageDisplay.appendChild(usageHeader);
    usageDisplay.appendChild(usageNumber);
    usageDisplay.appendChild(usageContext);

    // Hidden by default, shown when a pitch is selected
    usageDisplay.style.display = 'none';
    selectorDiv.appendChild(usageDisplay);

    szWrapper.appendChild(gridContainer);
    szWrapper.appendChild(selectorDiv);
    szContainer.parentNode.insertBefore(szWrapper, szContainer.nextSibling);

    // -- Strike zone interactivity --
    // Compute pitch ranks by usage (descending)
    var pitchRanks = {};
    var sortedByUsage = Object.keys(PITCHES).slice().sort(function (a, b) {
      return PITCHES[b].mlbUsagePct - PITCHES[a].mlbUsagePct;
    });
    sortedByUsage.forEach(function (key, idx) { pitchRanks[key] = idx + 1; });

    var currentDisplayPct = 0;
    var counterAnimId = null;

    function animateCounter(from, to, duration) {
      if (counterAnimId) cancelAnimationFrame(counterAnimId);
      if (prefersReducedMotion) {
        usageValue.textContent = (to < 1 ? to.toFixed(1) : Math.round(to)) + '%';
        currentDisplayPct = to;
        return;
      }
      var start = null;
      function step(ts) {
        if (!start) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        var current = from + (to - from) * eased;
        if (to < 1) {
          usageValue.textContent = current.toFixed(1) + '%';
        } else {
          usageValue.textContent = Math.round(current) + '%';
        }
        if (progress < 1) {
          counterAnimId = requestAnimationFrame(step);
        } else {
          counterAnimId = null;
          currentDisplayPct = to;
        }
      }
      counterAnimId = requestAnimationFrame(step);
    }

    function getRankLabel(rank) {
      if (rank === 1) return '#1 Most Common';
      if (rank === 2) return '#2 Most Common';
      if (rank === 3) return '#3 Most Common';
      if (rank <= 7) return '#' + rank;
      return '#' + rank + ' Least Common';
    }

    function updateUsageDisplay(pitchKey) {
      if (pitchKey) {
        var p = PITCHES[pitchKey];
        var rank = pitchRanks[pitchKey];
        usageDisplay.style.display = '';
        usageDisplay.style.borderLeftColor = p.color;
        usageRank.textContent = getRankLabel(rank);
        usageRank.style.background = p.color.replace(')', ',0.15)').replace('rgb', 'rgba').replace('#', '');
        // Set rank pill colors using hex
        var r = parseInt(p.color.slice(1, 3), 16);
        var g = parseInt(p.color.slice(3, 5), 16);
        var b = parseInt(p.color.slice(5, 7), 16);
        usageRank.style.background = 'rgba(' + r + ',' + g + ',' + b + ',0.15)';
        usageRank.style.color = p.color;
        usageValue.style.color = p.color;
        usageContext.textContent = p.usageContext;
        animateCounter(currentDisplayPct, p.mlbUsagePct, 400);
      } else {
        usageDisplay.style.display = 'none';
        if (counterAnimId) { cancelAnimationFrame(counterAnimId); counterAnimId = null; }
        currentDisplayPct = 0;
        usageValue.textContent = '';
      }
    }

    var activeSZPitch = null;

    function showHeatMap(pitchKey) {
      var p = PITCHES[pitchKey];
      if (!p) return;
      var cells = grid.querySelectorAll('.sz-cell');
      cells.forEach(function (cell, idx) {
        var ol = cell.querySelector('.heat-overlay');
        var pct = cell.querySelector('.heat-pct');
        var intensity = p.zoneHeat[idx] || 0;
        ol.classList.add('active');
        ol.style.background = p.color;
        ol.style.opacity = intensity;

        // Show percentage label
        var pctValue = Math.round(intensity * 100);
        pct.textContent = pctValue + '%';
        if (pctValue > 0) {
          pct.classList.add('visible');
        } else {
          pct.classList.remove('visible');
        }
      });
    }

    function clearHeatMap() {
      grid.querySelectorAll('.heat-overlay').forEach(function (ol) {
        ol.classList.remove('active');
        ol.style.opacity = '0';
      });
      grid.querySelectorAll('.heat-pct').forEach(function (pct) {
        pct.classList.remove('visible');
      });
    }

    // Click to lock/unlock a pitch
    selectorDiv.addEventListener('click', function (e) {
      var btn = e.target.closest('.sz-pitch-btn');
      if (!btn) return;
      var pitchKey = btn.getAttribute('data-pitch');

      // Toggle off
      if (activeSZPitch === pitchKey) {
        activeSZPitch = null;
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
        clearHeatMap();
        updateUsageDisplay(null);
        gridLabel.textContent = 'Click a pitch type to see its heat map';
        return;
      }

      // Toggle on
      activeSZPitch = pitchKey;
      selectorDiv.querySelectorAll('.sz-pitch-btn').forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      showHeatMap(pitchKey);
      updateUsageDisplay(pitchKey);
      gridLabel.textContent = PITCHES[pitchKey].name + ' \u2014 heat map';
    });

    // Hover preview (only when no pitch is locked)
    var szBtns = selectorDiv.querySelectorAll('.sz-pitch-btn');
    szBtns.forEach(function (btn) {
      btn.addEventListener('mouseenter', function () {
        if (activeSZPitch) return;
        var key = btn.getAttribute('data-pitch');
        showHeatMap(key);
        updateUsageDisplay(key);
        gridLabel.textContent = PITCHES[key].name + ' \u2014 heat map';
      });
      btn.addEventListener('mouseleave', function () {
        if (activeSZPitch) return;
        clearHeatMap();
        updateUsageDisplay(null);
        gridLabel.textContent = 'Click a pitch type to see its heat map';
      });
    });
  }

  // ============================================================
  // 11. ANIMATED PITCH TRAJECTORIES
  // ============================================================
  // Single shared IntersectionObserver for all pitch card trajectory
  // animations. getTotalLength() is deferred until the card enters the
  // viewport to avoid forced layouts at page load.

  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    var trajObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        trajObserver.unobserve(entry.target);

        var card = entry.target;
        var diagram = card.querySelector('.card-diagram svg');
        if (!diagram) return;

        var paths = diagram.querySelectorAll('path[stroke-width="2.5"]');
        if (paths.length === 0) return;

        paths.forEach(function (path) {
          var length = path.getTotalLength();
          path.style.strokeDasharray = length;
          path.style.strokeDashoffset = length;
          path.style.transition = 'none';
          path.getBoundingClientRect();
          setTimeout(function () {
            path.style.transition = 'stroke-dashoffset 1.2s ease-out';
            path.style.strokeDashoffset = '0';
          }, 50);
        });

        var trajColor = paths[0].getAttribute('stroke');
        var allPolygons = diagram.querySelectorAll('polygon');
        allPolygons.forEach(function (pg) {
          if (pg.getAttribute('fill') === trajColor) {
            pg.style.opacity = '0';
            pg.style.transition = 'opacity 0.3s ease';
            setTimeout(function () {
              pg.style.opacity = '1';
            }, 1200);
          }
        });
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('.pitch-card').forEach(function (card) {
      var diagram = card.querySelector('.card-diagram svg');
      if (diagram && diagram.querySelectorAll('path[stroke-width="2.5"]').length > 0) {
        trajObserver.observe(card);
      }
    });
  }

  // ============================================================
  // 12. HERO TRAJECTORY ANIMATION
  // ============================================================

  if (!prefersReducedMotion) {
    var heroSvg = document.querySelector('.hero-visual svg');
    if (heroSvg) {
      var heroPaths = heroSvg.querySelectorAll('path');

      heroPaths.forEach(function (path) {
        var length = path.getTotalLength();
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
      });

      var heroEndpoints = heroSvg.querySelectorAll('circle[r="4"]');
      heroEndpoints.forEach(function (c) {
        c.style.opacity = '0';
      });

      setTimeout(function () {
        heroPaths.forEach(function (path, idx) {
          path.style.transition = 'stroke-dashoffset ' + (0.8 + idx * 0.15) + 's ease-out ' + (idx * 0.2) + 's';
          path.style.strokeDashoffset = '0';
        });
        heroEndpoints.forEach(function (c, idx) {
          c.style.transition = 'opacity 0.4s ease ' + (0.8 + idx * 0.2) + 's';
          c.style.opacity = '0.8';
        });
      }, 400);
    }
  }

  // ============================================================
  // 13. MOBILE: TOUCH-FRIENDLY INTERACTIONS
  // ============================================================

  // Close mobile nav when tapping outside
  document.addEventListener('click', function (e) {
    if (!navLinksContainer || !hamburger) return;
    if (navLinksContainer.classList.contains('open')) {
      if (!navLinksContainer.contains(e.target) && !hamburger.contains(e.target)) {
        closeNav();
      }
    }
  });

  // Swipe detection for mobile comparison tool
  if ('ontouchstart' in window && selectA && selectB) {
    var compareToolEl = document.getElementById('compare-tool');
    if (compareToolEl) {
      var touchStartX = 0;
      var touchStartY = 0;

      compareToolEl.addEventListener('touchstart', function (e) {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
      }, { passive: true });

      compareToolEl.addEventListener('touchend', function (e) {
        var diffX = e.changedTouches[0].screenX - touchStartX;
        var diffY = e.changedTouches[0].screenY - touchStartY;

        // Only trigger on predominantly horizontal swipes
        if (Math.abs(diffX) > 80 && Math.abs(diffX) > Math.abs(diffY) * 2) {
          // Swipe left: advance pitch A; swipe right: advance pitch B
          var activeSelect = diffX < 0 ? selectA : selectB;
          var currentIdx = activeSelect.selectedIndex;
          var totalOpts = activeSelect.options.length;
          if (diffX < 0 && currentIdx < totalOpts - 1) {
            activeSelect.selectedIndex = currentIdx + 1;
          } else if (diffX > 0 && currentIdx > 0) {
            activeSelect.selectedIndex = currentIdx - 1;
          }
          activeSelect.dispatchEvent(new Event('change'));
        }
      }, { passive: true });
    }
  }

}); // end DOMContentLoaded
