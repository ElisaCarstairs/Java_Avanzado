Instalación y Configuración de Vite
Para iniciar un proyecto con Vite, primero es necesario tener instalado Node.js en la computadora. Puedes verificar si lo tienes instalado ejecutando el siguiente comando en la terminal:

node -v


Si ya tienes Node.js instalado, puedes crear un nuevo proyecto con Vite ejecutando:

npm create vite@latest mi-proyecto **Van a salir varias opciones, solo dar enter dos veces

Después de ejecutar este comando, Vite te pedirá que selecciones un framework (como Vue o React) o simplemente una plantilla de Vanilla JavaScript si estás comenzando.

**Aquí se dan los dos enter

*Luego, ejecutar los siguientes comandos

cd mi-proyecto

npm install

npm run dev **Este último comando inicia el servidor de desarrollo de Vite y te proporciona una URL local para ver tu aplicación en el navegador.


  VITE v6.3.5  ready in 475 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help

Estructura de un Proyecto con Vite
Una vez creado el proyecto, Vite genera una estructura de archivos organizada. Los archivos principales incluyen:

index.html: El archivo HTML principal.
src/main.js o src/main.ts: Punto de entrada de la aplicación.
vite.config.js: Archivo de configuración de Vite.
Carpeta public/: Contiene recursos estáticos como imágenes y fuentes.
Aquí hay un pequeño ejemplo de un archivo main.js en un proyecto de Vite:

import './style.css';

document.getElementById('app').innerHTML = '<h1>Hola, Vite!</h1>';