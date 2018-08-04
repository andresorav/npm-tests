const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.get('/404', (req, res) => {
    res.status(404).send({
        error: 'Page not found.'
    })
});

app.get('/users', (req, res) => {
   res.send([{
       name: 'Peeter',
       address: 'Kalamaja'
   }, {
       name: 'Andres',
       address: 'Tallinn'
   }]);
});

app.listen(3000);
module.exports.app = app;