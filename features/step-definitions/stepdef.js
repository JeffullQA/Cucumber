const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function DisplayScore(file) {
    
}

Given('I want to display the score of a client', function () {
    // Write code here that turns the phrase above into concrete actions
    this.file = 'score'
  });

When('I click on the client file', function () {
    // Write code here that turns the phrase above into concrete actions
    this.clickFile = DisplayScore(this.file);
  });

Then('the score is displayed', function (expectedAnswer) {
    // Write code here that turns the phrase above into concrete actions
    assert.equal(this.clickFile, expectedAnswer);
  });
