let preguntas = [' numero: ', 'digito: '];
let numeroArreglo = [];


const Pregunta = (i)  => {

    console.log(preguntas[i]);
}

process.stdin.on('dato', (d) => {   

    numeroArreglo.push(d.toString().trim()) 

    if(numeroArreglo.length < preguntas.length){

        Pregunta(numeroArreglo.length)
    }
    else {
        buscar(numeroArreglo[0], numeroArreglo[1]);
        process.exit();

    }
})

const buscar = (num, b) => {

    resultado = num.indexOf(b)  

    if(resultado != -1){
        console.log(` se ha encontrado el digito `);
    }
    else {
        console.log(' no se ha encontrado el digito ');
    }
}

Pregunta(0);