import { StringUtils, getStringInfo, toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  describe.only('StringUtils tests', () => {
    let sut: StringUtils;

    beforeEach(() => {
      sut = new StringUtils();
      console.log('Setup')
    });

    afterEach(() => {
      // clearing mocks
      console.log('Teardown')
    });

    it('should return correct  uppercase', () =>{
      const actual = sut.toUpperCase('abc');

      expect(actual).toBe('ABC');
      console.log('Actual test')
    })
  })


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

  describe.only("ToUpperCase examples", () => {
    it.each([
      { input: "abc", expected: "ABC" },
      { input: "My-String", expected: "MY-STRING" },
      { input: "def", expected: "DEF" },
    ])("$input toUpperCase should be $expected", ({input, expected}) => {
        const sut = toUpperCase;
        const actual = sut(input);
        expect(actual).toBe(expected);
      });
  });

  describe('getStringInfo for arg "My-String" should', () => {
    const sut = getStringInfo;
    const expected = {
      lowerCase: "my-string",
      upperCase: "MY-STRING",
      characters: ["M", "y", "-", "S", "t", "r", "i", "n", "g"],
      length: 9,
      extraInfo: {},
    };

    // it's a bad practice to have this actual variable here
    // const actual = sut("My-String");

    it("return right length", () => {
      const actual = sut("My-String");
      expect(actual.characters).toHaveLength(expected.length);
    });

    it("return right lowercase", () => {
      const actual = sut("My-String");
      expect(actual.lowerCase).toBe(expected.lowerCase);
    });

    it("return right uppercase", () => {
      const actual = sut("My-String");
      expect(actual.upperCase).toBe(expected.upperCase);
    });

    it("return right characters", () => {
      const actual = sut("My-String");
      expect(actual.characters).toEqual(expected.characters);

      expect(actual.characters).toContain<string>("M");

      expect(actual.characters).toEqual(
        expect.arrayContaining(["S", "t", "r", "i", "n", "g", "M", "y", "-"]),
      );
    });

    it("return defined extra info", () => {
      const actual = sut("My-String");
      expect(actual.extraInfo).toBeDefined();
      // expect(actual.extraInfo).not.toBe(undefined);
      // expect(actual.extraInfo).not.toBeUndefined();
      // expect(actual.extraInfo).toBeTruthy();
    });

    it("return right extra info", () => {
      const actual = sut("My-String");
      expect(actual.extraInfo).toEqual(expected.extraInfo);
    });
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
