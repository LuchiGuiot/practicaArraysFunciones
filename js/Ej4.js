function esParOImpar(numero) {
    if (numero % 2 === 0) {
      return "El número " + numero + " es par.";
    } else {
      return "El número " + numero + " es impar.";
    }
  }
  
let numeroUsuario = parseInt(prompt("Ingrese un número entero:"));

document.writeln("<p>" + esParOImpar(numeroUsuario) + "</p>");