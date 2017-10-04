const express = require('express');
const cors = require('cors');
const process = require('process');

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.use(express.static('build'));

app.listen(port, () => console.log(`Listening on port ${port}`));
