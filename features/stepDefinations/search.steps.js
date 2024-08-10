const { Given, When, Then } = require('@cucumber/cucumber');

// Steps for Successful Search

Given('The user is on the search bar', function () {
    // TODO: Implement the actions to ensure the user is on the search bar
    console.log('The user is on the search bar');
});

When('The user enters an available search prompt', function () {
    // TODO: Implement the actions to enter an available search prompt
    console.log('The user enters an available search prompt');
});

Then('The user should see the search results', function () {
    // TODO: Implement the actions to display the search results
    console.log('The user should see the search results');
});

// Steps for Unsuccessful Search

When('The user enters an unavailable search prompt', function () {
    // TODO: Implement the actions to enter an unavailable search prompt
    console.log('The user enters an unavailable search prompt');
});

Then('The user should see the unavailable search result message', function () {
    // TODO: Implement the actions to display the unavailable search result message
    console.log('The user should see the unavailable search result message');
});
