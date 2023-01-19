const express = require('express')
const cors = require('cors');
const app = express()
app.use(cors());

const port = process.env['APP_PORT'] || 5000;

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))

app.listen(port, ()=>{
  console.log(`Listening on port ${port}`);
});