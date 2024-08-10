Feature: Logout Feature

    Scenario: Successful Logout
        Given The user is on any website page
        When The user presses the logout button and says yes
        Then The user should be redirected to the login page

    Scenario: Unsuccessful Logout
        Given The user is on any website page
        When The user presses the logout button and says no
        Then The user should remain on the same page
