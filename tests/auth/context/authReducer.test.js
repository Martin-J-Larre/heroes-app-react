import { authReducer } from "../../../src/auth";
import { types } from "../../../src/auth";

describe("Test on authReducer", () => {
  test("should return defaul state", () => {
    const state = authReducer({ logged: false }, {});

    expect(state).toEqual({ logged: false });
  });

  test("Login should authenticate and set user", () => {
    const action = {
      type: types.login,
      payload: {
        name: "Fulano",
        id: "AZS",
      },
    };

    const state = authReducer({ logged: false }, action);

    expect(state).toEqual({
      logged: true,
      user: action.payload,
    });
  });

  test("Logout should delete user and set logged to false", () => {
    const state = {
      logged: true,
      user: { id: "AQW", name: "Mengano" },
    };
    const action = {
      type: types.logout,
    };

    const newState = authReducer(state, action);

    expect(newState).toEqual({ logged: false });
  });
});
