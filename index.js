const express = require('express');
// const bodyParser = require('body-parser');
const routes = require('./src/routes/index');


const app = express();

app.use(express.json());
app.use(routes);

app.get('/',(req, res) => {
    res.send('hello world');
});

app.listen(3333);