const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ];
  
document.writeln("<h1>Lista de Meses\n</h1>");
  
  meses.forEach(mes => {
    document.writeln(`${mes} -`);
  });
