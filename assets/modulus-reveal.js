/* Modulus — Scroll Reveal via IntersectionObserver */
(function () {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('[data-mod-reveal]').forEach(function (el) {
      el.classList.add('mod-revealed');
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var delay = parseInt(el.getAttribute('data-mod-reveal-delay') || '0', 10);
        if (delay > 0) {
          setTimeout(function () {
            el.classList.add('mod-revealed');
          }, delay);
        } else {
          el.classList.add('mod-revealed');
        }
        observer.unobserve(el);
      });
    },
    { threshold: 0.1 }
  );

  function rescan(root) {
    var scope = root || document;
    scope.querySelectorAll('[data-mod-reveal]:not(.mod-revealed)').forEach(function (el) {
      observer.observe(el);
    });
  }

  /* Expose so other modules (e.g. async DOM swaps) can rescan
     newly-inserted nodes after a client-side mutation. */
  window.ModulusReveal = window.ModulusReveal || {};
  window.ModulusReveal.rescan = rescan;

  function init() { rescan(); }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* Re-observe when the Shopify theme editor adds / edits sections. */
  if (typeof Shopify !== 'undefined' && Shopify.designMode) {
    document.addEventListener('shopify:section:load', function () { rescan(); });
  }
})();
