const express = require('express');
const app = express();
const intervalScheduling = require('./intervalScheduling/intervalScheduling.js');
app.use(express.static('public'));

app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))

app.get('', function (req, resposta) {
    resposta.sendFile(__dirname + "/public/index.html");

});
//teste  ordena horarios
var horarios = [{
    inicio: 1,
    fim: 3
},
{
    inicio: 2,
    fim: 4
},
{
    inicio: 0,
    fim: 2
}, {
    inicio: 5,
    fim: 6
},
{
    inicio: 7,
    fim: 8
},
{
    inicio: 6,
    fim: 10
}];
horarios.sort(function (a, b) {
    if (a.fim < b.fim) return -1;
    if (a.fim > b.fim) return 1;
    return 0;
});
console.log(horarios);
//fim teste
var interval = new intervalScheduling()
console.log(interval.calculaScheduling(horarios.length, horarios))


app.listen(3000, () => console.log("Tudo certo"));