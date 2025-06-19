const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Previene el envío automático del formulario
  const name = document.getElementById('name').value;
  const lastname = document.getElementById('lastname').value;
  const email = document.getElementById('email').value;
  const telefono = document.getElementById('telefono').value;
  const intereses = document.querySelectorAll('input[name="intereses"]:checked');
  const horario = document.querySelector('input[name="horario"]:checked');

  if (!email.includes('@')) {
    alert('Por favor, introduce un correo electrónico válido.');
    return;
  }
  if (telefono.length !== 10) {
    alert('Por favor, introduce un teléfono de 10 dígitos.');
    return;
  }
  if (horario === null) {
    alert('Por favor, selecciona un horario.');
    return;
  }
  if (name.trim() === '') {
  alert('Por favor, ingrese su Nombre.');
  return;
}

  
  const salida = document.getElementById('salida');

    salida.innerHTML = `
    <strong>Datos capturados:</strong><br>
    Nombre: ${name}<br>
    Apellido: ${lastname}<br>
    Correo: ${email}<br>
    Teléfono: ${telefono}<br>
    Intereses: ${Array.from(intereses).map(i => i.value).join(", ")}<br>
    Horario: ${horario.value}
`;
    alert(`${name}, ha sido registrado correctamente.`);
    form.reset();
});
