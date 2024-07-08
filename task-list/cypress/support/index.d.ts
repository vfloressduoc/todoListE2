declare namespace Cypress {
    interface Chainable<Subject> {
      createUser(email: string, password: string): Chainable<any>;
    }
  }