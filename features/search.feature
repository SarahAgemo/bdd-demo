Feature: Search Feature

    Scenario: Successful Search
        Given The user is on the search bar
        When The user enters an available search prompt
        Then The user should see the search results

    Scenario: Unsuccessful Search
        Given The user is on the search bar
        When The user enters an unavailable search prompt
        Then The user should see the unavailable search result message
 