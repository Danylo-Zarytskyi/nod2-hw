const express = require('express');
const ejs = require('ejs');
const server = express();
const path = require('path');
const createError = require('http-errors');

const mainRouter = require('./routes/main');
const redirectRouter = require('./routes/redirect');

server.use(express.static('public'));

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

server.use('/', mainRouter);
server.use('/redirect', redirectRouter);

server.use('/style', express.static(path.join(__dirname, 'style')));

server.use((res, req, next) => {
    next(createError(404));
})

server.use((err, req, res, next) => {

    const code = err.status || 500;

    res.status(code);
    res.end(`Error: ${code}`);

})

server.listen(3000);

