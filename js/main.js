document.documentElement.classList.add('js');

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.getElementById('primary-navigation');

if (menuButton && navigation) {
  const menuLabel = menuButton.querySelector('.menu-toggle__label');
  const navLinks = navigation.querySelectorAll('a');
  const mobileQuery = window.matchMedia('(max-width: 39.999rem)');

  function isMobileViewport() {
    return mobileQuery.matches;
  }

  function setMenuOpen(open) {
    menuButton.setAttribute('aria-expanded', String(open));
    menuLabel.textContent = open ? 'Close' : 'Menu';

    if (isMobileViewport()) {
      if (open) {
        navigation.removeAttribute('hidden');
      } else {
        navigation.setAttribute('hidden', '');
      }
    } else {
      navigation.removeAttribute('hidden');
    }
  }

  function closeMenu(returnFocusToButton) {
    const wasOpen = menuButton.getAttribute('aria-expanded') === 'true';
    setMenuOpen(false);

    if (wasOpen && returnFocusToButton) {
      menuButton.focus();
    }
  }

  function openMenu() {
    setMenuOpen(true);
    navLinks[0]?.focus();
  }

  setMenuOpen(false);

  menuButton.addEventListener('click', () => {
    if (menuButton.getAttribute('aria-expanded') === 'true') {
      closeMenu(true);
    } else {
      openMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (
      event.key === 'Escape' &&
      menuButton.getAttribute('aria-expanded') === 'true' &&
      isMobileViewport()
    ) {
      closeMenu(true);
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (isMobileViewport()) {
        closeMenu(false);
      }
    });
  });

  mobileQuery.addEventListener('change', () => {
    if (!isMobileViewport()) {
      navigation.removeAttribute('hidden');
      menuButton.setAttribute('aria-expanded', 'false');
      menuLabel.textContent = 'Menu';
    } else {
      setMenuOpen(menuButton.getAttribute('aria-expanded') === 'true');
    }
  });
}
