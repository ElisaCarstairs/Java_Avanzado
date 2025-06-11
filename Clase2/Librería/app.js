const fs = require('fs');

const RUTA_ARCHIVO = './libros.json';

// Función para leer la biblioteca
const leerBiblioteca = (callback) => {
  console.log("Leyendo datos de la biblioteca...");

  setTimeout(() => {
    fs.readFile(RUTA_ARCHIVO, 'utf8', (err, data) => {
      if (err) {
        console.error("Error al leer el archivo:", err);
        return;
      }

      const biblioteca = JSON.parse(data);
      callback(biblioteca);
    });
  }, 2000);
};

// Función para guardar la biblioteca modificada
const guardarBiblioteca = (biblioteca, callback) => {
  fs.writeFile(RUTA_ARCHIVO, JSON.stringify(biblioteca, null, 2), 'utf8', (err) => {
    if (err) {
      console.error("Error al guardar el archivo:", err);
      return;
    }
    console.log("Archivo actualizado correctamente.");
    if (callback) callback();
  });
};

// Función para agregar un nuevo libro
function agregarLibro(Titulo, Autor, Genero, disponible) {
  leerBiblioteca((biblioteca) => {
    const nuevoLibro = { Titulo: Titulo, Autor: Autor, Genero: Genero, disponible };

    setTimeout(() => {
      biblioteca.Libros.push(nuevoLibro);
      guardarBiblioteca(biblioteca, () => {
        console.log(`Libro "${Titulo}" agregado exitosamente.`);
      });
    }, 1000);
  });
}

// Función para eliminar libros por título
function eliminarLibro(tituloAEliminar) {
  leerBiblioteca((biblioteca) => {
    setTimeout(() => {
      const cantidadAntes = biblioteca.Libros.length;
      biblioteca.Libros = biblioteca.Libros.filter(libro => libro.Titulo !== tituloAEliminar);
      const cantidadDespues = biblioteca.Libros.length;

      if (cantidadAntes === cantidadDespues) {
        console.log(`No se encontró ningún libro con el título "${tituloAEliminar}".`);
      } else {
        guardarBiblioteca(biblioteca, () => {
          console.log(`Se eliminaron ${cantidadAntes - cantidadDespues} libro(s) con el título "${tituloAEliminar}".`);
        });
      }
    }, 1000);
  });
}

// Ejemplo de uso
agregarLibro("Fundación e imperio","Isaac Asimov","Ciencia Ficción",true);
// eliminarLibro("El señor de los anillos");
function mostrarLibros() {
  leerBiblioteca((biblioteca) => {
    console.log("\n📚 Lista de libros actuales:\n");

    if (!biblioteca.Libros || biblioteca.Libros.length === 0) {
      console.log("No hay libros en la biblioteca.");
      return;
    }

    biblioteca.Libros.forEach((libro, index) => {
      console.log(`Libro ${index + 1}. "${libro.Titulo}" de ${libro.Autor} [${libro.Genero}] - Disponible: ${libro.disponible ? "Sí" : "No"}`);
    });

    console.log("\nTotal de libros:", biblioteca.Libros.length);
  });
}

mostrarLibros();