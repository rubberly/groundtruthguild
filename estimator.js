// Price estimator on the home page. A rough range only; real quotes follow
// scoping. Rates mirror the pricing cards (per answer, two reviewers +
// adjudication included).
(function () {
  const form = document.getElementById('estimator');
  if (!form) return;
  const RATES = { generalist: [6, 9], expert: [25, 45], senior: [50, 90] };
  const TYPE = { compare: 1, grade: 0.7 };
  const $ = (id) => document.getElementById(id);
  const usd = (n) => '$' + Math.round(n).toLocaleString('en-US');
  const round = (n) => (n >= 10000 ? Math.round(n / 500) * 500 : Math.round(n / 50) * 50);

  function update() {
    const out = $('est-out');
    const items = Math.max(0, Math.floor(Number($('est-items').value) || 0));
    const level = $('est-level').value;
    const type = $('est-type').value;
    out.textContent = '';
    if (type === 'write') {
      out.append('Expert-written answers are priced by length and difficulty. ');
      const a = document.createElement('a');
      a.href = 'mailto:LucasMaillet2019@gmail.com?subject=Rounds%20quote%3A%20written%20answers';
      a.textContent = 'Ask for a quote';
      out.append(a, '.');
      return;
    }
    if (items < 50) {
      out.textContent = 'Enter at least 50 answers.';
      return;
    }
    const [lo, hi] = RATES[level];
    const k = TYPE[type];
    const b = document.createElement('b');
    b.textContent = `${usd(round(items * lo * k))}–${usd(round(items * hi * k))}`;
    out.append('Estimated ', b, ` for ${items.toLocaleString('en-US')} answers.`);
    if (type === 'compare' && level === 'expert' && items >= 400 && items <= 600) {
      out.append(' Tip: the 500-answer pilot sprint is a fixed $9,500.');
    }
  }
  form.addEventListener('input', update);
  form.addEventListener('submit', (e) => e.preventDefault());
  update();
})();
