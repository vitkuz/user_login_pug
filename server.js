const path = require('path');
const express = require('express');

const app = express();

const VIEWS_PATH = path.resolve(__dirname,'views');


app.set('view engine', 'pug');
app.set('views', VIEWS_PATH);

app.get('/', (req,res)=> {
    console.log(req);
    res.send('OK');
});

const PORT = process.env.NODE_PORT || 5000;

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log('__dirname=',__dirname);
    console.log('VIEWS_PATH=',VIEWS_PATH);
    console.log(`Running on ${PORT}. Enviroment ${process.env.NODE_ENV || 'development'}`);
});