//SetTimeout

// setTimeout(callback, delay);

const callback = saludar = () => {
    console.log("Hola");
}
const delay = 5000;
setTimeout(callback, delay);

//Saludos con estilo

const saludoFormal = (mensaje) => {
    return `Buenas tardes ${mensaje}`;
}

const saludoCasual = (mensaje) => {
    return `Que onda ${mensaje}`;
}

const saludarFn = (TipoSaludo, nombre) => {
    console.log(`Saludando a ${nombre} con tipo de saludo ${TipoSaludo.name}`);
    return TipoSaludo(nombre);
}

console.log(saludarFn(saludoFormal, "Fernando"));
console.log(saludarFn(saludoCasual, "Fernando"));
