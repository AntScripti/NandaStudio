<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nanda Justino Beauty Studio</title>
  <meta name="description"
    content="Nanda Justino Beauty Studio – maquiagem, sobrancelhas, cabelo, unhas, cílios e skin care em Jaraguá, Goiás.">
  
  <style>
    /* ══════════════════════════════════════════
       NANDA JUSTINO BEAUTY STUDIO — style.css
       ══════════════════════════════════════════ */

    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@200;300;400;500&display=swap');

    /* ── VARIABLES ── */
    :root {
      --burgundy:      #7d1f4a;
      --burgundy-dark: #5c1536;
      --burgundy-light:#9e2860;
      --blush:         #f0c4d4;
      --blush-light:   #fce8f0;
      --cream:         #fdf6f0;
      --text-dark:     #2a0e1c;
      --text-mid:      #5a2a3a;
      --white:         #ffffff;

      --header-h: 72px;
      --px-desktop: 60px;
      --px-tablet:  32px;
      --px-mobile:  20px;
    }

    /* ── RESET ── */
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    img  { display: block; max-width: 100%; }

    body {
      font-family: 'Jost', sans-serif;
      background: var(--cream);
      color: var(--text-dark);
      overflow-x: hidden;
    }

    /* ═══════════════════════════════
       HEADER
    ═══════════════════════════════ */
    header {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 var(--px-desktop);
      height: var(--header-h);
      background: rgba(92, 21, 54, 0.97);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(240,196,212,0.2);
      transition: background 0.3s;
    }

    /* Logo */
    .logo-header {
      display: flex;
      align-items: center;
      gap: 14px;
      text-decoration: none;
      flex-shrink: 0;
    }
    .logo-monogram {
      width: 42px; height: 42px;
      border: 1.5px solid var(--blush);
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
    }
    .logo-monogram svg { width: 26px; height: 26px; }
    .logo-text-header { display: flex; flex-direction: column; line-height: 1.1; }
    .logo-name {
      font-family: 'Cormorant Garamond', serif;
      font-size: 18px; font-weight: 500;
      color: var(--blush); letter-spacing: 0.02em;
    }
    .logo-sub {
      font-size: 9px; font-weight: 300;
      color: rgba(240,196,212,0.7);
      letter-spacing: 0.25em; text-transform: uppercase;
    }

    /* Desktop nav */
    nav {
      display: flex;
      gap: 40px;
      align-items: center;
    }
    nav a {
      font-size: 11px; font-weight: 400;
      letter-spacing: 0.2em; text-transform: uppercase;
      color: rgba(240,196,212,0.85);
      text-decoration: none;
      position: relative; padding-bottom: 4px;
      transition: color 0.3s;
      white-space: nowrap;
    }
    nav a::after {
      content: '';
      position: absolute; bottom: 0; left: 0;
      width: 0; height: 1px;
      background: var(--blush);
      transition: width 0.3s;
    }
    nav a:hover           { color: var(--blush); }
    nav a:hover::after    { width: 100%; }
    nav a.active          { color: var(--blush); }
    nav a.active::after   { width: 100%; }

    /* Hamburger button */
    .hamburger {
      display: none;
      flex-direction: column;
      justify-content: center;
      gap: 5px;
      width: 36px; height: 36px;
      background: none; border: none;
      cursor: pointer;
      padding: 4px;
      z-index: 1100;
    }
    .hamburger span {
      display: block;
      width: 100%; height: 1.5px;
      background: var(--blush);
      border-radius: 2px;
      transition: transform 0.35s, opacity 0.35s;
      transform-origin: center;
    }
    .hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
    .hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
    .hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

    /* Mobile nav drawer */
    .mobile-nav {
      display: none;
      position: fixed;
      top: var(--header-h); left: 0; right: 0;
      background: rgba(92,21,54,0.98);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      flex-direction: column;
      align-items: center;
      gap: 0;
      z-index: 999;
      overflow: hidden;
      max-height: 0;
      transition: max-height 0.45s ease;
    }
    .mobile-nav.open {
      max-height: 320px;
    }
    .mobile-nav a {
      width: 100%;
      text-align: center;
      padding: 18px 0;
      font-size: 12px; letter-spacing: 0.3em; text-transform: uppercase;
      color: rgba(240,196,212,0.85);
      text-decoration: none;
      border-bottom: 1px solid rgba(240,196,212,0.08);
      transition: color 0.3s, background 0.3s;
    }
    .mobile-nav a:last-child { border-bottom: none; }
    .mobile-nav a:hover { color: var(--blush); background: rgba(240,196,212,0.05); }

    /* ═══════════════════════════════
       HERO
    ═══════════════════════════════ */
    #home {
      min-height: 100vh;
      background: var(--burgundy);
      display: flex; align-items: center; justify-content: center;
      flex-direction: column; text-align: center;
      position: relative; overflow: hidden;
      padding-top: var(--header-h);
      padding-left: var(--px-mobile);
      padding-right: var(--px-mobile);
    }
    .hero-bg {
      position: absolute; inset: 0;
      background:
        radial-gradient(ellipse 60% 60% at 50% 40%, rgba(158,40,96,0.4) 0%, transparent 70%),
        radial-gradient(ellipse 40% 40% at 20% 80%, rgba(240,196,212,0.08) 0%, transparent 60%),
        radial-gradient(ellipse 30% 30% at 80% 20%, rgba(240,196,212,0.06) 0%, transparent 60%);
    }
    .hero-decoration {
      position: absolute;
      border: 1px solid rgba(240,196,212,0.10);
      border-radius: 50%;
      pointer-events: none;
    }
    .hero-decoration:nth-child(1) { width: 500px; height: 500px; top: 50%; left: 50%; transform: translate(-50%,-50%); }
    .hero-decoration:nth-child(2) { width: 700px; height: 700px; top: 50%; left: 50%; transform: translate(-50%,-50%); }
    .hero-decoration:nth-child(3) { width: 900px; height: 900px; top: 50%; left: 50%; transform: translate(-50%,-50%); }

    .hero-content {
      position: relative; z-index: 2;
      animation: fadeUp 1.2s ease both;
      padding: 0 var(--px-mobile);
    }
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(30px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .hero-logo-large        { margin-bottom: 28px; }
    .hero-logo-large svg    { width: 110px; height: 110px; }
    .hero-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(40px, 9vw, 90px);
      font-weight: 300; color: var(--blush);
      line-height: 1; letter-spacing: 0.03em; margin-bottom: 10px;
    }
    .hero-subtitle {
      font-size: clamp(9px, 2vw, 11px); font-weight: 300;
      letter-spacing: 0.4em; text-transform: uppercase;
      color: rgba(240,196,212,0.6); margin-bottom: 40px;
    }
    .hero-cta {
      display: inline-block;
      padding: 14px 44px;
      border: 1px solid var(--blush);
      color: var(--blush);
      font-size: 10px; font-weight: 400;
      letter-spacing: 0.3em; text-transform: uppercase;
      text-decoration: none;
      transition: all 0.35s;
      position: relative; overflow: hidden;
    }
    .hero-cta::before {
      content: '';
      position: absolute; inset: 0;
      background: var(--blush);
      transform: scaleX(0); transform-origin: left;
      transition: transform 0.35s; z-index: -1;
    }
    .hero-cta:hover          { color: var(--burgundy); }
    .hero-cta:hover::before  { transform: scaleX(1); }

    .scroll-hint {
      position: absolute; bottom: 36px; left: 50%; transform: translateX(-50%);
      display: flex; flex-direction: column; align-items: center; gap: 8px;
      animation: bounce 2s infinite; opacity: 0.45;
    }
    .scroll-hint span {
      font-size: 8px; letter-spacing: 0.3em;
      text-transform: uppercase; color: var(--blush);
    }
    .scroll-line { width: 1px; height: 36px; background: linear-gradient(to bottom, var(--blush), transparent); }
    @keyframes bounce {
      0%,100% { transform: translateX(-50%) translateY(0); }
      50%      { transform: translateX(-50%) translateY(8px); }
    }

    /* ═══════════════════════════════
       SHARED SECTION STYLES
    ═══════════════════════════════ */
    .section-wrap {
      padding: 90px var(--px-desktop);
    }
    .section-label {
      font-size: 9px; letter-spacing: 0.4em; text-transform: uppercase;
      color: var(--burgundy); margin-bottom: 12px; font-weight: 400;
    }
    .section-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(32px, 5vw, 56px);
      font-weight: 400; color: var(--burgundy-dark);
      line-height: 1.1; margin-bottom: 16px;
    }
    .section-title em { font-style: italic; font-weight: 300; }
    .section-divider {
      width: 60px; height: 1px;
      background: var(--burgundy); margin-bottom: 48px; opacity: 0.4;
    }

    /* ═══════════════════════════════
       STATS STRIP
    ═══════════════════════════════ */
    .about-strip {
      background: var(--burgundy-dark);
      padding: 60px var(--px-desktop);
      display: flex; align-items: center;
      justify-content: center;
      gap: 60px; flex-wrap: wrap;
    }
    .about-stat { text-align: center; }
    .stat-number {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(40px, 6vw, 56px); font-weight: 300;
      color: var(--blush); line-height: 1;
    }
    .stat-label {
      font-size: 9px; letter-spacing: 0.3em; text-transform: uppercase;
      color: rgba(240,196,212,0.55); margin-top: 6px;
    }
    .about-strip-sep {
      width: 1px; height: 60px;
      background: rgba(240,196,212,0.15);
    }

    /* ═══════════════════════════════
       SERVICES
    ═══════════════════════════════ */
    .services-section {
      background: var(--cream);
      padding: 90px var(--px-desktop);
    }
    .services-inner { max-width: 1200px; margin: 0 auto; }
    .services-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2px;
    }
    .services-grid--two {
      grid-template-columns: repeat(2, 1fr);
      max-width: 900px;
      margin: 0 auto;
    }
    .service-card {
      position: relative; overflow: hidden;
      aspect-ratio: 4/5; cursor: pointer;
    }
    .service-card img {
      width: 100%; height: 100%; object-fit: cover;
      transition: transform 0.7s ease;
      filter: brightness(0.6) saturate(0.8);
    }
    .service-card:hover img {
      transform: scale(1.06);
      filter: brightness(0.4) saturate(0.6);
    }
    .service-overlay {
      position: absolute; inset: 0;
      display: flex; flex-direction: column; justify-content: flex-end;
      padding: 28px 24px;
      background: linear-gradient(to top, rgba(92,21,54,0.85) 0%, transparent 60%);
      transition: background 0.4s;
    }
    .service-card:hover .service-overlay {
      background: linear-gradient(to top, rgba(92,21,54,0.95) 0%, rgba(92,21,54,0.3) 60%);
    }
    .service-tag {
      font-size: 8px; letter-spacing: 0.35em; text-transform: uppercase;
      color: var(--blush); margin-bottom: 6px; opacity: 0.8;
    }
    .service-name {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(20px, 2.5vw, 28px); font-weight: 400;
      color: var(--white); margin-bottom: 6px; line-height: 1.15;
    }
    .service-desc {
      font-size: 11px; color: rgba(255,255,255,0.6);
      font-weight: 300; line-height: 1.6;
      max-height: 0; overflow: hidden;
      transition: max-height 0.4s ease;
    }
    .service-card:hover .service-desc { max-height: 90px; }

    /* ═══════════════════════════════
       PRICING
    ═══════════════════════════════ */
    .pricing-section {
      background: var(--burgundy);
      padding: 90px var(--px-desktop);
    }
    .pricing-inner   { max-width: 1200px; margin: 0 auto; }
    .pricing-section .section-label  { color: var(--blush); opacity: 0.7; }
    .pricing-section .section-title  { color: var(--blush); }
    .pricing-section .section-divider{ background: var(--blush); opacity: 0.3; }

    .pricing-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }
    .pricing-card {
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(240,196,212,0.2);
      padding: 32px 28px;
      transition: all 0.3s; position: relative; overflow: hidden;
    }
    .pricing-card::before {
      content: ''; position: absolute; top: 0; left: 0; right: 0;
      height: 2px;
      background: linear-gradient(to right, transparent, var(--blush), transparent);
      opacity: 0; transition: opacity 0.3s;
    }
    .pricing-card:hover { background: rgba(255,255,255,0.09); border-color: rgba(240,196,212,0.4); transform: translateY(-4px); }
    .pricing-card:hover::before { opacity: 1; }
    .pricing-category {
      font-size: 8px; letter-spacing: 0.4em; text-transform: uppercase;
      color: rgba(240,196,212,0.5); margin-bottom: 20px;
    }
    .pricing-item {
      display: flex; justify-content: space-between; align-items: baseline;
      padding: 10px 0;
      border-bottom: 1px solid rgba(240,196,212,0.08);
    }
    .pricing-item:last-child { border-bottom: none; }
    .pricing-item-name  { font-size: 13px; color: var(--blush); font-weight: 300; }
    .pricing-item-price {
      font-family: 'Cormorant Garamond', serif;
      font-size: 20px; color: var(--blush); font-weight: 400;
      white-space: nowrap;
    }
    .pricing-item-price span { font-size: 11px; font-family: 'Jost', sans-serif; font-weight: 300; opacity: 0.7; }

    /* ═══════════════════════════════
       CONTACT
    ═══════════════════════════════ */
    .contact-section { background: var(--cream); padding: 90px var(--px-desktop); }
    .contact-inner {
      max-width: 1100px; margin: 0 auto;
      display: grid; grid-template-columns: 1fr 1fr;
      gap: 80px; align-items: start;
    }
    .contact-info   { display: flex; flex-direction: column; gap: 28px; }
    .contact-item   { display: flex; gap: 18px; align-items: flex-start; }
    .contact-icon {
      width: 40px; height: 40px;
      border: 1px solid var(--burgundy); border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; opacity: 0.6;
    }
    .contact-icon svg { width: 16px; height: 16px; stroke: var(--burgundy); fill: none; stroke-width: 1.5; }
    .contact-detail { display: flex; flex-direction: column; gap: 4px; }
    .contact-label  { font-size: 8px; letter-spacing: 0.35em; text-transform: uppercase; color: var(--burgundy); opacity: 0.7; }
    .contact-value  { font-family: 'Cormorant Garamond', serif; font-size: 20px; color: var(--text-dark); font-weight: 400; }

    .contact-form   { display: flex; flex-direction: column; gap: 20px; }
    .form-group     { display: flex; flex-direction: column; gap: 8px; }
    .form-group label {
      font-size: 9px; letter-spacing: 0.3em; text-transform: uppercase;
      color: var(--text-mid); font-weight: 400;
    }
    .form-group input,
    .form-group textarea,
    .form-group select {
      background: transparent; border: none;
      border-bottom: 1px solid rgba(125,31,74,0.3);
      padding: 10px 0;
      font-family: 'Jost', sans-serif; font-size: 14px; font-weight: 300;
      color: var(--text-dark); outline: none;
      transition: border-color 0.3s; width: 100%;
      -webkit-appearance: none; appearance: none;
    }
    .form-group input:focus,
    .form-group textarea:focus,
    .form-group select:focus { border-bottom-color: var(--burgundy); }
    .form-group textarea      { resize: none; height: 80px; }

    .btn-submit {
      align-self: flex-start;
      padding: 14px 44px;
      background: var(--burgundy); color: var(--blush);
      border: 1px solid var(--burgundy);
      font-family: 'Jost', sans-serif; font-size: 10px; font-weight: 400;
      letter-spacing: 0.3em; text-transform: uppercase;
      cursor: pointer; transition: all 0.3s; margin-top: 8px;
    }
    .btn-submit:hover { background: transparent; color: var(--burgundy); }

    /* ═══════════════════════════════
       FOOTER
    ═══════════════════════════════ */
    footer {
      background: var(--burgundy-dark);
      padding: 60px var(--px-desktop);
      display: flex; flex-direction: column;
      align-items: center; gap: 28px; text-align: center;
    }
    .footer-monogram {
      width: 52px; height: 52px;
      border: 1px solid rgba(240,196,212,0.3); border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
    }
    .footer-monogram svg { width: 30px; height: 30px; }
    .footer-name    { font-family: 'Cormorant Garamond', serif; font-size: 28px; font-weight: 300; color: var(--blush); letter-spacing: 0.1em; }
    .footer-tagline { font-size: 9px; letter-spacing: 0.4em; text-transform: uppercase; color: rgba(240,196,212,0.4); }
    .footer-links   { display: flex; gap: 36px; flex-wrap: wrap; justify-content: center; }
    .footer-links a {
      font-size: 9px; letter-spacing: 0.3em; text-transform: uppercase;
      color: rgba(240,196,212,0.5); text-decoration: none; transition: color 0.3s;
    }
    .footer-links a:hover { color: var(--blush); }
    .footer-sep  { width: 100%; height: 1px; background: rgba(240,196,212,0.1); }
    .footer-copy { font-size: 10px; color: rgba(240,196,212,0.3); letter-spacing: 0.1em; font-weight: 300; }

    /* ═══════════════════════════════
       WHATSAPP FLOAT
    ═══════════════════════════════ */
    .whatsapp-btn {
      position: fixed; bottom: 28px; right: 28px; z-index: 999;
      width: 56px; height: 56px;
      background: #25D366; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      box-shadow: 0 4px 20px rgba(37,211,102,0.35);
      text-decoration: none; transition: all 0.3s;
      animation: pulseWa 3s infinite;
    }
    .whatsapp-btn:hover { transform: scale(1.1); box-shadow: 0 6px 28px rgba(37,211,102,0.5); }
    .whatsapp-btn svg   { width: 28px; height: 28px; }
    @keyframes pulseWa {
      0%,100% { box-shadow: 0 4px 20px rgba(37,211,102,0.35); }
      50%      { box-shadow: 0 4px 28px rgba(37,211,102,0.6), 0 0 0 8px rgba(37,211,102,0.1); }
    }

    /* ═══════════════════════════════════════════════════
       RESPONSIVIDADE — TABLET  (max-width: 1024px)
    ═══════════════════════════════════════════════════ */
    @media (max-width: 1024px) {
      :root { --px-desktop: var(--px-tablet); }

      header { padding: 0 var(--px-tablet); }

      .services-grid  { grid-template-columns: repeat(2, 1fr); }
      .pricing-grid   { grid-template-columns: repeat(2, 1fr); }

      .contact-inner  { gap: 48px; }

      .about-strip    { gap: 40px; padding: 50px var(--px-tablet); }
    }

    /* ═══════════════════════════════════════════════════
       RESPONSIVIDADE — MOBILE  (max-width: 768px)
    ═══════════════════════════════════════════════════ */
    @media (max-width: 768px) {

      /* Header: show hamburger, hide desktop nav */
      header          { padding: 0 var(--px-mobile); }
      nav             { display: none; }
      .hamburger      { display: flex; }
      .mobile-nav     { display: flex; }

      /* Hero */
      #home           { padding-left: var(--px-mobile); padding-right: var(--px-mobile); }
      .hero-logo-large svg  { width: 80px; height: 80px; }
      .hero-subtitle  { letter-spacing: 0.25em; }
      .hero-cta       { padding: 13px 32px; }
      .hero-decoration:nth-child(1) { width: 280px; height: 280px; }
      .hero-decoration:nth-child(2) { width: 420px; height: 420px; }
      .hero-decoration:nth-child(3) { width: 560px; height: 560px; }
      .scroll-hint    { display: none; }

      /* Section padding */
      .section-wrap,
      .services-section,
      .pricing-section,
      .contact-section { padding: 64px var(--px-mobile); }

      /* Stats strip */
      .about-strip    { padding: 48px var(--px-mobile); gap: 36px; }
      .about-strip-sep{ display: none; }

      /* Services: single column */
      .services-grid,
      .services-grid--two { grid-template-columns: 1fr; gap: 2px; max-width: 100%; }
      .service-card        { aspect-ratio: 16/9; }

      /* Pricing: single column */
      .pricing-grid   { grid-template-columns: 1fr; gap: 16px; }

      /* Contact: stack */
      .contact-inner  { grid-template-columns: 1fr; gap: 48px; }
      .contact-value  { font-size: 17px; }
      .btn-submit     { width: 100%; text-align: center; }

      /* Footer */
      footer          { padding: 48px var(--px-mobile); gap: 24px; }
      .footer-name    { font-size: 24px; }
      .footer-links   { gap: 20px; }

      /* WhatsApp */
      .whatsapp-btn   { bottom: 20px; right: 20px; width: 50px; height: 50px; }
      .whatsapp-btn svg { width: 24px; height: 24px; }
    }

    /* ═══════════════════════════════════════════════════
       RESPONSIVIDADE — SMALL MOBILE  (max-width: 480px)
    ═══════════════════════════════════════════════════ */
    @media (max-width: 480px) {
      .logo-text-header   { display: none; }
      .hero-logo-large svg{ width: 66px; height: 66px; }
      .pricing-item-name  { font-size: 12px; }
      .pricing-item-price { font-size: 17px; }
    }
  </style>
