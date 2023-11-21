(() => {
  // Interfaces complejas
  // se suele dejar la interfaz principal al principio
  interface Client {
    name: string;
    age: number;
    address: Address;
    // funciones en interfaces
    getFullAddress?(id: number): string;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: "Fernando",
    age: 25,
    address: {
      id: 123,
      zip: "123456",
      city: "Madrid",
    },
  };

  // interfaces para funciones
  // no es común, pero se puede hacer
  interface addTwoNumbers {
    (a: number, b: number): number;
  }

  const addTwoNumbers: addTwoNumbers = (a: number, b: number): number => {
    return a + b;
  };
})();
