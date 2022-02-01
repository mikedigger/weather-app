const express = require('express');
const path = require('path');
const hbs = require('hbs');

const { geocode } = require('./app.js');

const publicPath = path.join(__dirname, './public');
const partialsPath = path.join(__dirname, './templates/partials');
const viewsPath = path.join(__dirname, './templates/views');

const app = express();

app.set('view engine', 'hbs');
app.set('views', viewsPath);
app.use(express.static(publicPath));

hbs.registerPartials(partialsPath);

app.get('', (req, res) => {

    res.render('index')
});

app.get('/weather', (req, res) => {
    geocode(req.query.target)
        .then(temp => {
            res.send({
                currentTemp: temp
            })
        })
});

app.listen('3000', () => {
    console.log('server is running at port 3000')
})



