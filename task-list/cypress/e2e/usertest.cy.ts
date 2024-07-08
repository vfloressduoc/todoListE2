// cypress/e2e/usertest.cy.ts

import 'cypress/support/commands'

describe('User Signup and Login', () => {
    it('should sign up, create a new account, and log in successfully', () => {
      // Navigate to signup page and create a new user
      cy.visit('/signup'); // Adjust the URL to your signup page
  
      cy.fixture('user').then((user) => {
        cy.get('#signup-input-email').type(user.email); // Adjust to your signup email input ID
        cy.get('#signup-input-pass').type(user.password); // Adjust to your signup password input ID
        cy.get('#signup-btn-crear-cuenta').click(); // Adjust to your signup button ID
  
        // Wait for user creation and then proceed to login
        cy.wait(2000); // Adjust wait time as necessary for user creation
  
        // Proceed to login with the newly created user
        cy.visit('/login'); // Adjust the URL to your login page
  
        cy.get('#login-input-email').type(user.email); // Adjust to your login email input ID
        cy.get('#login-input-pass').type(user.password); // Adjust to your login password input ID
        cy.get('#login-btn-iniciar-sesion').click(); // Adjust to your login button ID
  
        // Add assertions to verify successful login
        cy.url().should('include', '/todo'); // Adjust to the expected URL after login
        cy.contains('¡Bienvenid@!'); // Adjust to the expected welcome message
      });
    });
  });