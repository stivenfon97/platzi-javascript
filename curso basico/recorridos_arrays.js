var articulos = [
    {nombre: "llanta", costo:2000},
    {nombre: "tornillo", costo:2500},
    {nombre: "manilla", costo:200},
    {nombre: "tijeras", costo:10},
    {nombre: "tubo", costo:380},
    {nombre: "Audifonos", costo:1380},
];

/* filtrar  Crea un nuevo array con los elementos del array que se pasó como parámetro y que cumplan con la condición definida.*/
var filtrosArticulos = articulos.filter(function(articulo){
    return articulo.costo <= 500
}); //filtra los articulos

/* mapea todo el contenido del array y genera un array */

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});

/* FIND  genera un nuevo array con el objeto  */

var encuentraArticulo = articulos.find(function (articulo) {
    return articulo.nombre === "tubo";
});

/* foreach recorre el contenido del array */

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

/* some regresa una validacion de verdadero o falso para los que cumplan o no en el array */

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});