</head>

<body>

  <!-- ═══════════════════════════════
     HEADER
═══════════════════════════════ -->
  <header>
    <a href="#home" class="logo-header">
      <div class="logo-monogram">
        <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="1" y="20" font-family="Cormorant Garamond, serif" font-size="20" font-weight="400"
            fill="#f0c4d4">NJ</text>
        </svg>
      </div>
      <div class="logo-text-header">
        <span class="logo-name">Nanda Justino</span>
        <span class="logo-sub">Beauty Studio</span>
      </div>
    </a>

    <!-- Desktop nav -->
    <nav>
      <a href="#home">Home</a>
      <a href="#servicos">Serviços</a>
      <a href="#precos">Preços</a>
      <a href="#contato">Contato</a>
    </nav>

    <!-- Hamburger (mobile) -->
    <button class="hamburger" id="hamburger" aria-label="Menu" aria-expanded="false">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </header>

  <!-- Mobile nav drawer -->
  <nav class="mobile-nav" id="mobileNav" aria-hidden="true">
    <a href="#home">Home</a>
    <a href="#servicos">Serviços</a>
    <a href="#precos">Preços</a>
    <a href="#contato">Contato</a>
  </nav>


  <!-- ═══════════════════════════════
     HERO
═══════════════════════════════ -->
  <section id="home">
    <div class="hero-bg"></div>
    <div class="hero-decoration"></div>
    <div class="hero-decoration"></div>
    <div class="hero-decoration"></div>

    <div class="hero-content">
      <div class="hero-logo-large">
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="4" y="95" font-family="Cormorant Garamond, serif" font-size="88" font-weight="300" fill="none"
            stroke="#f0c4d4" stroke-width="0.7" opacity="0.9">NJ</text>
        </svg>
      </div>
      <h1 class="hero-title">Nanda Justino</h1>
      <p class="hero-subtitle">Beauty Studio &nbsp;·&nbsp; Beleza &amp; Bem-estar</p>
      <a href="#servicos" class="hero-cta">Ver Serviços</a>
    </div>

    <div class="scroll-hint">
      <div class="scroll-line"></div>
      <span>Role</span>
    </div>
  </section>


  <!-- ═══════════════════════════════
     STATS STRIP
