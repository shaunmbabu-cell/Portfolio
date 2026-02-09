document.addEventListener('DOMContentLoaded', () => {
  const ham = document.getElementById('hamburger');
  const nav = document.getElementById('navLinks');
  ham.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    ham.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) nav.style.display = 'flex'; else nav.style.display = '';
  });

  // simple contact feedback
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMessage');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    msg.textContent = 'Thanks — message sent (demo).';
    form.reset();
    setTimeout(() => msg.textContent = '', 4000);
  });

  // year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});document.addEventListener('DOMContentLoaded', () => {
  const ham = document.getElementById('hamburger');
  const nav = document.getElementById('navLinks');
  ham.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    ham.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) nav.style.display = 'flex'; else nav.style.display = '';
  });

  // simple contact feedback
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMessage');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    msg.textContent = 'Thanks — message sent (demo).';
    form.reset();
    setTimeout(() => msg.textContent = '', 4000);
  });

  // year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});