const { Given, When, Then } = require('@cucumber/cucumber');

// Steps for Successfully Add to Cart

Given('The user is on the catalog page', function () {
    // TODO: Implement the actions to ensure the user is on the catalog page
    console.log('The user is on the catalog page');
});

When('The user enters valid variation', function () {
    // TODO: Implement the actions to enter a valid variation
    console.log('The user enters valid variation');
});

Then('The user should be redirected to the view cart and checkout', function () {
    // TODO: Implement the actions to redirect the user to the view cart and checkout
    console.log('The user should be redirected to the view cart and checkout');
});

// Steps for Unsuccessfully Add to Cart

When('The user enters invalid variation', function () {
    // TODO: Implement the actions to enter an invalid variation
    console.log('The user enters invalid variation');
});

Then('The user should remain on the catalog page', function () {
    // TODO: Implement the actions to remain on the catalog page
    console.log('The user should remain on the catalog page');
});
