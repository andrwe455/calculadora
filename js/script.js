function sumar() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const resultado = numero1 + numero2;
    document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
}

function restar() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const resultado = numero1 - numero2;
    const mensaje = `Se restará el número 1 con el número 2, si el número 1 es menor, el resultado será negativo`;
    document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
    alert(mensaje); // Mostrar un mensaje de explicación :3
  
}

function multiplicar() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const resultado = numero1 * numero2;
    document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
}

function division() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    if (numero2 === 0) {
        document.getElementById("resultado").textContent = "Resultado: ¡División por cero!";
    } else {
        const resultado = numero1 / numero2;
        const mensaje = `Se dividirá el número 1 con el número 2`;
        document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
        alert(mensaje);
    }
}

function potencia() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const resultado = Math.pow(numero1, numero2);
    document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
}

function modulo() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const resultado = numero1 % numero2;
    document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
}

function raiz() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const resultado = Math.pow(numero1, 1 / numero2); // Calcular la raíz en base al número 2
    const mensaje = `La raíz ${numero2}-ésima de ${numero1} es igual a ${resultado}`;
    document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
    alert(mensaje); // Mostrar un mensaje de explicación, profe ponganos 5 :v
}


function mayorMenor() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    if (numero1 > numero2) {
        document.getElementById("resultado").textContent = `${numero1} es mayor que ${numero2}`;
    } else if (numero1 < numero2) {
        document.getElementById("resultado").textContent = `${numero1} es menor que ${numero2}`;
    } else {
        document.getElementById("resultado").textContent = `${numero1} y ${numero2} son iguales`;
    }
}

function cambiarBase() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const nuevaBase = parseFloat(prompt("Ingrese la nueva base para el número 1:"));
    
    if (!isNaN(nuevaBase)) {
        const resultado = Math.pow(numero1, 1 / nuevaBase);
        const mensaje = `La raíz ${nuevaBase}-ésima de ${numero1} es igual a ${resultado}`;
        document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
        document.getElementById("numero2").value = nuevaBase; // Actualizar el número 2, este codigo es 100% real
        alert(mensaje);
    } else {
        alert("Ingrese una base válida.");
    }
}

function salir() {
    alert("Muchas gracias");
    window.close();
}
