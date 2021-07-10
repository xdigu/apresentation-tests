import { parseFullName, parseValueToUpperCase } from "../users";

describe("User tests", () => {
  it("should parse full name", () => {
    const user = {
      name: "Rodrigo",
      lastName: "Jorge",
    };

    const fullName = parseFullName(user.name, user.lastName);

    expect(fullName).toBe("Rodrigo Jorge");
  });

  it("should return name and last name in uppercase", () => {
    const user = {
      name: "Rodrigo",
      lastName: "Jorge",
    };

    const name = parseValueToUpperCase(user.name);
    const lastName = parseValueToUpperCase(user.lastName);

    expect(name).toBe("RODRIGO");
    expect(lastName).toBe("JORGE");
  });
});
