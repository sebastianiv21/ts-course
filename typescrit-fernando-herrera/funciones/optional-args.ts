(() => {
  const fullName = (
    firstName: string,
    lastName?: string | boolean,
    upper: boolean = false,
  ): string => {
    if (upper) return `${firstName} ${lastName}`.toUpperCase();
    else return `${firstName} ${lastName}`;
  };

  const name = fullName("Clark");

  console.log({ name });
})();
