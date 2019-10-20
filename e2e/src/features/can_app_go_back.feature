Feature: Can The App Go Back?
  We Want to know that if the app is capable of goint to start

  Scenario: Home Page
    Given I am on the resuts page
    When I Click Back after the results
    Then I should see Empty Input box