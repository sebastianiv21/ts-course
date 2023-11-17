(() => {
  type Hero = {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  };

  let myCustomVariable: string | number | Hero = "Fernando";

  myCustomVariable = 20;

  console.log(typeof myCustomVariable);

  myCustomVariable = {
    name: "Clark Kent",
    age: 30,
    powers: ["Poder volar"],
  };
})();
