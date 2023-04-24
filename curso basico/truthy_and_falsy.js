Boolean(); // esto es falso
Boolean(0); // esto es falso
Boolean(null); // esto es falso
Boolean(NaN); // esto es falso
Boolean(undefined); // esto es falso
Boolean(false); // esto es falso
Boolean(""); // esto es falso

/* Valores Verdaderos */

//Ejemplos en los que Boolean devuelve verdadero:
Boolean(1); //true para 1 o cualquier número diferente de cero (0)
Boolean("a"); //true para cualquier caracter o espacio en blanco en el string
Boolean([]); //true aunque el array esté vacío
Boolean({}); //true aunque el objeto esté vacío
Boolean(function(){}); //Cualquier función es verdadera también