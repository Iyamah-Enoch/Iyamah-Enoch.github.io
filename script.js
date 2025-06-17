  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show-on-scroll');
      }
    });
  });

  document.querySelectorAll('.hidden-on-load').forEach(el => observer.observe(el));