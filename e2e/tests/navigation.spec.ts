import { test } from "@playwright/test";
import { IndexPage } from "../pages/index-page";
import { PerlinNoisePage } from "../pages/perlin-noise-page";

test.describe("Navigation", () => {
  const indexPage = new IndexPage();
  const perlinNoisePage = new PerlinNoisePage();

  test("can navigate from the index page to other pages and back again", async ({
    page,
  }) => {
    await indexPage.navigateToPage(page);
    await indexPage.expectTitle(page);

    // navigate to perlin noise demo
    await perlinNoisePage.navigateToPage(page);
    await perlinNoisePage.expectTitle(page);

    // navigate back to index page
    await indexPage.navigateToPage(page);
    await indexPage.expectTitle(page);
  });
});
