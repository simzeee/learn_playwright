import { test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("localhost:4200/");
  await page.getByText("Forms").click();
  await page.getByText("Form Layouts").click();
});

async function navigateToFormLayouts(page) {
  console.log("ran");
  await page.goto("http://localhost:4200/");
  await page.getByText("Forms").click();
  await page.getByText("Form Layouts").click();
}

test("User facing locators", async ({ page }) => {
  await page.getByRole("textbox", { name: "Email" }).first().click();
  await page.getByRole("button", { name: "Sign in" }).first().click();

  await page.getByLabel("Email").first().click();

  await page.getByPlaceholder("Jane Doe").click();
  await page.getByText("Using the Grid").click();

  // await page.waitForSelector('[title="IoT Dashboard"]', { state: "visible" });
  await page.getByTitle("IoT Dashboard").click();
  // need to go back to

  // the identifier from your source code-not user facing
  await navigateToFormLayouts(page);

  await page.getByTestId("SignIn").waitFor({ state: "visible" });
  await page.getByTestId("SignIn").click();
});

// child selectors

test("Using child selectors", async ({ page }) => {
  // space
  await page.locator('nb-card nb-radio :text-is("Option 1")').click();
  // chain locators
  await page
    .locator("nb-card")
    .locator("nb-radio")
    .locator(":text-is('Option 1')")
    .click();

  // combine regular locator with user-facing locator
  await page
    .locator("nb-card")
    .getByRole("button", { name: "Sign in" })
    .first()
    .click();

  // least preferable, nth-element
  await page.locator("nb-card").nth(3).getByRole("button").click();
});

// parent elements

test("selecting parent elements", async ({ page }) => {
  // this example will return one element
  await page
    .locator("nb-card", { hasText: "Using the Grid" })
    .getByRole("textbox", { name: "Email" })
    .click();

  await page
    .locator("nb-card", { has: page.locator("#inputEmail") })
    .getByRole("textbox", { name: "Email" })
    .click();

  await page
    .locator("nb-card")
    .filter({ hasText: "Basic Form" })
    .getByRole("textbox", { name: "Email" })
    .click();

  await page
    .locator("nb-card")
    .filter({ has: page.locator(".status-danger") })
    .getByRole("textbox", { name: "Password" })
    .click();

  // we want to find the email input field for a particular form

  await page
    .locator("nb-card")
    .filter({ has: page.locator("nb-checkbox") })
    .filter({ hasText: "sign-in" })
    .getByRole("textbox", { name: "Email" })
    .click();

  // xPath, but not recommended

  await page
    .locator(':text-is("Using the Grid")')
    .locator("..")
    .getByRole("textbox", { name: "Email" })
    .click();
});
