import { test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("localhost:4200/");
  await page.getByText("Forms").click();
  await page.getByText("Form Layouts").click();
});

async function navigateToFormLayouts(page) {
  await page.goto("localhost:4200/");
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
