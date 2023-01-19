const express = require('express')
const app = express()
const cors    = require('cors');

const port = process.env['APP_PORT'] || 8000;

app.use(cors());

app.get('/api/status', (req, res) => res.status(200).send('73'))

app.get('/api/hello', (req, res) => res.send('HELLO WORLD!!!!!'))

app.listen(port, ()=>{
  console.log(`Listening on port ${port}`);
});