// Función que simula una llamada a una API con éxito o error
function llamadaApi(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("Datos obtenidos con éxito de la API.");
      } else {
        reject("Error al obtener los datos de la API.");
      }
    }, 2000);  // Simulamos un retraso de 2 segundos
  });
}

// Uso de la promesa
llamadaApi(true)  // Simula una llamada exitosa
  .then(result => {
    console.log(result);  // "Datos obtenidos con éxito de la API."
  })
  .catch(error => {
    console.error(error);  // Este bloque no se ejecuta en este caso
  });

// Uso con error
llamadaApi(false)  // Simula una llamada fallida
  .then(result => {
    console.log(result);  // Este bloque no se ejecuta en este caso
  })
  .catch(error => {
    console.error(error);  // "Error al obtener los datos de la API."
  });
  