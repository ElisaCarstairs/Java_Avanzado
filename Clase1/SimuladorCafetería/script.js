const tiempos = {
  Capuchino: 15000,
  Latte: 20000,
  Té: 10000,
  Chocolate: 25000,
  Frappe: 30000,
  Tequila: 40000,
  Agua: 5000,
  Sandwich: 10000,
  Empanada: 15000,
  Donut: 20000,
  Churros: 25000,
  Chapata: 45000
};

document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  const seleccionTemporal = document.getElementById("seleccion-temporal");
  const botonConfirmar = document.getElementById("confirmar");
  const pedidosContainer = document.getElementById("pedidos-container");
  const resultadoFinal = document.getElementById("resultado-final");


  let eleccion = "";

  menu.addEventListener("change", () => {
    eleccion = menu.value;
    if (eleccion) {
      seleccionTemporal.textContent = `Has elegido: ${eleccion}. Presiona Enviar pedido para confirmar.`;
      resultadoFinal.textContent = "";
    } else {
      seleccionTemporal.textContent = "Aún no has elegido";
    }
  });

  const botonEliminarTodos = document.getElementById("eliminar-todos");

botonEliminarTodos.addEventListener("click", () => {
  const pedidosListos = document.querySelectorAll(".pedido.ready");
  pedidosListos.forEach(pedido => pedido.remove());
});


  botonConfirmar.addEventListener("click", () => {
    if (!eleccion) {
      resultadoFinal.textContent = "❌ No has seleccionado nada aún.";
      return;
    }

    const tiempo = tiempos[eleccion] || 5000;

    const pedidoDiv = document.createElement("div");
    pedidoDiv.classList.add("pedido");
    pedidoDiv.textContent = `🛠️ Pedido: ${eleccion} en fabricación...`;

    pedidosContainer.appendChild(pedidoDiv);

    setTimeout(() => {
      pedidoDiv.textContent = `✅ Pedido: ${eleccion} listo. ¡Disfrútalo!`;
      pedidoDiv.classList.add("ready");
    }, tiempo);

    // Reiniciar selección
    menu.value = "";
    eleccion = "";
    seleccionTemporal.textContent = "Aún no has elegido";
  });
});
