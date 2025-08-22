// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    const content = document.querySelector('.content-wrapper');
    const navLinks = document.querySelectorAll('.nav-link');
    const navToggle = document.querySelector('.nav-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
  
    // Toggle nav di mobile
    navToggle && navToggle.addEventListener('click', () => {
      navLinksContainer.classList.toggle('open');
      navToggle.classList.toggle('open');
    });
  
    // Klik link -> fade animasi + tutup sidebar
    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href') || '#home';
        const targetId = href.replace('#', '');
  
        // tutup mobile menu
        navLinksContainer.classList.remove('open');
        navToggle.classList.remove('open');
  
        // fade out
        content.classList.add('is-fading');
  
        setTimeout(() => {
          const targetEl = document.getElementById(targetId);
          if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setTimeout(() => content.classList.remove('is-fading'), 600);
        }, 350);
      });
    });
  
    // Klik di luar sidebar -> tutup
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-inner') && !e.target.closest('.nav-links')) {
        navLinksContainer.classList.remove('open');
        navToggle.classList.remove('open');
      }
    });
  });
  