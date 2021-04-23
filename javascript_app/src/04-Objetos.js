console.log('+------------Objetos-------------+');

const persona = {
    nombre: 'Andres Fernando',
    apellidoPaterno: 'Gelvez',
    apellidoMaterno: 'Araque',
    fechaNacimiento: '1981-11-11',
    direccion: {
        viaPrincipal: 'Calle',
        numeroVia: '43',
        nombreVia: 'San Pedro',
        placa: '70a-66',
        barrio: 'Villa Magna',
        locacion: 'Sur Oriente',
        comuna: '16'
    }
};

console.table(persona);

const PC = {
    marca: 'ACER',
    modelo:'Aspire E5-475G',
    nombreDispositivo: 'LAPTOP-5BMPU0TQ',
    componentes: {
        tarjetaGrafica: 'Nvidia geforce 940mx',
        procesador: 'Intel(R) Core(TM) i5-7200U CPU @ 2.50GHz   2.71 GHz',
        ram: '12 GB DDR 4',
        discoDuro: '1000 GB HDD',
        sistemaOperativo: 'Windows 10'
    }
};


console.table(PC);

let otraPersona01 = {...persona}

otraPersona01.nombre = 'ADRIAN'
otraPersona01.apellidoMaterno = 'Salazar'
otraPersona01.fechaNacimiento = '2009-02-22'

console.log('+-------------------------------------------+');
console.table(persona);
console.table(otraPersona01);

console.log('+------------------Objetos Dinamicos---------------------+');

const personaDinamica = {
    nombre: 'Andres Fernando',
    apellidoPaterno: 'Gelvez',
    apellidoMaterno: 'Araque',
    fechaNacimiento: '1981-11-11',
    direccion: {
        viaPrincipal: 'Calle',
        numeroVia: '43',
        nombreVia: 'San Pedro',
        placa: '70a-66',
        barrio: 'Villa Magna',
        locacion: 'Sur Oriente',
        comuna: '16'
    },
    fxNombreCompleto(){
        console.log(` Mi nombre es ${this.nombre} ${this.apellidoPaterno} ${this.apellidoMaterno}`);

    },
    fxTabularAtributos(){
        console.table(this);
    }
};

let obj = Object.create(personaDinamica)

obj.nombre = 'MARIANA'
obj.apellidoPaterno = 'PAJON'
obj.fxNombreCompleto();
obj.fxTabularAtributos();


console.log('+--------------FIN PROGRAMA--------------+');

