let transactions = JSON.parse(localStorage.getItem('txns') || '[]');
let selectedType = 'expense';

// Set today's date as default
document.getElementById('date').valueAsDate = new Date();

function save() {
  localStorage.setItem('txns', JSON.stringify(transactions));
}

function fmt(n) {
  return '₹' + Math.abs(n).toFixed(2);
}

function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  const idx = ['dashboard', 'add', 'history'].indexOf(id);
  document.querySelectorAll('nav button')[idx].classList.add('active');
  if (id === 'dashboard') renderDashboard();
  if (id === 'history') renderHistory();
}

function selectType(t) {
  selectedType = t;
  document.getElementById('btn-expense').className = t === 'expense' ? 'selected-expense' : '';
  document.getElementById('btn-income').className = t === 'income' ? 'selected-income' : '';
}

function addTransaction() {
  const desc = document.getElementById('desc').value.trim();
  const amount = parseFloat(document.getElementById('amount').value);
  const category = document.getElementById('category').value;
  const date = document.getElementById('date').value;

  if (!desc) { alert('Please enter a description.'); return; }
  if (!amount || amount <= 0) { alert('Please enter a valid amount.'); return; }
  if (!date) { alert('Please select a date.'); return; }

  transactions.unshift({ id: Date.now(), desc, amount, category, date, type: selectedType });
  save();

  document.getElementById('desc').value = '';
  document.getElementById('amount').value = '';
  document.getElementById('date').valueAsDate = new Date();

  showPage('dashboard');
}

function deleteTransaction(id) {
  transactions = transactions.filter(t => t.id !== id);
  save();
  renderHistory();
  renderDashboard();
}

function renderDashboard() {
  const income = transactions.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
  const expense = transactions.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
  document.getElementById('total-income').textContent = fmt(income);
  document.getElementById('total-expense').textContent = fmt(expense);
  document.getElementById('balance').textContent = fmt(income - expense);

  // Category breakdown
  const cats = {};
  transactions.filter(t => t.type === 'expense').forEach(t => {
    cats[t.category] = (cats[t.category] || 0) + t.amount;
  });
  const sorted = Object.entries(cats).sort((a, b) => b[1] - a[1]);
  const maxVal = sorted[0]?.[1] || 1;
  const el = document.getElementById('cat-list');

  if (!sorted.length) {
    el.innerHTML = '<div class="empty">No expenses yet.</div>';
    return;
  }

  el.innerHTML = sorted.map(([cat, val]) => `
    <div class="cat-row">
      <div class="cat-header">
        <span>${cat}</span>
        <span>${fmt(val)}</span>
      </div>
      <div class="cat-bar-bg">
        <div class="cat-bar" style="width:${(val / maxVal * 100).toFixed(1)}%"></div>
      </div>
    </div>
  `).join('');
}

function renderHistory() {
  const typeFilter = document.getElementById('filter-type').value;
  const catFilter = document.getElementById('filter-cat').value;

  const list = transactions.filter(t =>
    (typeFilter === 'all' || t.type === typeFilter) &&
    (catFilter === 'all' || t.category === catFilter)
  );

  const el = document.getElementById('tx-list');
  if (!list.length) {
    el.innerHTML = '<div class="empty">No transactions found.</div>';
    return;
  }

  el.innerHTML = list.map(t => `
    <div class="tx-item">
      <div class="tx-dot ${t.type}"></div>
      <div class="tx-info">
        <div class="tx-desc">${t.desc}</div>
        <div class="tx-meta">${t.category} · ${t.date}</div>
      </div>
      <div class="tx-amount ${t.type}">${t.type === 'income' ? '+' : '-'}${fmt(t.amount)}</div>
      <button class="tx-del" onclick="deleteTransaction(${t.id})">×</button>
    </div>
  `).join('');
}

// Initial render
renderDashboard();