const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Previene el envío automático del formulario
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const telefono = document.getElementById('telefono').value;
  

  if (!email.includes('@')) {
    alert('Por favor, introduce un correo electrónico válido.');
    return;
  }
  if (telefono.length !== 10) {
    alert('Por favor, introduce un teléfono de 10 dígitos.');
    return;
  }
  console.log(`Nombre: ${name}, Correo: ${email}, Teléfono: ${telefono}`);
  
});