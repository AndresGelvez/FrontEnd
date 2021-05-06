const { match } = require('assert');
const readline = require('readline');

let teclado = readline.createInterface({

    input: process.stdin,
    output: process.stdout

});

teclado.question(` numero: `, function(dato){

    var h=true;

    for (var i = 2; i <= dato/2; i++) {

        if ((dato % i) == 0) {
            h = false;
        
        }
    }

    if(j){
        
        console.log(`el numero es primo`);         

    }else{console.log(`el numero no es primo`);}    

    
    teclado.close();
});