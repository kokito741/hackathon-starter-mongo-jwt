const output = document.getElementById('output');

function show(o) { output.textContent = JSON.stringify(o, null, 2); }

document.getElementById('btn-api').onclick = async () => {
  const res = await fetch('/api');
  show(await res.json());
};

document.getElementById('btn-register').onclick = async () => {
  const name = document.getElementById('reg-name').value;
  const email = document.getElementById('reg-email').value;
  const password = document.getElementById('reg-pass').value;
  const res = await fetch('/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password })
  });
  show(await res.json());
};

document.getElementById('btn-login').onclick = async () => {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-pass').value;
  const res = await fetch('/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const data = await res.json();
  show(data);
  if (data.token) {
    localStorage.setItem('token', data.token);
  }
};

document.getElementById('btn-profile').onclick = async () => {
  const token = localStorage.getItem('token');
  const res = await fetch('/api/profile', {
    headers: { Authorization: 'Bearer ' + token }
  });
  show(await res.json());
};
