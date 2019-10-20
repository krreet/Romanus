Feature: Can The App Function Properly?
  We Want to know that if the app working correctly 
 
  Scenario: Activate Button
    Given I am on the home page and i see a button
    When I click on Click to Activate
    Then I should see Empty Input box

  Scenario: Submit a valid input
    Given I am on the home page and i see a button
    When I enter some valid input and click on Button
    Then I should see the Result

  Scenario: Submit an invalid input
    Given I am on the home page and i see a button
    When I enter some invalid input and click on Button
    Then I should see the error in alert