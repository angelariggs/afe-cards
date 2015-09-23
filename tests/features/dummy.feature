@api @drupal
Feature: Dummy test feature

  Background:
    Given I am logged in as a user with the "authenticated user" role

  Scenario: Hello World
    Given I am on the homepage
    Then I should see the text "Drupal"