═══════════════════════════════ -->
  <div class="about-strip">
    <div class="about-stat">
      <div class="stat-number">10+</div>
      <div class="stat-label">Anos de Experiência</div>
    </div>
    <div class="about-strip-sep"></div>
    <div class="about-stat">
      <div class="stat-number">1K+</div>
      <div class="stat-label">Clientes Satisfeitas</div>
    </div>
    <div class="about-strip-sep"></div>
    <div class="about-stat">
      <div class="stat-number">10+</div>
      <div class="stat-label">Serviços Disponíveis</div>
    </div>
    <div class="about-strip-sep"></div>
    <div class="about-stat">
      <div class="stat-number">100%</div>
      <div class="stat-label">Produtos de Qualidade</div>
    </div>
  </div>


  <!-- ═══════════════════════════════
     SERVICES
═══════════════════════════════ -->
  <div class="services-section">
    <div class="services-inner" id="servicos">
      <p class="section-label">O que oferecemos</p>
      <h2 class="section-title">Nossos <em>Serviços</em></h2>
      <div class="section-divider"></div>

      <div class="services-grid services-grid--two">

        <div class="service-card">
          <img src="https://images.unsplash.com/photo-1560869713-7d0a29430803?w=900&q=80" alt="Cabelo" loading="lazy">
          <div class="service-overlay">
            <span class="service-tag">Hair Styling</span>
            <h3 class="service-name">Cabelo</h3>
            <p class="service-desc">Corte, coloração, hidratação e penteados que transformam e expressam personalidade.
            </p>
          </div>
        </div>

        <div class="service-card">
          <img src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=900&q=80" alt="Unhas e nail art"
            loading="lazy">
          <div class="service-overlay">
            <span class="service-tag">Nail Art</span>
            <h3 class="service-name">Unhas</h3>
            <p class="service-desc">Manicure, pedicure, alongamento e nail art com os melhores produtos do mercado.</p>
          </div>
        </div>

      </div>
    </div>
  </div>


  <!-- ═══════════════════════════════
     PRICING
