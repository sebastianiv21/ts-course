(() => {
  let avengers: number = 10;

  console.log(avengers);

  const villians: number = 10;

  if (villians > avengers) {
    console.log("Estamos salvados");
  } else {
    console.log("Estamos muertos");
  }

  avengers = Number("55");
})();
