var fs = require('fs');
const { start } = require('repl');
module.exports = class IntervalScheduling {
    constructor() {
      
    }
   
    
    calculaScheduling(qtd, horarios) {
      
       var max = [];
        var anterior = 0
    
        for (var i = 0; i < qtd; i++) {
            if (horarios[i].inicio >= anterior) {
                max.push(i)
                anterior = horarios[i].fim
            }
        }
        return max
    }







}