import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Dropdown } from "./Dropdown";

const renderTest = () => {
  const mockSetValue = jest.fn();
  const defaultProps = {
    name: "test-dropdown",
    defaultValue: "option1",
    setValue: mockSetValue,
    options: ["option1", "option2", "option3"],
  };

  return {
    ...render(<Dropdown {...defaultProps} />),
    mockSetValue,
    defaultProps,
  };
};

describe("Dropdown", () => {
  afterEach(() => jest.clearAllMocks());

  test("renders all options", () => {
    const { getAllByRole, defaultProps } = renderTest();

    const options = getAllByRole("option");
    expect(options).toHaveLength(defaultProps.options.length);
    options.forEach((option, index) => {
      expect(option).toHaveValue(defaultProps.options[index]);
      expect(option).toHaveTextContent(defaultProps.options[index]);
    });
  });

  test("sets default value", () => {
    const { getByRole, defaultProps } = renderTest();

    const select = getByRole("combobox");
    expect(select).toHaveValue(defaultProps.defaultValue);
  });

  test("calls setValue on change", async () => {
    const user = userEvent.setup();
    const { getByRole, mockSetValue, getByText } = renderTest();

    expect(mockSetValue).not.toHaveBeenCalled();

    await user.click(getByRole("combobox"));

    expect(getByText("option2")).toBeInTheDocument();
    await user.selectOptions(getByRole("combobox"), "option2");

    expect(getByRole("combobox")).toHaveTextContent("option2");
    expect(mockSetValue).toHaveBeenCalledWith("option2");
  });

  test("renders with custom name", () => {
    const { getByRole, defaultProps } = renderTest();

    const select = getByRole("combobox");
    expect(select).toHaveAttribute("name", defaultProps.name);
  });
});
