function validarFormulario() {
    const ibanPart1 = document.getElementById("iban_part1").value;
    const ibanPart2 = document.getElementById("iban_part2").value;
    const numeroTarjeta = document.getElementById("numero_tarjeta").value;
    const cvv = document.getElementById("cvv").value;
    const mensajeError = document.getElementById("mensaje_error");

    if ((ibanPart1 !== "ES76" && ibanPart1 !== "ES78") || ibanPart2.length !== 20) {
        mensajeError.textContent = "IBAN inválido";
        return;
    }

    if (numeroTarjeta.length !== 16 || !/^\d+$/.test(numeroTarjeta)) {
        mensajeError.textContent = "Número de tarjeta incorrecto";
        return;
    }

    if (cvv.length !== 3 || !/^\d+$/.test(cvv)) {
        mensajeError.textContent = "CVV incorrecto";
        return;
    }
    mensajeError.textContent = "";

    document.getElementById("cvv").value = "";
}

function deleteCVV() {
    const cvv =document.getElementById("cvv").value = "";
    
    if ((cvv !== "" ) ) {
        document.getElementById("cvv").value = "";
    }

}