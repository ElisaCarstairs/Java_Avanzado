//1. Función de render

const render = (usuario) => {
    console.log("-----------");
    console.log(`|   ${usuario.nombre}    |`);
    console.log("-----------");
    console.log(`|   ${usuario.edad}    |`);
    console.log("-----------");
    console.log(`|   ${usuario.pais}    |`);
    console.log("-----------");
}

/*Esta función recibe un dato (data) y lo imprime con un pequeño marco visual en consola.
Es como una simulación de un renderizado de datos,
algo que se podría hacer en una interfaz gráfica, pero aquí lo ves en texto
render("Hola");
// Muestra:
-----------
|   Hola    |
-----------



*/
// 2. Simulador de peticiones
const get = (link, callback) => {
    const respond = () => {
        console.log("Respondiendo a la petición...");
        return "data";
    }

    setTimeout(() => {
        let r = respond();
        callback(r);
    }, 2000);
}

/*
Esta función simula una petición HTTP (como a una API).
link: es la URL que en este ejemplo no se usa, pero en una situación real podría ser útil.
callback: es la función que se va a ejecutar cuando llegue la "respuesta".

¿Qué hace internamente?
Define una función interna respond que:
Imprime "Respondiendo a la petición....".
Retorna la palabra "data" como respuesta simulada.
Usa setTimeout para esperar 2 segundos, como si la red tardara en responder.
Llama a respond() y después ejecuta el callback, pasándole el resultado

*/


//3. Mandarlo a llamar

get("https://google.com", (resp) => {
    render(resp);
});


render ({
    nombre: "Ana",
    edad: 29,
    pais: "España"
})
/*
Llama a get, simulando una petición a Google.

Cuando responde (después de 2 segundos), renderiza la "respuesta" en consola.
*/