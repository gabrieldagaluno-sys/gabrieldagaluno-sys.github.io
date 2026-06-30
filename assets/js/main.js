// Pequeno script para menu mobile e melhorias UX
document.addEventListener('DOMContentLoaded', function () {
  const nav = document.getElementById('primary-navigation');
  const toggle = document.getElementById('navToggle');

  if (!nav || !toggle) return;

  function setExpanded(value) {
    toggle.setAttribute('aria-expanded', String(value));
    if (value) nav.classList.add('open');
    else nav.classList.remove('open');
  }

  toggle.addEventListener('click', function () {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    setExpanded(!expanded);
  });

  // Fecha o menu ao clicar em um link (mobile)
  nav.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'A') setExpanded(false);
  });

  // Fecha ao pressionar ESC
  document.addEventListener('keyup', function (ev) {
    if (ev.key === 'Escape') setExpanded(false);
  });
});
