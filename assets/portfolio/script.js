const signalButton = document.querySelector('#signal-toggle');
const signalStatus = document.querySelector('#signal-status');
const note = document.querySelector('.lab-note');
signalButton.hidden = false;
signalButton.addEventListener('click', () => {
  const active = signalButton.getAttribute('aria-pressed') !== 'true';
  signalButton.setAttribute('aria-pressed', String(active));
  note.classList.toggle('signal-on', active);
  signalButton.innerHTML = active ? '<span aria-hidden="true">Ⅱ</span> Pause signal' : '<span aria-hidden="true">↗</span> Send a signal';
  signalStatus.textContent = active ? 'DEMO SIGNAL: DEVICE → EDGE → CLOUD → INSIGHT' : 'AN ILLUSTRATED EDGE-TO-CLOUD SYSTEM';
});

const copyButton = document.querySelector('#copy-email');
const copyStatus = document.querySelector('#copy-status');
if (navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  let resetTimer;
  copyButton.addEventListener('click', async () => {
    clearTimeout(resetTimer);
    try {
      await navigator.clipboard.writeText('nzaunzilani@gmail.com');
      copyButton.textContent = 'Copied!';
      copyStatus.textContent = 'Email address copied to clipboard.';
    } catch {
      copyButton.textContent = 'Try email link';
      copyStatus.textContent = 'Copy unavailable. Use the email link or select the address to copy it.';
    }
    resetTimer = setTimeout(() => { copyButton.textContent = 'Copy email'; }, 3000);
  });
}
document.querySelector('#year').textContent = new Date().getFullYear();
