Feature: Login Feature
    Scenario: Successful Login
        Given The user is on the login page
        When The user enters username "Sarah" and password "Sarah001"
        Then The user should be redirected to the dashboard
 
    Scenario: Unsuccessful Login
        Given The user is on the login page
        When The user enters username "Sarah" and password "001"
        Then The user should remain on the login page 
