(() => {
  const nav = document.querySelector('.about-toc');
  if (!nav) return;
  const links = [...nav.querySelectorAll('a[href^="#"]')];
  const targets = links.map(link => document.getElementById(link.hash.slice(1)));
  let pending = false;
  const update = () => {
    let current = 0;
    targets.forEach((target, index) => {
      if (target && target.getBoundingClientRect().top <= 160) current = index;
    });
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8) current = links.length - 1;
    links.forEach((link, index) => {
      if (index === current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    pending = false;
  };
  window.addEventListener('scroll', () => {
    if (!pending) { pending = true; requestAnimationFrame(update); }
  }, { passive: true });
  window.addEventListener('resize', update);
  window.addEventListener('hashchange', update);
  update();
})();
