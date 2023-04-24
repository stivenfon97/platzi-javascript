var a = 20;
var b = a + "";

console.log(b);

typeof b; // aqui el tipo de dato es String ya que a se concateno con un string

var c = String(a); // aqui se obliga a convertir a un string la variable c

var d = Number(c); // aqui explicitamente se convierte a tipo de dato numerico al valor de la variable d

/* Coercion Implícita */

// Es el tipo  de dato por defecto que es un dato

/* Coerción Explicita */

// Es cuando se obliga a modificar el tipo de dato como pasar de String a Number