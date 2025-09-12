// small JS to handle contact form and footer year
document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  // Basic front-end validation passed — for real site: send via server or use Formspree/Netlify forms
  formNote.textContent = 'Thanks! Your message was composed locally. To actually send messages, connect this form to an email service or server.';
  form.reset();
});
