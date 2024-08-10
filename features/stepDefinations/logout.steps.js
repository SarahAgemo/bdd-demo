const { Given, When, Then } = require('@cucumber/cucumber');

// Steps for Successful Logout

Given('The user is on any website page', function () {
    // TODO: Implement the actions to ensure the user is on any website page
    console.log('The user is on any website page');
});

When('The user presses the logout button and says yes', function () {
    // TODO: Implement the actions to press the logout button and confirm logout
    console.log('The user presses the logout button and says yes');
});

Then('The user should be redirected to the login page', function () {
    // TODO: Implement the actions to redirect the user to the login page
    console.log('The user should be redirected to the login page');
});

// Steps for Unsuccessful Logout

When('The user presses the logout button and says no', function () {
    // TODO: Implement the actions to press the logout button and cancel logout
    console.log('The user presses the logout button and says no');
});

Then('The user should remain on the same page', function () {
    // TODO: Implement the actions to keep the user on the same page
    console.log('The user should remain on the same page');
});
