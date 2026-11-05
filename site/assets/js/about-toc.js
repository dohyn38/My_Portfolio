(() => {
  document.querySelectorAll('.about-toc, .project-toc').forEach(nav => {
    const entries = [...nav.querySelectorAll('a[href^="#"]')].map(link => {
      let id;
      try { id = decodeURIComponent(link.hash.slice(1)); }
      catch { id = link.hash.slice(1); }
      return { link, target: document.getElementById(id) };
    }).filter(entry => entry.target);
    if (!entries.length) return;
    let pending = false;
    let activeLink = null;
    const update = () => {
      const header = document.querySelector('.header');
      const offset = Math.max(110, (header?.getBoundingClientRect().height || 0) + 28);
      let current = entries[0];
      for (const entry of entries) {
        if (entry.target.getBoundingClientRect().top <= offset) current = entry;
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8) {
        current = entries[entries.length - 1];
      }
      for (const { link } of entries) {
        if (link === current.link) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
      // 긴 목차 안에서만 스크롤하여 본문 위치는 유지합니다.
      if (activeLink !== current.link && nav.scrollHeight > nav.clientHeight) {
        const box = nav.getBoundingClientRect();
        const item = current.link.getBoundingClientRect();
        if (item.top < box.top + 12) nav.scrollTop += item.top - box.top - 12;
        else if (item.bottom > box.bottom - 12) nav.scrollTop += item.bottom - box.bottom + 12;
      }
      activeLink = current.link;
      pending = false;
    };
    const schedule = () => {
      if (!pending) { pending = true; requestAnimationFrame(update); }
    };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('hashchange', schedule);
    window.addEventListener('load', schedule);
    update();
  });
})();
