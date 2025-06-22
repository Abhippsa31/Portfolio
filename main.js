document.addEventListener('DOMContentLoaded', () => {
  // Scrollspy Logic
  const sections = document.querySelectorAll<HTMLElement>('section');
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-links a');

  window.addEventListener('scroll', () => {
    let current: string = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      if (scrollY >= sectionTop) {
        current = section.getAttribute('id') ?? '';
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (current && link.getAttribute('href')?.includes(current)) {
        link.classList.add('active');
      }
    });
  });

  
});
