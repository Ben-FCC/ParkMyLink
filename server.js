const express = require('express');
const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'data.json');

function loadData() {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

function saveData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

let items = loadData();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/urls', (req, res) => {
  const sorted = [...items].sort((a, b) => b.createdAt - a.createdAt);
  res.json(sorted);
});

app.post(['/api/urls', '/add'], (req, res) => {
  const url = req.body.url || req.query.url;
  if (!url) {
    return res.status(400).json({ error: 'url is required' });
  }
  const item = { id: Date.now().toString(), url, createdAt: Date.now() };
  items.push(item);
  saveData(items);
  res.json(item);
});

app.delete('/api/urls/:id', (req, res) => {
  const { id } = req.params;
  const initialLength = items.length;
  items = items.filter(i => i.id !== id);
  if (items.length === initialLength) {
    return res.status(404).json({ error: 'not found' });
  }
  saveData(items);
  res.json({ success: true });
});

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
