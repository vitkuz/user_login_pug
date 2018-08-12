const path = require('path');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();

const VIEWS_PATH = path.resolve(__dirname,'views');

const homeRoutes = require('./routes/home.routes');
const userRoutes = require('./routes/user.routes');

app.set('view engine', 'pug');
app.set('views', VIEWS_PATH);

app.use(session({
    secret: 'keyboard cat',
    name: 'test01',
    resave: false,
    saveUninitialized: true,
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.use('/', homeRoutes);
app.use('/', userRoutes);

const PORT = process.env.NODE_PORT || 3000;

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log('__dirname=',__dirname);
    console.log('VIEWS_PATH=',VIEWS_PATH);
    console.log(`Running on ${PORT}. Enviroment ${process.env.NODE_ENV || 'development'}`);
});