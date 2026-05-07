import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup";
import { productInfo } from "../../utilities/qa-data-reader";
import { faker } from "@faker-js/faker";

Then("user should see the First Name input field", async function () {
    await expect(startApplicationPage.firstNameInputBox).toBeVisible();
  await expect(startApplicationPage.firstNameInputBox).toBeEditable();
});

Then("user should see the Last Name input field", async function () {
    await expect(startApplicationPage.lastNameInputBox).toBeVisible();
    await expect(startApplicationPage.lastNameInputBox).toBeEditable();
});

Then("user should see the Email input field", async function () {
    await expect(startApplicationPage.emailInputBox).toBeVisible();
    await expect(startApplicationPage.emailInputBox).toBeEditable();
});

Then("user should see the Phone input field", async function () {
    await expect(startApplicationPage.phoneNumberInputBox).toBeVisible();
    await expect(startApplicationPage.phoneNumberInputBox).toBeEditable();
});

When("user enters an invalid phone number", async function () {
    startApplicationPage.phoneNumberInputBox.fill("123fghh331");
});

Then("user should see the phone number displayed in red", async function () {
    await expect(startApplicationPage.phone_Color).toHaveCSS("caret-color","rgb(255, 0, 0)",);
});

When("user enters a valid phone number", async function () {
    startApplicationPage.phoneNumberInputBox.fill(faker.string.numeric(10));
});

Then("user should see the phone number displayed in blue", async function () {
    await expect(startApplicationPage.phone_Color).toHaveCSS("caret-color","rgb(1, 201, 255)",);
});

Then("user should see How did you hear about us dropdown list is present",async function () {
    await expect(startApplicationPage.howDidYouHearAboutUsDropDown,).toBeVisible();}
);
