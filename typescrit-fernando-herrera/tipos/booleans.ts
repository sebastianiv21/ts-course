// funcion anonima autoinvocada para evitar conflictos de nombres
(() => {
  let isSuperman: boolean = true;
  let isBatman: boolean = false;

  isSuperman = false;

  console.log({ isSuperman, isBatman });
})();
