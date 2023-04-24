const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pRest = document.querySelector('#result');
const form = document.querySelector('#formulario');



form.addEventListener('submit', sumarInputvalues);

input1.addEventListener('blur', alerta);

function sumarInputvalues(e){
    console.log({e});
    e.preventDefault();
    pRest.innerText = "Resultado: " + Number(input1.value) + Number(input2.value);
    alert(Number(input1.value) + Number(input2.value));
 
}

function alerta(){
    alert("salio del input");
}