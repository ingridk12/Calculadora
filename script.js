let pantalla = ''; 
let primerOperador = null; 
let segundoOperador = null; 
let elegirOperacion = null;


/* imprime los numeros y operaciones eligidos por el usuario */
function appendNumber(number) {
    pantalla += number; updateDisplay();
}


/*selecciona la operacion elijada por el usuario */
function chooseOperation(operation) {
    if (pantalla === '') return; if (primerOperador === null) {
        primerOperador= parseFloat(pantalla);
    } else {
        segundoOperador = parseFloat(pantalla); calculate();
    }
    elegirOperacion = operation; 
    pantalla = '';
}



/* calcula la operacion seleccionada por el usuario */
function calculate() {
    if (primerOperador === null || pantalla === '') return; segundoOperador = parseFloat(pantalla); 
    let result; 
    switch (elegirOperacion) {
        case '+': 
        result = primerOperador + segundoOperador; break;
        case '-':
            result = primerOperador - segundoOperador; break;
        case '*':
            result = primerOperador * segundoOperador; break;
        case '/':
            result = primerOperador / segundoOperador; break;
        default:
            return;
    }
    pantalla = result;
     elegirOperacion = null; 
     primerOperador = result; 
     updateDisplay();
}

/* limpia la pantalla */
function clearDisplay() {
    pantalla = ''; 
    primerOperador = null; 
    segundoOperador = null; 
    elegirOperacion = null; 
    updateDisplay();
}


function updateDisplay() {
    document.getElementById('display').value = pantalla;
}


function exitCalculator() {
    alert('Hasta la próxima'); clearDisplay();
}
