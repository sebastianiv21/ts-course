(() => {
  const fullName = (firstName: string, ...restArgs: string[]): string => {
    return `${firstName} ${restArgs.join(" ")}`;
  };

  const name = fullName("Clark", "Kent", "Superman");

  let myFunction: () => string;
  let myNewFunction: (a: number, b: number) => number;

  console.log({ name });
})();
