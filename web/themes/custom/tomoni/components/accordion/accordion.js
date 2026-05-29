(function (Drupal, once) {
  function initializeAccordion(accordion) {
    const summary = accordion.querySelector('.tomoni-accordion__summary');
    if (!summary) {
      return;
    }

    summary.setAttribute('aria-expanded', accordion.open ? 'true' : 'false');

    summary.addEventListener('click', function (event) {
      event.preventDefault();

      accordion.open = !accordion.open;
      summary.setAttribute('aria-expanded', accordion.open ? 'true' : 'false');
    });
  }

  function initializeAccordions(context) {
    once('tomoni-accordion', '.tomoni-accordion', context).forEach(initializeAccordion);
  }

  Drupal.behaviors.tomoniAccordion = {
    attach(context) {
      initializeAccordions(context);
    },
  };
})(Drupal, once);
