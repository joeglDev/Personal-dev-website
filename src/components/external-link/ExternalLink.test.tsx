import "@testing-library/jest-dom";
import { ExternalLink } from "./ExternalLink";
import { render } from "@testing-library/react";
import styles from "./ExternalLink.module.css";
import userEvent from "@testing-library/user-event";

describe("ExternalLink", () => {
  const baseProps = {
    href: "https://example.com",
    prefetch: false,
    children: <div data-testid="child">test</div>,
  };

  it("displays the ExternalLink element with children", () => {
    const { getByText, container } = render(<ExternalLink {...baseProps} />);
    expect(getByText("test")).toBeInTheDocument();

    const link = container.querySelector("a");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://example.com");
  });

  it("sets the className when clicked", async () => {
    const user = userEvent.setup();
    const { rerender, container } = render(<ExternalLink {...baseProps} />);

    const link = container.querySelector("a");
    expect(link).toHaveClass(styles.externalLink);

    if (link === null) {
      throw new Error(`External link was not found`);
    }

    await user.click(link);

    rerender(<ExternalLink {...baseProps} />); // Re-rendering the component to reflect the state change
    expect(container.querySelector("a")).toHaveClass(
      styles.externalLinkClicked,
    );
  });
});
