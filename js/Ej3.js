let contador = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < 50; i++) {
  let dado1 = Math.floor(Math.random() * 6) + 1;
  let dado2 = Math.floor(Math.random() * 6) + 1;
  let suma = dado1 + dado2;
  contador[suma]++;
}

document.writeln('<h2>Resultados de 50 lanzamientos de dados</h2>');
document.writeln('<table>');
document.writeln('<tr><th>Suma</th><th>Veces</th></tr>');

for (let suma = 2; suma <= 12; suma++) {
  document.writeln(`<tr><td>${suma}</td><td>${contador[suma]}</td></tr>`);
}

document.writeln('</table>');

console.log('Suma | Veces');
console.log('-----|------');
for (let suma = 2; suma <= 12; suma++) {
  console.log(`${suma}   | ${contador[suma]}`);
}