═══════════════════════════════ -->
  <div class="pricing-section">
    <div class="pricing-inner" id="precos">
      <h2 class="section-title">Tabela de <em>Preços</em></h2>
      <div class="section-divider"></div>
      <div class="pricing-card">
        <div class="pricing-category">✦ Cabelo</div>
        <div class="pricing-item">
          <span class="pricing-item-name">Corte Feminino</span>
          <span class="pricing-item-price"><span>R$&nbsp;</span>80</span>
        </div>
        <div class="pricing-item">
          <span class="pricing-item-name">Coloração</span>
          <span class="pricing-item-price"><span>a partir de&nbsp;</span>150</span>
        </div>
        <div class="pricing-item">
          <span class="pricing-item-name">Hidratação</span>
          <span class="pricing-item-price"><span>R$&nbsp;</span>70</span>
        </div>
        <div class="pricing-item">
          <span class="pricing-item-name">Penteado</span>
          <span class="pricing-item-price"><span>R$&nbsp;</span>100</span>
        </div>
      </div>

      <div class="pricing-card">
        <div class="pricing-category">✦ Unhas</div>
        <div class="pricing-item">
          <span class="pricing-item-name">Manicure</span>
          <span class="pricing-item-price"><span>R$&nbsp;</span>35</span>
        </div>
        <div class="pricing-item">
          <span class="pricing-item-name">Pedicure</span>
          <span class="pricing-item-price"><span>R$&nbsp;</span>40</span>
        </div>
        <div class="pricing-item">
          <span class="pricing-item-name">Alongamento Gel</span>
          <span class="pricing-item-price"><span>R$&nbsp;</span>120</span>
        </div>
        <div class="pricing-item">
          <span class="pricing-item-name">Nail Art</span>
          <span class="pricing-item-price"><span>a partir de&nbsp;</span>15</span>
        </div>
      </div>
    </div>

  </div>


  <!-- ═══════════════════════════════
     CONTACT
