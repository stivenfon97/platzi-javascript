var miAuto = {
    marca: 'Lambo',
    modelo: 'huracan',
    año: 2022,
    detalleDelAuto: function () {
        console.log(`Auto ${this.modelo} ${this.annio}`)
    }
};

/* FUNCION CONSTRUCTORA */

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

// se crea un nuevo objeto
var autoNuevo = new auto("Tesla", "Model 3", 2020);

//otros objetos
var autoNuevo2 = new auto("Tesla", "Model x", 2018);
var autoNuevo3 = new auto("Toyota", "TLX", 2023);

var carros = [];

var cantidad = prompt("Cuantos autos desea ingresar");

if(cantidad > 0){
    for(let i=0; i<cantidad; i++){
        var marca = prompt("Ingrese Marca: ");
        var modelo = prompt("Ingrese modelo: ");
        var annio = prompt("Ingrese año: ");

        var carro = new auto(marca,modelo,annio);

        carros.push(carro);
    }
}

for(var i; i<carros.length; i++){
    console.log(carros[i]);
}