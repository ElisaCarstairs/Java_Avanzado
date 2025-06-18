// Ejemplo de una promesa
let obtenerDatosDeUsuario = new Promise((resolve, reject) => {
  let exito = true; // Cambia esto para simular éxito o error

  if (exito) {
    resolve("Datos de usuario obtenidos correctamente.");
  } else {
    reject("Hubo un error al obtener los datos.");
  }
});

// Manejando el resultado de la promesa
obtenerDatosDeUsuario
  .then((resultado) => {
    console.log(resultado); // Si la promesa es cumplida
  })
  .catch((error) => {
    console.log(error); // Si la promesa es rechazada
  });