═══════════════════════════════ -->
  <div class="contact-section">
    <div class="contact-inner" id="contato">

      <div>
        <p class="section-label">Fale Conosco</p>
        <h2 class="section-title">Agende seu <em>Horário</em></h2>
        <div class="section-divider"></div>

        <div class="contact-info">

          <div class="contact-item">
            <div class="contact-icon">
              <svg viewBox="0 0 24 24">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div class="contact-detail">
              <span class="contact-label">Localização</span>
              <span class="contact-value">Jaraguá, Goiás</span>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">
              <svg viewBox="0 0 24 24">
                <path
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div class="contact-detail">
              <span class="contact-label">WhatsApp</span>
              <span class="contact-value">(62) 9 9875-8567</span>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="contact-detail">
              <span class="contact-label">Horários</span>
              <span class="contact-value">
                Seg – sex &nbsp;·&nbsp; 17:15h às 19h
                <br>
                sab - dom &nbsp;·&nbsp; 8:30h às 19h</span>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">
              <svg viewBox="0 0 24 24">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
            </div>
            <div class="contact-detail">
              <span class="contact-label">Instagram</span>
              <span class="contact-value">@justino5600 </span>
            </div>
          </div>

        </div>
      </div>

      <!-- Form -->
      <form action="https://formcarry.com/s/IO93gqW01sq" method="POST" enctype="multipart/form-data">
        <div class="contact-form" id="contactForm">
          <div class="form-group">
            <br>
            <br>
            <br>
            <label for="fName">Seu Nome</label>
          <input type="name" name="nome">
          <label for="fEmail">Email</label>
          <input type="email" name="email">
        </div>
                <div class="form-group">
          <label for="fMessage">Mensagem</label>
          <textarea name="message"></textarea>
        </div>
        <button class="btn-submit" id="btnSubmit" type="submit">
          Enviar Email
        </button>
    </div>
    </form>
  </div>
  </div>


  <!-- ═══════════════════════════════
     FOOTER
═══════════════════════════════ -->
  <footer>
    <div>
      <div class="footer-monogram">
        <svg viewBox="0 0 30 30" fill="none">
          <text x="2" y="23" font-family="Cormorant Garamond, serif" font-size="22" font-weight="300"
            fill="#f0c4d4">NJ</text>
        </svg>
      </div>
    </div>
    <div class="footer-name">Nanda Justino</div>
    <div class="footer-tagline">Beauty Studio</div>
    <div class="footer-sep"></div>
    <p class="footer-copy">© 2015 Nanda Justino Beauty Studio &nbsp;·&nbsp; Todos os direitos reservados</p>
  </footer>


  <!-- ═══════════════════════════════
     WHATSAPP FLOAT
═══════════════════════════════ -->
  <a href="https://wa.me/5562998758567?text=Gostaria%20de%20marcar%20um%20hor%C3%A1rio!" target="_blank"
    rel="noopener noreferrer" class="whatsapp-btn" title="Fale conosco no WhatsApp">
    <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  </a>

  <script>
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

          const url = `https://wa.me/5562998758567?text=Gostaria%20de%20marcar%20um%20hor%C3%A1rio!`;
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
  </script>
</body>

</html>
