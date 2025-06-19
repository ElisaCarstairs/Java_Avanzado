Ejercicio: Formulario de Pedido de Pizza con Validación en Zod
Caso de Uso
Imagina que tienes una pizzería en línea y necesitas un formulario para que los clientes puedan hacer pedidos personalizados. Los usuarios deben ingresar información válida para asegurarnos de que el pedido sea claro y sin errores.

Utilizaremos Zod para validar los siguientes datos:

Nombre del Cliente: Mínimo 3 caracteres.
Tamaño de la Pizza: Solo se permiten opciones válidas (Pequeña, Mediana o Grande).
Ingredientes Extras: Debe ser una lista de opciones predefinidas.
Cantidad: Debe ser un número entero entre 1 y 10.
Estructura del Proyecto
pizza-order-form/

├── index.html

├── script.js

├── styles.css
Paso 1: HTML - Formulario del Pedido
Crea un archivo llamado index.html con la estructura del formulario:

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pedido de Pizza</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Ordena tu Pizza 🍕</h1>
  <form id="pizzaForm">
    <input type="text" id="name" placeholder="Nombre" required />
    <label for="size">Tamaño:</label>
    <select id="size" required>
      <option value="">Selecciona un tamaño</option>
      <option value="pequeña">Pequeña</option>
      <option value="mediana">Mediana</option>
      <option value="grande">Grande</option>
    </select>
    <fieldset>
      <legend>Ingredientes Extras:</legend>
      <label><input type="checkbox" name="ingredients" value="pepperoni"> Pepperoni</label>
      <label><input type="checkbox" name="ingredients" value="champiñones"> Champiñones</label>
      <label><input type="checkbox" name="ingredients" value="aceitunas"> Aceitunas</label>
      <label><input type="checkbox" name="ingredients" value="extraQueso"> Extra Queso</label>
    </fieldset>
    <input type="number" id="quantity" placeholder="Cantidad" min="1" max="10" required />
    <button type="submit">Realizar Pedido</button>
  </form>
  <p id="errorMessage" class="error"></p>
  <script src="https://cdn.jsdelivr.net/npm/zod@3.21.4/lib/index.umd.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
Paso 2: JavaScript - Validación con Zod
Ahora crea el archivo script.js con la validación y la lógica del formulario:

// Importar Zod (ya está cargado desde CDN en el HTML)
const { z } = window.Zod;

// Definir esquema de validación con Zod
const pizzaSchema = z.object({
  name: z.string().min(3, 'El nombre debe tener al menos 3 caracteres.'),

  size: z.enum(
    ['pequeña', 'mediana', 'grande'],
    'Debes seleccionar un tamaño válido.'
  ),

  ingredients: z.array(z.string()).optional(),

  quantity: z
    .number()
    .int()
    .min(1, 'Debes pedir al menos 1 pizza.')
    .max(10, 'Máximo 10 pizzas por pedido.'),
});

// Seleccionar elementos del DOM
const form = document.getElementById('pizzaForm');
const nameInput = document.getElementById('name');
const sizeInput = document.getElementById('size');
const quantityInput = document.getElementById('quantity');
const errorMessage = document.getElementById('errorMessage');

// Manejar el envío del formulario

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Evitar recarga de página // Capturar ingredientes seleccionados

  const selectedIngredients = Array.from(
    document.querySelectorAll("input[name='ingredients']:checked")
  )
  .map((checkbox) => checkbox.value); // Capturar valores del formulario

  const formData = {
    name: nameInput.value.trim(),
    size: sizeInput.value,
    ingredients: selectedIngredients,
    quantity: Number(quantityInput.value),
  }; // Validar datos con Zod

  const result = pizzaSchema.safeParse(formData);

  if (!result.success) {
    // Mostrar errores

    errorMessage.textContent = result.error.issues
      .map((issue) => issue.message)
      .join(', ');
  } else {
    // Si todo es válido, mostrar mensaje de éxito
    alert(`Pedido confirmado 🎉\n${JSON.stringify(formData, null, 2)}`);
    form.reset()
    errorMessage.textContent = '';
  }
});
Paso 3: CSS - Estilos Básicos
Para hacer que el formulario se vea mejor, crea un archivo styles.css con los siguientes estilos:

body {
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 50px;
}

input, select, button {
  display: block;
  margin: 10px auto;
  padding: 10px;
  width: 250px;
}

fieldset {
  border: none;
  margin: 10px auto;
  width: 250px;
}

button {
  background-color: tomato;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: darkred;
}

.error {
  color: red;
  font-weight: bold;
}
Explicación Paso a Paso
Definir el esquema con Zod
name: Debe ser un string de al menos 3 caracteres.
size: Debe ser uno de los valores permitidos en el enum ("pequeña", "mediana", "grande").
ingredients: Es un array de strings y es opcional.
quantity: Debe ser un número entre 1 y 10.
Capturar valores del formulario
Se obtiene el valor de cada input y se convierte en el formato adecuado.
Los ingredientes seleccionados se obtienen como un array.
Validar con safeParse()
Si success: false, mostramos los errores en pantalla.
Si success: true, mostramos un mensaje con el pedido confirmado.
Manejo de errores
Se concatenan los mensajes de error y se muestran en la interfaz.
Cómo Ejecutar el Proyecto
Crea los archivos y guárdalos en una carpeta.
Abre index.html en un navegador.
Prueba ingresando datos incorrectos para ver cómo la validación funciona.
Intenta hacer un pedido válido y observa la confirmación del pedido.
🎯 Conclusión
Este ejemplo muestra cómo usar Zod en un formulario realista de pedido de pizza. Validamos texto, números, listas y opciones predefinidas. Puedes ampliarlo agregando más ingredientes o añadiendo un campo para comentarios del cliente. 🚀

¿Te gustaría agregar más validaciones, como restricciones en los ingredientes? 🍕😃