var estudiantes = ['maria', 'sergio', 'rosa', 'daniel'];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for (var i = 0; i<estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

for (var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

while(estudiantes.length >= 0){
    var estudiante = estudiantes.shift(); //shift va sacando elementos del array
    saludarEstudiantes(estudiante);
}

var nombre = String;
var apellido = String;
var nombreDeUsuarioEnPlatzi = String;
var edad = Number;
var correoElectrónico = String;
var mayorDeEdad = Boolean;
var dineroAhorrado = Number;
var deudas = Number;

console.log("Nombre completo: " + nombre + apellido);
var dineroReal = dineroAhorrado - deudas;
console.log("Dinero real: " + dineroReal);

const tipoDeSuscripcion = {
    Free: 'Solo puedes tomar los cursos gratis',
    Basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    Expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
    ExpertPlus: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'
};

const usuarioSuscripcion = "Free";

if(tipoDeSuscripcion[usuarioSuscripcion]){console.log(tipoDeSuscripcion[usuarioSuscripcion]);}

if(tipoDeSuscripcion == "Free"){
    console.log("Solo puedes tomar los cursos gratis");
}else if(tipoDeSuscripcion == "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if(tipoDeSuscripcion == "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año")
}else{
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

