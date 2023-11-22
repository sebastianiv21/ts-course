import {
  PasswordChecker,
  PasswordErrors,
} from "../../app/pass_checker/PasswordChecker";

describe("PasswordChecker test suite", () => {
  let sut: PasswordChecker;

  beforeEach(() => {
    sut = new PasswordChecker();
  });

  it("password with less than 8 chars is invalid", () => {
    const actual = sut.checkPassword("1234567");
    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.SHORT);
  });

  it("password with more than or equal to 8 chars is ok", () => {
    const actual = sut.checkPassword("12345678");
    expect(actual.valid).toBe(true);
    expect(actual.reasons).not.toContain(PasswordErrors.SHORT);
  });

  it("password with no upper case is invalid", () => {
    const actual = sut.checkPassword("1234abcd");
    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.NO_UPPER);
  });

  it("password with upper case is ok", () => {
    const actual = sut.checkPassword("1234abcd");
    expect(actual.valid).toBe(true);
    expect(actual.reasons).not.toContain(PasswordErrors.NO_UPPER);
  });

  it("password with no lower case is invalid", () => {
    const actual = sut.checkPassword("1234abcd");
    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.NO_LOWER);
  });

  it("password with lower case is ok", () => {
    const actual = sut.checkPassword("1234abcd");
    expect(actual.valid).toBe(true);
    expect(actual.reasons).not.toContain(PasswordErrors.NO_LOWER);
  });

  it("complex password is valid", () => {
    const actual = sut.checkPassword("1234abcd");
    expect(actual.valid).toBe(true);
    expect(actual.reasons).toHaveLength(0);
  });

  it("admin password with no number is invalid", () => {
    const actual = sut.checkAdminPassword("1234abcd");
    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.NO_NUMBER);
  });

  it("admin password with number is ok", () => {
    const actual = sut.checkAdminPassword("1234abcd");
    expect(actual.valid).toBe(true);
    expect(actual.reasons).not.toContain(PasswordErrors.NO_NUMBER);
  });
});
