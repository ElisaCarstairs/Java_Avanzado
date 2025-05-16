const opciones = document.querySelectorAll(".opcion");

opciones.forEach(opcion => {
  opcion.addEventListener("click", () => {
    console.log("Elegiste:", opcion.textContent);
  });
});
