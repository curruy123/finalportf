// Shared behaviour for case study pages
(function () {
  // Mobile menu
  const toggle = document.getElementById('menuToggle');
  const links = document.getElementById('navLinks');
  if (toggle && links) {
    const close = () => { links.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); };
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }

  // Highlight the table-of-contents entry for the section in view
  const tocLinks = document.querySelectorAll('.toc a');
  if (tocLinks.length && 'IntersectionObserver' in window) {
    const map = {};
    tocLinks.forEach(a => map[a.getAttribute('href').slice(1)] = a);
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && map[e.target.id]) {
          tocLinks.forEach(a => a.classList.remove('active'));
          map[e.target.id].classList.add('active');
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    Object.keys(map).forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
  }

  // Carousels
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('.carousel').forEach(car => {
    const imgs = [...car.querySelectorAll('.carousel-frame img')];
    const caption = car.querySelector('.carousel-caption');
    const dots = car.querySelector('.dots');
    let i = 0, timer;

    imgs.forEach((img, n) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', 'Show ' + img.alt);
      b.addEventListener('click', () => { go(n); restart(); });
      dots.appendChild(b);
    });

    function go(n) {
      i = (n + imgs.length) % imgs.length;
      imgs.forEach((img, k) => img.classList.toggle('on', k === i));
      [...dots.children].forEach((d, k) => d.setAttribute('aria-current', k === i ? 'true' : 'false'));
      if (caption) caption.textContent = imgs[i].dataset.caption || imgs[i].alt;
    }
    function restart() {
      clearInterval(timer);
      if (!reduce) timer = setInterval(() => go(i + 1), 4000);
    }
    car.querySelector('.prev').addEventListener('click', () => { go(i - 1); restart(); });
    car.querySelector('.next').addEventListener('click', () => { go(i + 1); restart(); });
    car.addEventListener('mouseenter', () => clearInterval(timer));
    car.addEventListener('mouseleave', restart);
    go(0); restart();
  });

  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
