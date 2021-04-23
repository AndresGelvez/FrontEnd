console.log('Alcance de Variables');

var variableGlobal = 'Variable de alcance Global';
const varConstante = 'Constante durante ejecucion';
let varLetLocal = 'ABC';
let varLetnumero = 1112;

console.log('Variable Global 1,'+varLetnumero);
console.log('Constante = '+varConstante);
{
    variableGlobal = 'otro valor';
    console.log('Variable Global 2, '+variableGlobal);
    let varLetLocal = 'XYZ';
    console.log('letLocal: '+varLetLocal);

}
console.log('letLocal: '+varLetLocal);
let evaluacionIf = false;

if (true) {
    console.log('Adentro del IF');
    let LetnumeroY = 11;
    let LetnumeroX = 76;

    console.log('Operacion * = '+(LetnumeroX * LetnumeroY));
}else{
    console.log('Estamos en el ELSE de if');
}


console.log('+-------------SELECTOR-------------------+');
let letkey = 2;
switch (letkey) {
    case 1: 
        console.log('Caso para 1');
        break;
    case 2: 
        console.log('Caso para 2');
        break;
    case 3: 
        console.log('Caso para 3');
        break;
    default:
        console.log('Valor no determinado en el selector');
        break;
}





