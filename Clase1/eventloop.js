console.log ("a");

setTimeout (() => { // Asincrono, se ejecuta en paralelo
    console.log ("b");
}, 15000); // 15 milisegundos

console.log ("c");