var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");

function revDatos(x,y) {
    if (!isNaN(x) && !isNaN(y)) {
        return x, y;
    }else{alert("Debe ingresar solo numeros enteros positivos")
    }
}

btn1.addEventListener('click', function () {
    let capt1 = Number(document.getElementById("p1").value);
    let capt2 = Number(document.getElementById("p2").value);
    revDatos(capt1, capt2);
    let resultmenor = Math.min(capt1, capt2);
    mostrar(resultmenor);
})

// No entiendo como asignar un valor sin un operador de comparacion(=) por lo que solo pude cambiar el metodo de hallar si son iguales pero no supe como asignar o generar un valor para saber si es identico, siendo un valor y no un arreglo o un objeto.
btn2.addEventListener('click', function () {
    let capt1 = Number(document.getElementById("p1").value);
    let capt2 = Number(document.getElementById("p2").value);
    revDatos(capt1, capt2);
    let dato3 = capt1 / capt2; 
    dato3 !== 1 ? mostrar("No son Iguales") : mostrar("Iguales");
})

btn3.addEventListener('click', function () {
    let capt1 = Number(document.getElementById("p1").value);
    let capt2 = Number(document.getElementById("p2").value);
    revDatos(capt1, capt2);
    mostrarIntercam(capt1, capt2);
})

btn4.addEventListener('click', function () {
    let capt1 = Number(document.getElementById("p1").value);
    let capt2 = Number(document.getElementById("p2").value);
    revDatos(capt1, capt2);
    let sumaD1 = capt1 * -1;
    let resultado = Math.abs(sumaD1 - capt2);
    mostrar(resultado);
})

function mostrar(x){
    document.querySelector("#resultado").value = x;
}
function mostrarIntercam(x,y){
    let capt1 = Number(document.getElementById("p1").value);
    let capt2 = Number(document.getElementById("p2").value);
    revDatos(capt1, capt2);
    document.querySelector("#p1").value = capt2;
    document.querySelector("#p2").value = capt1;
}