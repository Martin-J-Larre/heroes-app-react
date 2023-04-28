import { types } from "../../../src/auth/types/types";

describe("Test on file types.js", () => {
  test("should return login and logout types", () => {
    // const { login, logout } = types;

    // expect(login).toBe("[Auth] Login");
    // expect(logout).toBe("[Auth] Logout");

    expect(types).toEqual({
      login: "[Auth] Login",
      logout: "[Auth] Logout",
    });
  });
});
