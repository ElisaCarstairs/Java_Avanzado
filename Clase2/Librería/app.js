const fs = require('fs');

// Simula la lectura asincrónica de un archivo JSON
const leerBiblioteca = (callback) => {
  console.log("Leyendo datos de la biblioteca...");

  setTimeout(() => {
    fs.readFile('./libros.json', 'utf8', (err, data) => {
      if (err) {
        console.error("Error al leer el archivo:", err);
        return;
      }

      const biblioteca = JSON.parse(data); // Convertimos texto a objeto
      callback(biblioteca);
    });
  }, 2000); // Simula el retraso
};

// Usamos la función
leerBiblioteca((datos) => {
  console.log("Datos recibidos:");
  console.log(datos);
});
