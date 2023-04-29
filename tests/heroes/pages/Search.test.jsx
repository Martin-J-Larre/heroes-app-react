import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Search } from "../../../src/heroes/pages/Search";

describe("Test on Search.jsx", () => {
  test("should show component with defaul values", () => {
    const { container } = render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    );

    // screen.debug();
    expect(container).toMatchSnapshot();
  });

  test("should show batman and the imput with queryString value", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <Search />
      </MemoryRouter>
    );

    const input = screen.getByRole("textbox");
    expect(input.value).toBe("batman");

    const img = screen.getByRole("img");
    expect(img.src).toContain("/heroes/dc-batman.jpg");

    const divDisplayNone = screen.getByLabelText("test-div");
    expect(divDisplayNone.style.display).toBe("none");

    // screen.debug();
  });
});
