import { test } from "@playwright/test";
import { IndexPage } from "../pages/index-page";

test.describe("Index page", () => {
  const indexPage = new IndexPage();

  test("has title", async ({ page }) => {
    await indexPage.navigateToPage(page);
    await indexPage.expectTitle(page);
  });
});
