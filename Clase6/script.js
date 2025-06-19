const { z } = window.Zod;

// Definir esquema de validación con Zod
const infoSchema = z.object({
  name: z.string().min(3, 'El nombre debe tener al menos 3 caracteres.'),

  password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres.'),

  email: z.string().email('El correo electrónico no es válido.'),
});

const form = document.getElementById('Info');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('errors');


 document.getElementById("registerForm").addEventListener("submit", (event) => {
      event.preventDefault();
      
      // Capturamos los valores ingresados
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
      };

      try {
        // PISTA: Usa el método correcto de Zod para validar el esquema.
        infoSchema.parse(formData);
        alert("¡Registro exitoso!");
      } catch (error) {
        // PISTA: Muestra los mensajes de error en la página.
        document.getElementById("errors").textContent = error.errors.map(e => e.message).join(", ");
      }
    });