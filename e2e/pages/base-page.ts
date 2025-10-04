import { expect, Page, test } from "@playwright/test";
import { getByRole } from "@testing-library/dom";

export class BasePage {
  public baseUrl = "http://localhost:3000/";
  public url = "";
  public title = "";
  public navigationLink = "";

  navigateToPage(page: Page) {
    return test.step("Navigate to page", async () => await page.goto(this.url));
  }

  expectTitle(page: Page) {
    return test.step("Correct title is present", async () => {
      await expect(
        page.getByRole("heading", { name: this.title }),
      ).toBeVisible();
    });
  }

  navigateTo(page: Page) {
    return test.step("Navigate to page", async () =>
      await expect(
        page.getByRole("link", { name: this.navigationLink }),
      ).toBeVisible());
  }
}
