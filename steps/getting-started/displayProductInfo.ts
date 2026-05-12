import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage, leftMainPage, page } from "../../globalPagesSetup";
import { productInfo } from "../../utilities/qa-data-reader";
import { exitCode } from "node:process";

Then("user sees product name that displayed on the information card",async function () {
    const EXPECTED_PRODUCT_NAME = productInfo.productName;
    await expect(startApplicationPage.programNameOnInfoCard).toBeVisible();
    const ACTUAL_PRODUCT_NAME =await startApplicationPage.programNameOnInfoCard.innerText();
    expect(ACTUAL_PRODUCT_NAME).toBe(EXPECTED_PRODUCT_NAME);
    
});

Then("user sees product name on the information card matches the product name on the left side of the screen",async function () {
    const LEFT_SCREEN_PRODUCT_NAME = await leftMainPage.programName.innerText();
    await expect (await startApplicationPage.programNameOnInfoCard.innerText()).toBe(LEFT_SCREEN_PRODUCT_NAME);
});

Then("user sees the price of the product should be displayed",async function () {
    await expect(startApplicationPage.programPrice).toBeVisible();
});

Then("user sees the text indicating a flexible payment plan should be available and displayed",async function () {
     await expect(startApplicationPage.flexiblePaymentsPlanAvailableText).toBeVisible();
});

Then("user sees the program start date should be displayed",async function () {
    await expect(startApplicationPage.programStartDate).toBeVisible();
});

Then("user sees the return policy and the final date for returns should be displayed.",async function () {
    await expect(startApplicationPage.refundEndDate).toBeVisible();
});