function openDemo(title, text) {
  const dialog = document.getElementById('demo-dialog');
  if (!dialog) return;
  document.getElementById('demo-title').textContent = title;
  document.getElementById('demo-text').textContent = text;
  dialog.showModal();
}

function closeDemo() {
  document.getElementById('demo-dialog')?.close();
}

function chosen(group) {
  return group.querySelector('[data-choice][aria-pressed="true"]');
}

document.addEventListener('click', (event) => {
  const dialog = document.getElementById('demo-dialog');
  if (dialog && event.target === dialog) dialog.close();

  const demo = event.target.closest('[data-demo]');
  if (demo) {
    event.preventDefault();
    openDemo(demo.dataset.demoTitle || 'Demonstração', demo.dataset.demoText || '');
    return;
  }

  const choice = event.target.closest('[data-choice]');
  if (choice) {
    const group = choice.closest('[data-group]');
    group.querySelectorAll('[data-choice]').forEach((item) => {
      item.setAttribute('aria-pressed', item === choice ? 'true' : 'false');
    });
    const status = choice.closest('[data-flow]')?.querySelector('[data-flow-status]');
    if (status) status.textContent = '';
    return;
  }

  const confirm = event.target.closest('[data-flow-confirm]');
  if (confirm) {
    const flow = confirm.closest('[data-flow]');
    const groups = [...flow.querySelectorAll('[data-group]')];
    const missing = groups.filter((group) => !chosen(group));
    const status = flow.querySelector('[data-flow-status]');
    if (missing.length) {
      const names = missing.map((group) => group.dataset.label).join(', ');
      status.textContent = `Ainda falta escolher: ${names}. Nada é enviado desta tela.`;
      return;
    }
    const summary = groups.map((group) => `${group.dataset.label}: ${chosen(group).dataset.value}`).join(' · ');
    flow.querySelector('[data-flow-summary]').textContent = summary;
    flow.querySelector('[data-flow-setup]').hidden = true;
    flow.querySelector('[data-flow-result]').hidden = false;
    return;
  }

  const reset = event.target.closest('[data-flow-reset]');
  if (!reset) return;
  const flow = reset.closest('[data-flow]');
  flow.querySelectorAll('[data-choice]').forEach((item) => item.setAttribute('aria-pressed', 'false'));
  const status = flow.querySelector('[data-flow-status]');
  if (status) status.textContent = '';
  flow.querySelector('[data-flow-result]').hidden = true;
  flow.querySelector('[data-flow-setup]').hidden = false;
});

const preset = location.hash.replace('#', '');
if (preset) {
  const choice = document.querySelector(`[data-id="${CSS.escape(preset)}"]`);
  if (choice) choice.click();
}
