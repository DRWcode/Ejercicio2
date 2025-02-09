function calcularNotaFinal() {
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);

    // Validaciones
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        Swal.fire("Error", "Todos los campos son obligatorios", "error");
        return;
    }
    
    if (nota1 < 0 || nota1 > 30 || nota2 < 0 || nota2 > 30 || nota3 < 0 || nota3 > 40) {
        Swal.fire("Error", "Las notas deben estar dentro del rango permitido", "error");
        return;
    }

    // Cálculo de la nota final
    let notaFinal = nota1 + nota2 + nota3;
    let mensaje = "";

    if (notaFinal >= 0 && notaFinal <= 59) {
        mensaje = "Reprobado";
    } else if (notaFinal >= 60 && notaFinal <= 79) {
        mensaje = "Bueno";
    } else if (notaFinal >= 80 && notaFinal <= 89) {
        mensaje = "Muy Bueno";
    } else if (notaFinal >= 90 && notaFinal <= 100) {
        mensaje = "Sobresaliente";
    }

    // Mostrar resultado con SweetAlert2
    Swal.fire({
        title: "Resultado",
        text: `Tu nota final es: ${notaFinal} - ${mensaje}`,
        icon: "info"
    });
}

// Función para limpiar los campos del formulario
function limpiarCampos() {
    document.getElementById("notaForm").reset();
}
