import { getStringInfo, toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  // can use test() as well
  it("should return uppercase of valid string", () => {
    // AAA principles
    // Arrange: setup the world
    const sut = toUpperCase; // sut = system under test (convention)
    const expected = "ABC";

    // Act: execute the code you want to test
    const actual = sut("abc");

    // Assert: check that the result is what you expected
    expect(actual).toBe(expected);
  });

  // can use it.only to run only this test
  it("should return info for valid string", () => {
    const sut = getStringInfo;
    const expected = {
      lowerCase: "my-string",
      upperCase: "MY-STRING",
      characters: ["M", "y", "-", "S", "t", "r", "i", "n", "g"],
      length: 9,
      extraInfo: {},
    };

    const actual = sut("My-String");

    // toBe is a shallow equality check, for primitives
    expect(actual.lowerCase).toBe(expected.lowerCase);
    // toEqual is a deep equality check, for objects and arrays
    expect(actual.extraInfo).toEqual(expected.extraInfo);

    expect(actual.characters).toHaveLength(expected.length);

    expect(actual.characters).toEqual(expected.characters);

    expect(actual.characters).toContain<string>("M");

    expect(actual.characters).toEqual(
      expect.arrayContaining(["S", "t", "r", "i", "n", "g", "M", "y", "-"]),
    );

    expect(actual.extraInfo).not.toBe(undefined);
    expect(actual.extraInfo).not.toBeUndefined();
    expect(actual.extraInfo).toBeDefined();
    expect(actual.extraInfo).toBeTruthy();
  });
});
