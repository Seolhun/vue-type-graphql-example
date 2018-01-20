import { app } from '../index';

// Routes
app.get('/hello', (req, res) => {
  return res.send('Can you hear me?');
});

app.get('/hello/:id', (req, res) => {
  return res.send('Can you update me?');
});
