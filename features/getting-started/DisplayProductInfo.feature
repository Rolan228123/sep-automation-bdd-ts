@sep09
Feature: Display the product information

    As a customer, I should be able to see the product information.

    #* AC1: The product name should be displayed on the information card.
    #* AC2: The product name on the information card matches the product name on the left side of the screen.
    #* AC3: The price of the product should be displayed.
    #* AC4: The text indicating a flexible payment plan should be available and displayed.
    #* AC5: The program start date should be displayed.
    #* AC6: The return policy and the final date for returns should be displayed.


    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page

    @sep09-1 @regression
    Scenario: Verify that the system displays the product information
        Then user sees product name that displayed on the information card
        And user sees product name on the information card matches the product name on the left side of the screen
        And user sees the price of the product should be displayed
        And user sees the text indicating a flexible payment plan should be available and displayed
        And user sees the program start date should be displayed
        And user sees the return policy and the final date for returns should be displayed.

