import "@testing-library/jest-dom";
import { TechStack } from "./TechStack";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("<TechStack/>", () => {
  test("displays default all state", () => {
    const { getByRole, getByText } = render(<TechStack />);

    const dropdown = getByRole("combobox");
    expect(dropdown).toBeInTheDocument();
    expect(dropdown).toHaveTextContent("All");

    // genAI
    expect(getByText("Ollama")).toBeInTheDocument();

    // Front end
    expect(getByText("React")).toBeInTheDocument();

    // backend
    expect(getByText("dotNet")).toBeInTheDocument();

    // languages
    expect(getByText("Python")).toBeInTheDocument();

    // Continuous integration
    expect(getByText("Datadog")).toBeInTheDocument();
  });

  test("can filter by 'GenAI'", async () => {
    const user = userEvent.setup();
    const { getByRole, getByText, queryByText } = render(<TechStack />);

    const dropdown = getByRole("combobox");
    expect(dropdown).toBeInTheDocument();
    expect(dropdown).toHaveTextContent("All");

    // click new option
    await user.click(dropdown);
    await user.selectOptions(getByRole("combobox"), "GenAI");

    // genAI
    expect(getByText("Ollama")).toBeInTheDocument();

    // Front end
    expect(queryByText("React")).not.toBeInTheDocument();

    // backend
    expect(queryByText("dotNet")).not.toBeInTheDocument();

    // languages
    expect(queryByText("Python")).not.toBeInTheDocument();

    // Continuous integration
    expect(queryByText("Datadog")).not.toBeInTheDocument();
  });

  test("can filter by 'Front end'", async () => {
    const user = userEvent.setup();
    const { getByRole, getByText, queryByText } = render(<TechStack />);

    const dropdown = getByRole("combobox");
    expect(dropdown).toBeInTheDocument();
    expect(dropdown).toHaveTextContent("All");

    // click new option
    await user.click(dropdown);
    await user.selectOptions(getByRole("combobox"), "Front end");

    // genAI
    expect(queryByText("Ollama")).not.toBeInTheDocument();

    // Front end
    expect(getByText("React")).toBeInTheDocument();

    // backend
    expect(queryByText("dotNet")).not.toBeInTheDocument();

    // languages
    expect(queryByText("Python")).not.toBeInTheDocument();

    // Continuous integration
    expect(queryByText("Datadog")).not.toBeInTheDocument();
  });

  test("can filter by 'Back end'", async () => {
    const user = userEvent.setup();
    const { getByRole, getByText, queryByText } = render(<TechStack />);

    const dropdown = getByRole("combobox");
    expect(dropdown).toBeInTheDocument();
    expect(dropdown).toHaveTextContent("All");

    // click new option
    await user.click(dropdown);
    await user.selectOptions(getByRole("combobox"), "Back end");

    // genAI
    expect(queryByText("Ollama")).not.toBeInTheDocument();

    // Front end
    expect(queryByText("React")).not.toBeInTheDocument();

    // backend
    expect(getByText("dotNet")).toBeInTheDocument();

    // languages
    expect(queryByText("Python")).not.toBeInTheDocument();

    // Continuous integration
    expect(queryByText("Datadog")).not.toBeInTheDocument();
  });

  test("can filter by 'Languages'", async () => {
    const user = userEvent.setup();
    const { getByRole, getByText, queryByText } = render(<TechStack />);

    const dropdown = getByRole("combobox");
    expect(dropdown).toBeInTheDocument();
    expect(dropdown).toHaveTextContent("All");

    // click new option
    await user.click(dropdown);
    await user.selectOptions(getByRole("combobox"), "Languages");

    // genAI
    expect(queryByText("Ollama")).not.toBeInTheDocument();

    // Front end
    expect(queryByText("React")).not.toBeInTheDocument();

    // backend
    expect(queryByText("dotNet")).not.toBeInTheDocument();

    // languages
    expect(getByText("Python")).toBeInTheDocument();

    // Continuous integration
    expect(queryByText("Datadog")).not.toBeInTheDocument();
  });

  test("can filter by 'Continuous integration'", async () => {
    const user = userEvent.setup();
    const { getByRole, getByText, queryByText } = render(<TechStack />);

    const dropdown = getByRole("combobox");
    expect(dropdown).toBeInTheDocument();
    expect(dropdown).toHaveTextContent("All");

    // click new option
    await user.click(dropdown);
    await user.selectOptions(getByRole("combobox"), "Continuous integration");

    // genAI
    expect(queryByText("Ollama")).not.toBeInTheDocument();

    // Front end
    expect(queryByText("React")).not.toBeInTheDocument();

    // backend
    expect(queryByText("dotNet")).not.toBeInTheDocument();

    // languages
    expect(queryByText("Python")).not.toBeInTheDocument();

    // Continuous integration
    expect(getByText("Datadog")).toBeInTheDocument();
  });
});
