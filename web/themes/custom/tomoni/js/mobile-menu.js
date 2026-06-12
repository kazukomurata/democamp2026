(function (Drupal, once) {
  Drupal.behaviors.tomoniMobileMenu = {
    attach(context) {
      once('tomoni-mobile-menu', '[data-tomoni-menu-toggle]', context).forEach((toggle) => {
        const header = toggle.closest('.l-header');
        const menuId = toggle.getAttribute('aria-controls');
        const menu = menuId ? document.getElementById(menuId) : null;
        const label = toggle.querySelector('[data-tomoni-menu-toggle-label]');
        const overlay = header ? header.querySelector('[data-tomoni-mobile-menu-overlay]') : null;

        if (!header || !menu || !label || !overlay) {
          return;
        }

        const setExpanded = (expanded) => {
          header.classList.toggle('is-mobile-menu-open', expanded);
          document.documentElement.classList.toggle('is-tomoni-mobile-menu-open', expanded);
          toggle.setAttribute('aria-expanded', String(expanded));
          overlay.hidden = !expanded;
          label.textContent = expanded ? Drupal.t('Close') : Drupal.t('Menu');
        };

        toggle.addEventListener('click', () => {
          setExpanded(toggle.getAttribute('aria-expanded') !== 'true');
        });

        overlay.addEventListener('click', () => {
          setExpanded(false);
          toggle.focus();
        });

        document.addEventListener('keydown', (event) => {
          if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
            setExpanded(false);
            toggle.focus();
          }
        });

        window.matchMedia('(min-width: 1024px)').addEventListener('change', (event) => {
          if (event.matches) {
            setExpanded(false);
          }
        });
      });
    },
  };
})(Drupal, once);
