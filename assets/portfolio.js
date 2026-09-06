'use strict';

const rows = [...document.querySelectorAll('.project-row')];
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    rows.forEach(row => { row.hidden = filter !== 'all' && !row.dataset.category.split(' ').includes(filter); });
    document.getElementById('filter-status').textContent = `${rows.filter(row => !row.hidden).length} proyek`;
    window.ScrollTrigger?.refresh();
  });
});

const email = 'arjunafransesco1@gmail.com';
document.getElementById('copy-email').addEventListener('click', async () => {
  const status = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText(email);
    status.textContent = 'Email disalin.';
  } catch {
    status.textContent = `Salin alamat ini: ${email}`;
  }
});

function updateChurn() {
  const tenure = Number(document.getElementById('tenure').value);
  const charges = Number(document.getElementById('charges').value);
  const contract = document.getElementById('contract').value;
  const internet = document.getElementById('internet').value;
  let logit = -.5 - tenure / 72 * 2.2 + (charges - 15) / 135 * 1.8;
  logit += contract === 'month' ? 1.4 : contract === 'two_year' ? -1.6 : 0;
  logit += internet === 'fiber' ? .8 : internet === 'no' ? -.9 : 0;
  const percent = Math.round(100 / (1 + Math.exp(-logit)));
  document.getElementById('tenure-value').textContent = `${tenure} bulan`;
  document.getElementById('charges-value').textContent = `$${charges}`;
  document.getElementById('risk-value').textContent = `${percent}%`;
  document.getElementById('risk-label').textContent = `Risiko churn ${percent >= 65 ? 'tinggi' : percent >= 35 ? 'sedang' : 'rendah'}`;
  document.getElementById('risk-bar').style.width = `${percent}%`;
}
document.getElementById('churn-form').addEventListener('input', updateChurn);
document.getElementById('churn-form').addEventListener('submit', event => event.preventDefault());
updateChurn();

const responses = {
  help: 'Perintah: skills, exp, edu, cv, contact, clear.',
  skills: 'Python, Scikit-learn, XGBoost, SQL/MySQL, Flutter, Laravel, data preprocessing, model evaluation, AWS Data Engineering.',
  exp: 'IT Engineer (Freelance) · QA & Flutter Intern (CV Adisatya) · Full Stack Developer (Anita Konveksi).',
  edu: 'D3 Manajemen Informatika, Polinema (2024–2027), IPK 3.83. SMAN 2 Kediri (2021–2024), nilai 93.0.',
  cv: 'Arjuna Fransesco — Data & Software. Unduh CV melalui tombol di bagian atas halaman.',
  contact: `Email: ${email} · WhatsApp: +62 877-5346-2865 · LinkedIn: /in/arjunafransesco.`
};
document.getElementById('terminal-form').addEventListener('submit', event => {
  event.preventDefault();
  const input = document.getElementById('command');
  const command = input.value.trim();
  const output = document.getElementById('terminal-output');
  if (!command) return;
  if (command.toLowerCase() === 'clear') output.replaceChildren();
  else {
    const line = document.createElement('p');
    line.textContent = `$ ${command}`;
    const answer = document.createElement('p');
    answer.textContent = Object.hasOwn(responses, command.toLowerCase()) ? responses[command.toLowerCase()] : 'Perintah tidak dikenal. Ketik help untuk daftar perintah.';
    output.append(line, answer);
    while (output.childElementCount > 60) output.firstElementChild.remove();
    output.scrollTop = output.scrollHeight;
  }
  input.value = '';
});

document.querySelectorAll('.certificates details').forEach(detail => detail.addEventListener('toggle', () => window.ScrollTrigger?.refresh()));
if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
  const motion = gsap.matchMedia();
  motion.add('(min-width: 1001px) and (prefers-reduced-motion: no-preference)', () => {
    const features = gsap.utils.toArray('.feature');
    features.forEach((feature, index) => {
      if (index < features.length - 1) {
        ScrollTrigger.create({ trigger: feature, start: 'top 80px', endTrigger: '.feature-gallery', end: 'bottom bottom', pin: true, pinSpacing: false });
      }
      const media = feature.querySelector('.feature-image');
      gsap.fromTo(media, {scale: .8}, {scale: 1, ease: 'none', scrollTrigger: {trigger: feature, start: 'top bottom', end: 'top 35%', scrub: .6}});
      if (index < features.length - 1) {
        gsap.to(media, {opacity: .2, ease: 'none', scrollTrigger: {trigger: features[index + 1], start: 'top 65%', end: 'top 80px', scrub: .6}});
      }
    });
  });
  document.fonts.ready.then(() => ScrollTrigger.refresh());
  window.addEventListener('load', () => ScrollTrigger.refresh(), {once: true});
}
