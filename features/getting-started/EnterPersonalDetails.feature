@sep10
Feature: Enter my Personal details

    As a customer, I should be able to enter my Personal details.

    #* AC1: Default field types and values should be as follows:
    #*          a. First Name: Text field is present.
    #*          b. Last Name: Text field is present.
    #*          c. Email Address: Text field is present and validates for email format.
    #*          d. Phone: The field allows numbers only.

    #* AC2: "How did you hear about us?" A standard dropdown list is present.


    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page

    @sep10-1 @smoke
    Scenario: Verify default field types and values are present
        Then user should see the First Name input field
        And user should see the Last Name input field
        And user should see the Email input field
        And user should see the Phone input field

    @sep10-2 @smoke
    Scenario: Verify correct phone number is displayed in blue color
        When user enters a valid phone number
        And user clicks on the next button
        Then user should see the phone number displayed in blue

    @sep10-3 @regression
    Scenario: Verify incorrect phone number is displayed in red color
        When user enters an invalid phone number
        And user clicks on the next button
        Then user should see the phone number displayed in red

    
    @sep10-4 @regression
    Scenario: Verify that How did you hear about us? A standard dropdown list is present.
        Then user should see How did you hear about us dropdown list is present
    