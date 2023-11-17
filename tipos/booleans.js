"use strict";
// funcion anonima autoinvocada para evitar conflictos de nombres
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = false;
    console.log({ isSuperman, isBatman });
})();
