'use strict';

let name = "sudamericano";
let cont = 0;

for (let i = 0; i < name.length; i++) {
    if (name[i] === 'a') {
        cont++;
    }
}

alert(`El número de 'a' es: ${cont}`);