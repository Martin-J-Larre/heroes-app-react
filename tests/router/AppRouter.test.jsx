import { render, screen } from "@testing-library/react";
import { AppRouter } from "../../src/router/AppRouter";
import { AuthContext } from "../../src/auth";
import { MemoryRouter } from "react-router-dom";

describe("Test on AppRouter.jsx", () => {
  test("should show Login page if it is not authenticated", () => {
    const contextValue = {
      logged: false,
    };

    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    // screen.debug();

    expect(screen.getAllByText("Login").length).toBe(2);
  });

  test("should show Marvel page if it is authenticated", () => {
    const contextValue = {
      logged: true,
      user: {
        id: "AZX",
        name: "Joey",
      },
    };

    render(
      <MemoryRouter initialEntries={["/login"]}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    screen.debug();

    expect(screen.getAllByText("Marvel").length).toBeGreaterThanOrEqual(1);
  });
});
