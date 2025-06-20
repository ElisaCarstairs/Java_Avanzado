const planetas = require('./planetas');
// Aquí mostraremos la información de los planetas

planetas.forEach(planeta => {
  console.log(`¡El planeta ${planeta.nombre}`);
  console.log(`se ha apodado como ${planeta.apodo}!`);
  console.log('---');
});