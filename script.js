/* ══════════════════════════════════════════
   NANDA JUSTINO BEAUTY STUDIO — script.js
   ══════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── 1. HAMBURGER MENU ── */
  const hamburger  = document.getElementById('hamburger');
  const mobileNav  = document.getElementById('mobileNav');
  const mobileLinks = mobileNav ? mobileNav.querySelectorAll('a') : [];

  function toggleMenu(open) {
    hamburger.classList.toggle('open', open);
    mobileNav.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileNav.classList.contains('open');
      toggleMenu(!isOpen);
    });

    // Close on link click
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => toggleMenu(false));
    });

    // Close when clicking outside
    document.addEventListener('click', e => {
      if (
        mobileNav.classList.contains('open') &&
        !mobileNav.contains(e.target) &&
        !hamburger.contains(e.target)
      ) {
        toggleMenu(false);
      }
    });
  }

  /* ── 2. ACTIVE NAV HIGHLIGHT ON SCROLL ── */
  const allNavLinks    = document.querySelectorAll('nav a, .mobile-nav a');
  const scrollSections = [];

  // Collect all elements with IDs referenced in nav
  allNavLinks.forEach(a => {
    const id = a.getAttribute('href').replace('#', '');
    const el = document.getElementById(id);
    if (el && !scrollSections.find(s => s.id === id)) {
      scrollSections.push(el);
    }
  });

  function setActiveLink(id) {
    allNavLinks.forEach(a => {
      const matches = a.getAttribute('href') === '#' + id;
      a.classList.toggle('active', matches);
    });
  }

  function onScroll() {
    const scrollY = window.scrollY + 100;
    let current = scrollSections[0]?.id || '';

    scrollSections.forEach(sec => {
      if (scrollY >= sec.offsetTop) current = sec.id;
    });

    setActiveLink(current);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run on load

  /* ── 3. HEADER SHADOW ON SCROLL ── */
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.style.boxShadow = window.scrollY > 10
        ? '0 2px 24px rgba(0,0,0,0.25)'
        : 'none';
    }, { passive: true });
  }

  /* ── 4. CONTACT FORM → WHATSAPP ── */
  const form       = document.getElementById('contactForm');
  const btnSubmit  = document.getElementById('btnSubmit');
  const WA_NUMBER  = '5562900000000'; // ← Substitua pelo número real

  if (form && btnSubmit) {
    btnSubmit.addEventListener('click', () => {
      const name    = document.getElementById('fName')?.value.trim();
      const phone   = document.getElementById('fPhone')?.value.trim();
      const service = document.getElementById('fService')?.value;
      const message = document.getElementById('fMessage')?.value.trim();

      if (!name) { alert('Por favor, informe seu nome.'); return; }
      if (!phone){ alert('Por favor, informe seu WhatsApp.'); return; }

      const text = [
        `Olá! Gostaria de agendar um horário. 🌸`,
        `*Nome:* ${name}`,
        phone   ? `*WhatsApp:* ${phone}`   : null,
        service ? `*Serviço:* ${service}`  : null,
        message ? `*Mensagem:* ${message}` : null,
      ].filter(Boolean).join('\n');

      const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    });
  }

  /* ── 5. SMOOTH SCROLL for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const headerH = document.querySelector('header')?.offsetHeight || 72;
      const top = target.getBoundingClientRect().top + window.scrollY - headerH;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ── 6. FADE-IN ON SCROLL (Intersection Observer) ── */
  const fadeEls = document.querySelectorAll(
    '.service-card, .pricing-card, .contact-item, .about-stat'
  );

  if ('IntersectionObserver' in window && fadeEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity   = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    fadeEls.forEach((el, i) => {
      el.style.opacity    = '0';
      el.style.transform  = 'translateY(24px)';
      el.style.transition = `opacity 0.6s ease ${(i % 3) * 0.12}s, transform 0.6s ease ${(i % 3) * 0.12}s`;
      observer.observe(el);
    });
  }

})();
