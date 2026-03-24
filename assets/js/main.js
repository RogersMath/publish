// Accessible smooth scroll for anchor links

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function (event) {
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        event.preventDefault();

        // WCAG-friendly scrolling (reduced-motion aware)
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (prefersReducedMotion) {
          targetElement.scrollIntoView();
        } else {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }

        // Move focus for screen readers
        targetElement.setAttribute('tabindex', '-1');
        targetElement.focus({ preventScroll: true });
      }
    });
  });
});
