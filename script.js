const h1 = document.querySelector('h1'); //selecciona etiquetas o id o clases para darles funcionalidad
const p = document.querySelector('p');
const parrafo = document.getElementsByClassName('parrafo');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(
    {h1,
    p,
    parrafo,
    pid,
    input}
)

console.log(h1)

h1.innerHTML = 'patito <br> ttt'; //la funcion inner convierte el codigo html
h1.innerText = 'patito <br> ttt'; //la funcion text convierte el texto del codigo
//console.log(h1.getAttribute('pantalla'));// getattribute nos ayuda a leer algun atributo del elemento
//console.log(h1.setAttribute('class', 'rojo'));// permite modificar los atributos del elemento

/* PARA MODIFICAR CLASES EN ESPECIFICO */

h1.classList.add('rojo'); //Añade una clase
h1.classList.remove('verde'); //remueve clase

//h1.classList.toggle('verde')
//h1.classList.contains('verde') valida si tiene la clase o no


input.value="456"

/* COMO CREAR ELEMENTO DESDE 0 CON JAVASCRIPT */

const img = document.createElement('img'); //crea elemento imagen
img.setAttribute('src', 'https://previews.123rf.com/images/kidagame/kidagame2302/kidagame230200551/198409956-icono-de-vector-sencillo-ilustraci%C3%B3n-plana-en-un-tema-de-internet.jpg');

pid.append(img); // estas funciones hacen lo mismo, agregan elementos dentro de otro elemento.
pid.appendChild(img); // estas funciones hacen lo mismo, agregan elementos dentro de otro elemento.
