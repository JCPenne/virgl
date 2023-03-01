const express = require('express');
const cors = require('cors');
const { json } = require('express');
const Pool = require('./db');

const app = express();

app.use(cors());
app.use(json());

app.get('/', async (req, res) => {
  try {
    const allQuestions = await Pool.query('');
    res.json(allQuestions.rows);
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(3003, () => {
  console.log('Server listening on Port 3003');
});
