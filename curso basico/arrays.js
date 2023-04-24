var frutas = ['manzana', 'platano', 'ceereza', 'fresa'];

var masFrutas = frutas.push('uvas'); //agregar elementos al array
var ultimo = frutas.pop('uvas'); // eliminar un elemento del array
var nuevaLongitud = frutas.unshift('uvas') //agrega un elemento a la lista al inicio del array
var borrarFruta = frutas.shift('uvas'); //elimina el primer elemento del array
var posicion = frutas.indexOf('ceereza'); //da la posicion de un elemento en el array


function array(arr) {
    return arr[0];
}