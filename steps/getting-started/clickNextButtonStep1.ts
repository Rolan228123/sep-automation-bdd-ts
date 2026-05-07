import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup";
import { productInfo } from "../../utilities/qa-data-reader";
import { fa, faker } from "@faker-js/faker";

Then("user sees step circle on start application is blue", async function () {
  await expect(startApplicationPage.startApplicationStepCircle).toHaveCSS("background-color","rgb(1, 201, 255)");
});

When("user fills in only the required fields with valid information",async function () {
    await startApplicationPage.firstNameInputBox.fill(faker.person.firstName());
    await startApplicationPage.lastNameInputBox.fill(faker.person.lastName());
    await startApplicationPage.emailInputBox.fill(faker.internet.email());
    await startApplicationPage.phoneNumberInputBox.fill(faker.string.numeric(10));
  });

  Then("user sees step circle on payment plan is blue", async function () {
    await expect(startApplicationPage.paymentPlanStepCircle).toHaveCSS("background-color","rgb(1, 201, 255)");
  });
