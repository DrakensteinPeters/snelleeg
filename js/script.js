/* =============================================
   SNELLEEG.NL — JavaScript
   ============================================= */

/**
 * FAQ accordion toggle
 */
function toggleFaq(el) {
  const item = el.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  // Sluit alle open items
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  // Open het geklickte item als het dicht was
  if (!isOpen) item.classList.add('open');
}

/**
 * Scroll-gebaseerde fade-in animaties
 */
const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('[data-aos]').forEach(el => animationObserver.observe(el));

/**
 * Navigatie: voeg klasse toe bij scrollen
 */
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});
