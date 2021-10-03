const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('test')
});

app.get('/', (req, res) => {
    res.send("welcome")
});