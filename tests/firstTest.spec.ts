import { test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("localhost:4200/");
});

test.describe("suite 1", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText("Forms").click();
  });

  test("the first test", async ({ page }) => {
    // if the return type is a Promise, then you must await
    // If not...don't use await!
    await page.getByText("Form Layouts").click();
  });

  test("navigate to datepicker page", async ({ page }) => {
    await page.getByText("Datepicker").click();
  });
});

test.describe("suite 2", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText("Forms").click();
  });

  test("the first test_2", async ({ page }) => {
    await page.getByText("Form Layouts").click();
  });

  test("navigate to datepicker page_2", async ({ page }) => {
    await page.getByText("Datepicker").click();
  });
});
