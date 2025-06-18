// Función que simula un proceso de registro
function registrarUsuario(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (nombre) {
        resolve(`Usuario ${nombre} registrado correctamente.`);
      } else {
        reject("El nombre de usuario es obligatorio.");
      }
    }, 1000);  // Retraso de 1 segundo
  });
}

// Función que simula enviar un correo de bienvenida
function enviarCorreoBienvenida(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Correo de bienvenida enviado a ${nombre}.`);
    }, 1500);  // Retraso de 1.5 segundos
  });
}

// Encadenamiento de promesas
registrarUsuario("Juan")
  .then(result => {
    console.log(result);  // "Usuario Juan registrado correctamente."
    return enviarCorreoBienvenida("Juan");  // Encadenamos la siguiente promesa
  })
  .then(result => {
    console.log(result);  // "Correo de bienvenida enviado a Juan."
  })
  .catch(error => {
    console.error(error);  // En caso de error en alguna de las promesas
  });