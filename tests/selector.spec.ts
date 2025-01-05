import { test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("localhost:4200/");
  await page.getByText("Forms").click();
  await page.getByText("Form Layouts").click();
});

test("Locator syntax rules", async ({ page }) => {
  // by Tag Name
  // will return all input elements
  page.locator("input");

  // by id
  page.locator("#inputEmail1");

  // by class
  page.locator(".shape-rectangle");

  // by attribute
  page.locator('[placeholder="Email"]');

  // by entire class value
  page.locator("[label col-sm-3 col-form-label]");

  //combine different selectors
  page.locator('input[placeholder="Email"][nbinput]');

  //by XPath not recommended
  page.locator("");

  // partial text match
  page.locator(':text("Using")');

  // by exact text match
  page.locator(":text-is('Using the Grid')");
});
