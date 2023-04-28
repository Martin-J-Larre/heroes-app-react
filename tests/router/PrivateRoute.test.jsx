import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { PrivateRoute } from "../../src/router/PrivateRoute";

describe("Test on PrivateRoutes.jsx", () => {
  test("Should show children if it is authenticated", () => {
    Storage.prototype.setItem = jest.fn();

    const contexValue = {
      logged: true,
      user: {
        id: "ASQ",
        name: "Fulano",
      },
    };

    render(
      <AuthContext.Provider value={contexValue}>
        <MemoryRouter initialEntries={["/search?q=batman"]}>
          <PrivateRoute>
            <h1>Private Route</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Private Route")).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "lastPath",
      "/search?q=batman"
    );
    // screen.debug();
  });
});
