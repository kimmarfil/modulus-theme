/* Modulus Collection Filters
 * - Horizontal filter bar with popover dropdowns
 * - Async submit via Shopify's Section Rendering API (no page reload)
 * - Width-based overflow (3 inline desktop / 2 mobile, rest in "+" sheet)
 * - Client-side product-name search (visible cards only)
 */
(function () {
  'use strict';

  var DBG = false;
  function log () { if (DBG) console.log.apply(console, ['[mod-filter]'].concat([].slice.call(arguments))); }

  var INITED = new WeakSet();

  /* ---------- Popovers ---------- */
  function closePopovers (section) {
    section.querySelectorAll('[data-mod-filter-trigger]').forEach(function (t) {
      t.setAttribute('aria-expanded', 'false');
    });
    section.querySelectorAll('[data-mod-filter-panel]').forEach(function (p) {
      p.classList.remove('is-open');
      p.hidden = false;
    });
  }

  function bindInteractions (section) {
    section.querySelectorAll('[data-mod-filter-dd]').forEach(function (dd) {
      var trigger = dd.querySelector('[data-mod-filter-trigger]');
      var panel = dd.querySelector('[data-mod-filter-panel]');
      if (!trigger || !panel || trigger._modBound) return;
      trigger._modBound = true;
      panel.hidden = false;
      trigger.addEventListener('click', function (e) {
        e.stopPropagation();
        var willOpen = trigger.getAttribute('aria-expanded') !== 'true';
        closePopovers(section);
        if (willOpen) {
          trigger.setAttribute('aria-expanded', 'true');
          panel.classList.add('is-open');
        } else {
          trigger.setAttribute('aria-expanded', 'false');
          panel.classList.remove('is-open');
        }
      });
      panel.addEventListener('click', function (e) { e.stopPropagation(); });
    });

    var moreBtn = section.querySelector('[data-mod-filter-more]');
    var secondary = section.querySelector('[data-mod-filter-secondary]');
    if (moreBtn && secondary && !moreBtn._modBound) {
      moreBtn._modBound = true;
      moreBtn.addEventListener('click', function () {
        var isOpen = moreBtn.getAttribute('aria-expanded') === 'true';
        moreBtn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
        if (isOpen) {
          secondary.classList.remove('is-fully-open');
          secondary.classList.remove('is-open');
        } else {
          secondary.classList.add('is-open');
          var onEnd = function (e) {
            if (e.propertyName !== 'max-height') return;
            secondary.classList.add('is-fully-open');
            secondary.removeEventListener('transitionend', onEnd);
          };
          secondary.addEventListener('transitionend', onEnd);
        }
      });
    }

    bindSearch(section);
    bindFilterSubmit(section);
    computeOverflow(section);
  }

  /* ---------- Client-side product-name search ---------- */
  function bindSearch (section) {
    var input = section.querySelector('[data-mod-filter-search]');
    if (!input || input._modBound) return;
    input._modBound = true;
    input.removeAttribute('name');

    var t = null;
    function run () {
      var q = (input.value || '').trim().toLowerCase();
      section.querySelectorAll('.modulus-collection-grid__products > li').forEach(function (li) {
        if (!q) { li.style.display = ''; return; }
        var title = li.querySelector('.modulus-product__title');
        var vendor = li.querySelector('.modulus-product__vendor');
        var haystack = ((title ? title.textContent : '') + ' ' +
                        (vendor ? vendor.textContent : '')).toLowerCase();
        li.style.display = haystack.indexOf(q) !== -1 ? '' : 'none';
      });
    }
    input.addEventListener('input', function () {
      clearTimeout(t);
      t = setTimeout(run, 120);
    });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); run(); }
    });
  }

  /* ---------- Filter submit (async) ---------- */
  function bindFilterSubmit (section) {
    var form = section.querySelector('[data-mod-filter-form]');
    if (!form || form._modBound) return;
    form._modBound = true;

    function doSubmit (e) {
      log('submit fired', e && e.type);
      var submitBtn = form.querySelector('[type="submit"]');
      if (submitBtn && submitBtn.disabled) {
        if (e) e.preventDefault();
        return;
      }
      if (e) e.preventDefault();
      var fd = new FormData(form);
      var params = new URLSearchParams();
      fd.forEach(function (value, key) {
        if (value !== '' && value != null) params.append(key, value);
      });
      var newUrl = getCollectionUrl(section) + (params.toString() ? '?' + params.toString() : '');
      try { window.history.pushState({ mod_filter: true }, '', newUrl); } catch (err) { log('pushState failed', err); }
      fetchAndSwap(section, params);
    }

    form.addEventListener('submit', doSubmit);
    var submitBtn = form.querySelector('[type="submit"]');
    if (submitBtn) {
      submitBtn.addEventListener('click', function (e) {
        if (submitBtn.disabled) return;
        if (!e.isTrusted) return;
        doSubmit(e);
      });
    }
  }

  /* ---------- Chip / pagination / sort async ---------- */
  function bindNavLinks (section) {
    if (section._modNavBound) return;
    section._modNavBound = true;

    section.addEventListener('click', function (e) {
      var link = e.target.closest('a[href]');
      if (!link) return;
      var inChips = !!link.closest('.modulus-filter-chips');
      var inPagination = !!link.closest('.modulus-collection-grid__pagination');
      if (!inChips && !inPagination) return;
      e.preventDefault();
      var href = link.getAttribute('href');
      try {
        var url = new URL(href, window.location.origin);
        window.history.pushState({ mod_filter: true }, '', url.pathname + url.search);
        fetchAndSwap(section, url.searchParams);
      } catch (err) {
        window.location.href = href;
      }
    });

    var sortSel = section.querySelector('.modulus-collection-grid__sort-select');
    if (sortSel && !sortSel._modBound) {
      sortSel._modBound = true;
      sortSel.onchange = null;
      sortSel.removeAttribute('onchange');
      sortSel.addEventListener('change', function () {
        var val = sortSel.value;
        if (!val) return;
        try {
          var url = new URL(val, window.location.origin);
          window.history.pushState({ mod_filter: true }, '', url.pathname + url.search);
          fetchAndSwap(section, url.searchParams);
        } catch (err) {
          window.location.href = val;
        }
      });
    }
  }

  /* ---------- Section Rendering API fetch + swap ---------- */
  function getSectionId (section) {
    return section.id.replace(/^modulus-collection-grid-/, '');
  }

  function getCollectionUrl (section) {
    var form = section.querySelector('[data-mod-filter-form]');
    if (form && form.action) {
      try { return new URL(form.action, window.location.origin).pathname; } catch (e) {}
    }
    return window.location.pathname;
  }

  function fetchAndSwap (section, params) {
    var sectionId = getSectionId(section);
    var basePath = getCollectionUrl(section);
    var qs = (params instanceof URLSearchParams) ? params.toString() : params;
    var display = basePath + (qs ? '?' + qs : '');
    var fetchUrl = basePath + '?section_id=' + encodeURIComponent(sectionId) + (qs ? '&' + qs : '');

    log('fetch', fetchUrl);
    section.classList.add('is-loading');

    return fetch(fetchUrl, {
      credentials: 'same-origin',
      headers: { 'X-Requested-With': 'XMLHttpRequest' }
    })
      .then(function (r) {
        log('fetch response', r.status);
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.text();
      })
      .then(function (html) {
        var doc = new DOMParser().parseFromString(html, 'text/html');
        var newSection = doc.querySelector('#modulus-collection-grid-' + CSS.escape(sectionId))
                      || doc.querySelector('[data-mod-collection-grid]');
        var newInner = newSection && newSection.querySelector('.modulus-collection-grid__inner');
        var currentInner = section.querySelector('.modulus-collection-grid__inner');
        if (!newInner || !currentInner) throw new Error('SRA response missing inner wrapper');
        currentInner.innerHTML = newInner.innerHTML;

        var rect = section.getBoundingClientRect();
        if (rect.top < 0) {
          window.scrollTo({ top: section.offsetTop - 16, behavior: 'smooth' });
        }
        bindInteractions(section);

        // Product cards carry data-mod-reveal → would render at opacity:0
        // unless revealed. Force-reveal the swapped region immediately.
        section.querySelectorAll('[data-mod-reveal]').forEach(function (el) {
          el.classList.add('mod-revealed');
        });
        if (window.ModulusReveal && typeof window.ModulusReveal.rescan === 'function') {
          window.ModulusReveal.rescan(section);
        }
      })
      .catch(function (err) {
        console.error('[mod-filter] fetch failed, falling back to navigation', err);
        window.location.href = display;
      })
      .finally(function () {
        section.classList.remove('is-loading');
      });
  }

  /* ---------- Overflow: cap at N dropdowns inline ---------- */
  function getMaxPrimary () {
    return window.matchMedia('(max-width: 700px)').matches ? 2 : 3;
  }

  function computeOverflow (section) {
    var MAX_PRIMARY = getMaxPrimary();
    var bar = section.querySelector('[data-mod-filter-bar]');
    if (!bar) return;
    var primary = bar.querySelector('.modulus-filter-bar__dropdowns--primary');
    var secondary = bar.querySelector('[data-mod-filter-secondary]');
    if (!primary) return;

    var all = Array.prototype.slice.call(bar.querySelectorAll('[data-mod-filter-dd]'));
    all.forEach(function (dd, i) {
      if (!dd.hasAttribute('data-mod-original-order')) {
        dd.setAttribute('data-mod-original-order', i);
      }
    });
    all.sort(function (a, b) {
      return parseInt(a.getAttribute('data-mod-original-order'), 10) -
             parseInt(b.getAttribute('data-mod-original-order'), 10);
    });

    all.forEach(function (dd) { primary.appendChild(dd); });
    if (secondary) {
      secondary.innerHTML = '';
      secondary.classList.remove('is-open', 'is-fully-open');
      secondary.hidden = true;
    }

    var overflow = all.slice(MAX_PRIMARY);
    if (overflow.length && secondary) {
      overflow.forEach(function (dd) { secondary.appendChild(dd); });
      secondary.hidden = false;
    }

    var moreBtn = bar.querySelector('[data-mod-filter-more]');
    if (moreBtn) {
      moreBtn.style.display = overflow.length ? '' : 'none';
      moreBtn.setAttribute('aria-expanded', 'false');
    }

    log('overflow: fit', all.length - overflow.length, 'overflow', overflow.length);
  }

  /* ---------- Init ---------- */
  function initSection (section) {
    if (INITED.has(section)) {
      bindInteractions(section);
      bindNavLinks(section);
      return;
    }
    INITED.add(section);
    bindInteractions(section);
    bindNavLinks(section);
  }

  /* ---------- Global listeners ---------- */
  document.addEventListener('click', function (e) {
    document.querySelectorAll('[data-mod-collection-grid]').forEach(function (section) {
      var bar = section.querySelector('[data-mod-filter-bar]');
      if (bar && !bar.contains(e.target)) closePopovers(section);
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    document.querySelectorAll('[data-mod-collection-grid]').forEach(closePopovers);
  });

  window.addEventListener('popstate', function () {
    document.querySelectorAll('[data-mod-collection-grid]').forEach(function (section) {
      var params = new URLSearchParams(window.location.search);
      fetchAndSwap(section, params);
    });
  });

  var resizeTimer = null;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      document.querySelectorAll('[data-mod-collection-grid]').forEach(computeOverflow);
    }, 150);
  });

  function init () {
    document.querySelectorAll('[data-mod-collection-grid]').forEach(initSection);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
