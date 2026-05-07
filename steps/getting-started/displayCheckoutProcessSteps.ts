import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup";
import { productInfo } from "../../utilities/qa-data-reader";

Then("user sees the steps of the checkout process as {string}, {string}, and {string}",
    async function (start_Application, payment_Plan, review) {
        await expect (await startApplicationPage.startApplicationText.textContent()).toBe(start_Application);
        await expect (await startApplicationPage.paymentPlanText.textContent()).toBe(payment_Plan);
        await expect (await startApplicationPage.reviewText.textContent()).toBe(review);
    });

Then("user sees step circle on payment plan is grey", async function () {
    await expect(startApplicationPage.paymentPlanStepCircle).toHaveCSS("border-top-color", "rgb(217, 226, 236)")
});

Then("user sees step circle on review is grey", async function () {
    await expect(startApplicationPage.reviewStepCircle).toHaveCSS("border-top-color","rgb(217, 226, 236)")
});