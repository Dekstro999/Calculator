const pantalla = document.getElementById("pantalla");
const historial = document.getElementById("historial"); // Agregamos referencia al elemento de historial
let num1 = 0;
let num2 = 0;
let operadorActual = "";

function agregar(valor) {
    pantalla.value += valor;
}

// Leer operador
function operador(op) {
    num1 = parseFloat(pantalla.value);
    operadorActual = op;

    historial.innerText += `${num1} ${operadorActual} `;
    pantalla.value = "";
}

// Calcular
function calcular() {
    num2 = parseFloat(pantalla.value);
    let resultado;

    switch (operadorActual) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                resultado = "Error, división por cero";
            }
            break;
        default:
            resultado = "";
            break;
    }

    pantalla.value = resultado;

    historial.innerText += `${num2} = ${resultado}\n`;

    num1 = 0;
    num2 = 0;
    operadorActual = "";
}

function limpiar() {
    pantalla.value = "";
    num1 = 0;
    num2 = 0;
    operadorActual = "";
    historial.innerText = ""; // Limpiar el historial cuando se presiona el botón C o back
}

document.addEventListener("keydown", function (event) {
    const key = event.key;

    if (!isNaN(key) || key === ".") {
        agregar(key);
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
        operador(key);
    } else if (key === "Enter") {
        calcular();
    } else if (key === "Backspace") {
        limpiar();
    }
});
