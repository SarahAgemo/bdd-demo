Feature: Add to Cart Feature

    Scenario: Successfully add to cart
        Given The user is on the catalog page
        When The user enters valid variation
        Then The user should be redirected to the view cart and checkout

    Scenario: Unsuccessfully add to cart
        Given The user is on the catalog page
        When The user enters invalid variation
        Then The user should remain on the catalog page

