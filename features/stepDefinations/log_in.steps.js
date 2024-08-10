

const { Given, When, Then } = require('@cucumber/cucumber');

// Steps for Successful Login

Given('The user is on the login page', function () {
    // TODO: Implement the login page actions
    console.log('The user is on the login page');
});

When('The user enters username "Sarah" and password "Sarah001"', function () {
    // TODO: Implement the login form submission with username "Sarah" and password "Sarah001"
    console.log('The user enters username "Sarah" and password "Sarah001"');
});

Then('The user should be redirected to the dashboard', function () {
    // TODO: Implement the expected dashboard page actions
    console.log('The user should be redirected to the dashboard');
});

// Steps for Unsuccessful Login

When('The user enters username "Sarah" and password "001"', function () {
    // TODO: Implement the login form submission with username "Sarah" and password "001"
    console.log('The user enters username "Sarah" and password "001"');
});

Then('The user should remain on the login page', function () {
    // TODO: Implement the expected actions when remaining on the login page
    console.log('The user should remain on the login page');
});

Then('An error message should be displayed', function () {
    // TODO: Implement the error message display actions
    console.log('An error message should be displayed');
});
