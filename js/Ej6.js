function calcularPerimetro(ladoA, ladoB) {
  return 2 * (ladoA + ladoB);
}

let ladoA = parseFloat(
  prompt("Ingrese la longitud del lado A del rectángulo:")
);
let ladoB = parseFloat(
  prompt("Ingrese la longitud del lado B del rectángulo:")
);

if (isNaN(ladoA) || isNaN(ladoB) || ladoA <= 0 || ladoB <= 0) {
  alert("Por favor ingrese valores numéricos válidos y mayores que cero");
} else {

  let perimetro = calcularPerimetro(ladoA, ladoB);

  document.writeln(`
      <h3>Resultado del cálculo</h3>
      <p>Lado A: ${ladoA}</p>
      <p>Lado B: ${ladoB}</p>
      <p>El perímetro del rectángulo es: <strong>${perimetro}</strong></p>
    `);
}
