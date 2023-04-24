var edad = 18;

if (edad === 18) {
    console.log("Puedes votar");
}else if( edad > 18){
    console.log("Puedes volver a votar");
}else{
    console.log("No puedes votar");
}

/* Operador ternario */

condition ? true : false;

var numero = 1;

var resultado = numero === 1 ? 'Soy uno' : 'No, soy';

var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

var resultado = function(usuario, cpu){
    if(usuario == op1 && cpu == op2){
        console.log('Gana CPU');
    }else if(usuario == op2 && cpu == op2){
        console.log('Empate');
    }else if(usuario == op3 && cpu == op2){
        console.log('Gana Usuario');
    }else if(usuario == op2 && cpu == op1){
        console.log('Gana Usuario');
    }else if(usuario == op2 && cpu == op3){
        console.log('Gana CPU');
    }else if(usuario == op3 && cpu == op1){
        console.log('Gana CPU');
    }else if(usuario == op3 && cpu == op2){
        console.log('Gana Usuario');
    }else if(usuario == op1 && cpu == op3){
        console.log('Gana Usuario');
    }else if(usuario == op1 && cpu == op1){
        console.log('Empate');
    }else if(usuario == op3 && cpu == op3){
        console.log('Empate');
    }
}

resultado(op1, op3)