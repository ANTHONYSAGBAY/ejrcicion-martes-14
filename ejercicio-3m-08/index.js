'use strict';

let frase = "vida hay solo una.";
let cont = 0;

for (let i = 0; i < frase.length; i++) {
    if (frase[i] == ' ' || frase[i] == ".") {
        cont++;
    }
}

alert(`Esta frase tiene ${cont} `);
