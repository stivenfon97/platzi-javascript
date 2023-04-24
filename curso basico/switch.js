var numero = 1;

switch (numero) {
    case 1:
        console.log("Soy Uno");
        break;
    case 10:
        console.log("Soy un dies");
        break;
    case 100:
        console.log("Soy in cien");
        break;
    default:
        console.log("No soy numero");
        break;
}


var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

var juego = function(usuario, maquina){
    switch (true) {
        case usuario == "piedra" && maquina == "tijera":
            console.log("Gana Usuario");
            break;
        case usuario == "piedra" && maquina == "papel":
            console.log("Gana CPU");
            break;
        case usuario == "papel" && maquina == "tijera":
            console.log("Gana CPU");
            break;
        case usuario == "papel" && maquina == "piedra":
            console.log("Gana Usuario");
            break;
        case usuario == "tijera" && maquina == "piedra":
            console.log("Gana CPU");
            break;
        case usuario == "tijera" && maquina == "papel":
            console.log("Gana Usuario");
            break;
        default:
            console.log("empate");
            break;
    }
}

juego("piedra", "papel");