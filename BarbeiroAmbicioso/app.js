const express = require('express');
const app = express();
const intervalScheduling = require('./intervalScheduling/intervalScheduling.js');
app.use(express.static('public'));
const bodyParser = require('body-parser');

app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('', function (req, resposta) {
    resposta.sendFile(__dirname + "/public/index.html");

});
app.set('view engine', 'pug')
let result
let horarios = [];
app.post("/addTime", function (req, res) {
    result = {
        inicio: parseInt(req.body.startTime),
        fim: parseInt(req.body.endTime),
    }
    horarios.push(result)
    console.log(horarios)
    res.sendFile(__dirname + "/public/index.html");
});
app.post("/checkDisponibility", function (req, res) {
    horarios.sort(function (a, b) {
        if (a.fim < b.fim) return -1;
        if (a.fim > b.fim) return 1;
        return 0;
    });
    var interval = new intervalScheduling()
    horariosScheduling = interval.calculaScheduling(horarios.length, horarios)
    res.render('../views/test', {

        teste: horariosScheduling
    });
});


app.listen(3000, () => console.log("Tudo certo"));