document.getElementById('suma').addEventListener('submit', function(event) {
    // Evitar el envío del formulario
    event.preventDefault();

    // Obtener los valores ingresados por el usuario
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);

    // Verificar si los valores ingresados son números válidos
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingresa números válidos en ambos campos.");
        return;
    }

    // Calcular la suma de los dos números
    var suma = num1 + num2;

    // Mostrar el resultado al usuario
    alert("La suma de " + num1 + " y " + num2 + " es: " + suma);
});