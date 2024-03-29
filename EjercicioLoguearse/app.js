
//OBJETO PERSONA

class Persona {

    constructor(Nombre, primerApellido, segundoApellido, dni, fechaNacimiento) {
        this.Nombre = Nombre
        this.primerApellido = primerApellido
        this.segundoApellido = segundoApellido
        this.dni = dni
        this.fechaNacimiento = fechaNacimiento
    }
}

//FUNCIONES DE VALIDACION

function validlength(name, lengthmax, lengthmin) {
    var length = ''
    if (name.length < lengthmin && lengthmin != 0) {
        length = 'debe tener mas de ' + lengthmin + ' caracteres'
    }
    if (name.length > lengthmax && lengthmax != 0) {
        length = 'debe tener menos de ' + lengthmax + ' caracteres'

    }
    return length
}

function validAtSign(name) {
    var validAtSign = "Asegurese de que en el campo mail existe el caracter '@'"
    for (let i = 0; i < name.length; i++) {
        if (name[i] == '@' && i > 0 && i < name.length - 3) {
            validAtSign = ""
        } else if (name[i] == '@') { 
            validAtSign = "Debe haber un solo '@' en el mail y su posicion no puede ser la " + (i+1) + "º" 
        }
    }
    return validAtSign
}

function validationDate(date) {
    const formatoFechaRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    var fechaValida = ''
    if (formatoFechaRegex.test(date)) {
    } else {
        fechaValida = "El formato de fecha no es valido. El formato de fecha es dd/mm/yyyy"
    }
    return fechaValida
}
function validationDNI(dni) {
    var DNIValido = ''
    var dniRegex = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/;
    if (!dniRegex.test(dni)) {
        DNIValido = "El DNI escrito no existe";
    }
    var numeroDNI = dni.substring(0, 8);
    var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    var letraEsperada = letras[numeroDNI % 23];
    var letraDNI = dni.charAt(8);
    if (letraDNI.toUpperCase() !== letraEsperada) {
        DNIValido = "El DNI escrito no existe";
    }
    return DNIValido;
}

function checkUser(mail, password, savedMail, savedPassword) {
    var check = ''
    if (mail != savedMail) {
        check = check = "Usuario o contraseña incorrecto"
    } if (password != savedPassword) {
        check = check = "Usuario o contraseña incorrecto"
    }
    return check
}

//FUNCIONES DE USO

function compareLogin() {

    var mail = document.getElementById('mail').value
    var password = document.getElementById('password').value
    var alertError =[]

    if (mail != '' && password != '') {

        if (checkUser(mail, password, "javier@pepe.com", "pepepepe") !== "") { alertError.push(checkUser(mail, password, "javier@pepe.com", "pepepepe")) }
        if (validlength(password, 0, 8) !== "") { alertError.push("La contraseña " + validlength(password, 0, 8)) }
        if (validAtSign(mail) !== "") { alertError.push(validAtSign(mail)) }

        if (alertError[0] != undefined) {
            var alertError2 = alertError.join("\n");
            alert(alertError2)
        } else {
            window.location.replace("./Datos.html")
        }
    } else {
        alert("Debe rellenar todos los campos")
    }
}

function saveData() {
    const name = document.getElementById('Nombre').value
    const firstLastname = document.getElementById('PrimerApellido').value
    const secondLastname = document.getElementById('SegundoApellido').value
    const birthDate = document.getElementById('fechaNacimiento').value
    const dni = document.getElementById('DNI').value
    var alertError = []

    if (name != '' && firstLastname != '' && secondLastname != '' && birthDate != '' && dni != '') {

        if (validlength(name, 30, 3) !== "") { alertError.push("El nombre debe " + validlength(name, 30, 3)) }
        if (validlength(firstLastname, 30, 2) !== "") { alertError.push("El primer apellido debe tener " + validlength(firstLastname, 30, 2)) }
        if (validlength(secondLastname, 30, 2) !== "") { alertError.push("El segundo apellido debe tener " + validlength(secondLastname, 30, 2)) }
        if (validationDate(birthDate) !== "") { alertError.push(validationDate(birthDate)) }
        if (validationDNI(dni) !== "") { alertError.push(validationDNI(dni)) }

        if (alertError.length != 0) {
            var alertError2 = alertError.join("\n");
            alert(alertError2)
        } else {
            alert("Usuario " + name + " guardado en nuestra base de datos")
            persona = new Persona(name, firstLastname, secondLastname, dni, birthDate)
        }
    } else {
        alert("Debe rellenar todos los campos")
    }
}

function resetValues() {
    window.location.replace("./Datos.html")

}


