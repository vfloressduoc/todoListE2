// cypress/support/commands.js

Cypress.Commands.add('createUser', (email, password) => {
    const newUser = { email, password };
    cy.request('POST', 'http://localhost:3000/users', newUser)
      .its('status')
      .should('eq', 201);
  });
  