const { match } = require('assert');
const readline = require('readline');

let teclado = readline.createInterface({

    input: process.stdin,
    output: process.stdout

});

teclado.question(` numero: `, function(data){

    var h=true;

    for (var i = 2; i <= data/2; i++) {

        if ((data % i) == 0) {
            h = false;
        
        }
    }

    if(h){

        console.log(`el numero es primo`);         

    }else{console.log(`el numero no es primo`);}    

    
    teclado.close();
});