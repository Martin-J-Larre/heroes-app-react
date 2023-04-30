import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { Search } from "../../../src/heroes/pages/Search";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("Test on Search.jsx", () => {
  beforeEach(() => jest.clearAllMocks());

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

  test("should show error if can not find hero", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=bartmann"]}>
        <Search />
      </MemoryRouter>
    );

    const divDisplayNone = screen.getByLabelText("test-div");
    expect(divDisplayNone.style.display).toBe("");

    // screen.debug();
  });

  test("should call navigate to new page", () => {
    render(
      <MemoryRouter initialEntries={["/search"]}>
        <Search />
      </MemoryRouter>
    );

    const input = screen.getByRole("textbox");
    fireEvent.change(input, {
      target: { name: "searchText", value: "superman" },
    });

    const form = screen.getByRole("form");
    fireEvent.submit(form);

    expect(mockedUseNavigate).toHaveBeenCalledWith("?q=superman");
  });
});
