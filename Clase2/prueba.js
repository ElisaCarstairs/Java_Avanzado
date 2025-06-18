const fs = require('fs');

// Leer el archivo JSON
fs.readFile('datos.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }

  // Convertir el texto JSON a un objeto
  const persona = JSON.parse(data);
  console.log('Nombre:', persona.nombre);
  console.log('Edad:', persona.edad);
  console.log('País:', persona.pais);
});
