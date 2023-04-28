import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { PublicRoute } from "../../src/router/PublicRoute";
import { AuthContext } from "../../src/auth";

describe("Test on PublicRoute.jsx", () => {
  test("Should show children if it is not authenticated", () => {
    const contexValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={contexValue}>
        <PublicRoute>
          <h1>children</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );

    expect(screen.getByText("children")).toBeTruthy();
    // screen.debug();
  });

  test("should navigate to '/marvel' if it is authenticated", () => {
    const contexValue = {
      logged: true,
      user: {
        name: "Bochini",
        id: "AZX",
      },
    };

    render(
      <AuthContext.Provider value={contexValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route
              path="login"
              element={
                <PublicRoute>
                  <h1>Login Page</h1>
                </PublicRoute>
              }
            />
            <Route path="marvel" element={<h1>Marvel Page</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Marvel Page")).toBeTruthy();

    // screen.debug();
  });
});
