Feature: Display customer score
  
  Scenario: Display score
    Given I want to display the score of a client
    When I click on the client file
    Then the score is displayed
