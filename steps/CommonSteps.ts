import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {
  startApplicationPage,
  leftMainPage,
  paymentPlanPage,
  reviewPaymentPage,
  page,
} from "../globalPagesSetup";
import {fa, faker} from "@faker-js/faker";


Given('user is on the enrollment page', async function () {
    await startApplicationPage.login();
});

When("user fills in all the fields with valid information",async function () {
  await startApplicationPage.firstNameInputBox.fill(faker.person.firstName());
  await startApplicationPage.lastNameInputBox.fill(faker.person.lastName());
  await startApplicationPage.emailInputBox.fill(faker.internet.email());
  await startApplicationPage.phoneNumberInputBox.fill(faker.string.numeric(10));
  await startApplicationPage.selectHowDidYouHearAboutUs("Google");
});

When("user clicks on the next button", async function () {
  await startApplicationPage.nextButton.click();
});
