const mesasDisponibles = 10; 

function verificarDisponibilidad(mesasSolicitadas) {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (mesasDisponibles >= mesasSolicitadas > 0) {
            resolve({
                mesasSolicitadas: mesasSolicitadas,
                mesasDisponibles: mesasDisponibles-mesasSolicitadas
            });
        } else {
            reject('Mesas No Disponibles, por favor intente otra cantidad de Mesas' );
        }
        }, 2000);  // Simula un retraso en la verificación (2 segundos)
  });
}


function verificar() {
    const inputTexto = document.getElementById("inputArray").value.trim();
    const mesas = parseInt(inputTexto);

    const resultado = document.getElementById("mesasSolicitadas");

    if (isNaN(mesas)) {
        resultado.innerText = "Error: Ingresa un número válido.";
        return;
    }
    resultado.innerText = "Verificando disponibilidad...";
    verificarDisponibilidad(mesas)
        .then((res) => {
            resultado.innerText = `Mesas Solicitadas: ${res.mesasSolicitadas}, Nuevas Mesas Disponibles: ${res.mesasDisponibles}`;
        })
        .catch((error) => {
            resultado.innerText = error;
        });
}

function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const exito = Math.random() < 0.7;
            if (exito) {
                resolve(`Correo de confirmación enviado a ${nombreCliente}`);
            } else {
                reject(`Error al enviar el correo a ${nombreCliente}. Intenta nuevamente.`);
            }
    }, 1500);  // Simula el envío de un correo (1.5 segundos)
  });
}
function verificarNombre() {
    const informacionReserva = document.getElementById("datoCliente").value.trim();
    const nombreCliente = informacionReserva;

    const resultadoNombre = document.getElementById("mesasSolicitadas");

    if (!nombreCliente) {
        resultadoNombre.innerText = "Error: Ingrese su Nombre.";
        return;
    }
    resultadoNombre.innerText = "Validando nombre...";
    enviarConfirmacionReserva(nombreCliente)
        .then((res) => {
            resultadoNombre.innerText = resultadoNombre.innerText = res;
        })
        .catch((error) => {
            resultadoNombre.innerText = error;
        });
}