let ciudades = [];

while (true) {
    let ciudad = prompt("Ingrese el nombre de una ciudad (o haga clic en Cancelar para terminar):");
    
    if (ciudad === null || ciudad.trim() === "") {
        break;
    }
    
    ciudades.push(ciudad);
}

console.log("Arreglo generado:", ciudades);

console.log(`El arreglo de ciudades tiene ${ciudades.length} elementos`);

if (ciudades.length > 0) {
    console.log(`- Elemento primera posición: ${ciudades[0]}`);
    
    if (ciudades.length >= 3) {
        console.log(`- Elemento tercera posición: ${ciudades[2]}`);
    }
    
    console.log(`- Elemento última posición: ${ciudades[ciudades.length - 1]}`);
}

ciudades.push("París");
console.log("- Elemento añadido en última posición: París");

if (ciudades.length >= 2) {
    console.log(`- Elemento segunda posición: ${ciudades[1]}`);
}

if (ciudades.length >= 2) {
    ciudades[1] = "Barcelona";
}

document.writeln("<h2>Arreglo de ciudades</h2>");
document.writeln("<ul>");
ciudades.forEach(ciudad => {
    document.writeln(`<li>Elemento: ${ciudad}</li>`);
});
document.writeln("</ul>");