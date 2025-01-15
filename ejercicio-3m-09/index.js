'use strict';

let frase = "vida hay solo una.";
let numWord = 2;
let cont = 0;
let space = " ";
let start = 0;
let end = 0;

for (let i = 0; i < frase.length; i++) {
    if (frase[i] === space) {
        cont++;
    }
    if (cont === numWord - 1) {
        start = i + 1;
    }
}

if (cont === numWord) {
    end = i;
}

alert(frase.substring(start, end));
