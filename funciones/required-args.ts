(() => {
  const fullName = (firstName: string, lastName: string | boolean): string => {
    return `${firstName} ${lastName}`;
  };

  const name = fullName("Clark", "Kent");

  console.log({ name });
})();
