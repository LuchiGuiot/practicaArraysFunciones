let num = parseInt(prompt("Ingrese un número:"));
if (!isNaN(num)) {
  document.writeln(`<h3>Tabla del ${num}</h3>`);
  for (let i = 1; i <= 10; i++) {
    document.writeln(`<p>${num} × ${i} = ${num * i}</p>`);
  }
} else {
  alert("Debe ingresar un número válido");
}