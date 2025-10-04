import { test } from "@playwright/test";
import { PerlinNoisePage } from "../pages/perlin-noise-page";

test.describe("Perlin noise page", () => {
  const perlinNoisePage = new PerlinNoisePage();

  test("has title", async ({ page }) => {
    await perlinNoisePage.navigateToPage(page);
    await perlinNoisePage.expectTitle(page);
  });
});
