// ---------- Typed.js for role
document.addEventListener('DOMContentLoaded', function () {
  new Typed(".typed-text", {
    strings: ["Python Developer", "Web Developer", "AI Enthusiast"],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
  });

  // ---------- Nav active on scroll
  const links = document.querySelectorAll('.nav-link');
  const sections = [...document.querySelectorAll('section[id]')];

  function onScroll() {
    const scrollY = window.pageYOffset;
    sections.forEach(sec => {
      const top = sec.offsetTop - 140;
      const h = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollY >= top && scrollY < top + h) {
        links.forEach(l => l.classList.remove('active'));
        const link = document.querySelector('.nav-link[href="#' + id + '"]');
        if (link) link.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', onScroll);
  onScroll();

  // ---------- IntersectionObserver reveal
  const io = new IntersectionObserver((entries) => {
    entries.forEach(ent => {
      if (ent.isIntersecting) {
        ent.target.classList.add('visible');
        // if you want one-time reveal uncomment:
        // io.unobserve(ent.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // animate skill bars when skills section visible
  const skillsSection = document.getElementById('skills');
  if (skillsSection) {
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.skill-bar span').forEach(span => {
            const p = span.getAttribute('data-percent') || span.style.width;
            span.style.width = p + '%';
          });
          skillObserver.disconnect();
        }
      });
    }, { threshold: 0.18 });
    skillObserver.observe(skillsSection);
  }

  // smooth scroll for nav links
  document.querySelectorAll('.nav-link').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const id = a.getAttribute('href');
      const el = document.querySelector(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // mobile hamburger basic toggle (if you want to extend)
  const hamburger = document.querySelector('.hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      document.querySelector('.navbar').classList.toggle('open');
    });
  }
});


// for the adding the skills setting in here
document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.progress-ring-foreground');
    const radius = 60; // Corresponds to the 'r' attribute in SVG
    const circumference = 2 * Math.PI * radius;

    circles.forEach(circle => {
        const percent = circle.closest('.progress-circle').getAttribute('data-percent');
        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDasharray = circumference;
        circle.style.strokeDashoffset = offset;
    });
});