// cypress/e2e/test.cy.ts

import 'cypress/support/commands';

describe('End-to-End Tests for Todo Application', () => {
  const email = 'testuser@example.com';
  const password = 'password123';

  before(() => {
    // Sign up and log in once before running tests
    cy.visit('/signup');
    cy.fixture('user').then((user) => {
      cy.get('#signup-input-email').type(user.email);
      cy.get('#signup-input-pass').type(user.password);
      cy.get('#signup-btn-crear-cuenta').click();

      cy.wait(2000); // Adjust wait time as necessary for user creation

      cy.visit('/login');
      cy.get('#login-input-email').type(user.email);
      cy.get('#login-input-pass').type(user.password);
      cy.get('#login-btn-iniciar-sesion').click();

      cy.url().should('include', '/todo'); // Verify logged in successfully
    });
  });

  it('should verify task creation and API interaction', () => {
    cy.intercept('POST', 'https://mockend.com/api/vfloressduoc/tasklist_api/todos').as('createTask');

    cy.visit('/todo');
    cy.get('#todo-add-task').click();
    cy.get('#taskName').type('Nueva Tarea');

    cy.get('#taskPriority').click(); // Open the ion-select dropdown
    cy.get('ion-select-option[value="normal"]').click(); // Select "normal" priority

    cy.get('#datetime').type('2024-07-07T10:00');
    cy.get('#addTaskButton').click();

    cy.wait('@createTask').then((interception) => {
      if (interception && interception.response) {
        expect(interception.response.statusCode).to.eq(201);
        expect(interception.response.body).to.have.property('name', 'Nueva Tarea');
      } else {
        throw new Error('POST request interception response is undefined');
      }
    });
  });

  it('should verify task editing and API interaction', () => {
    cy.intercept('PUT', 'https://mockend.com/api/vfloressduoc/tasklist_api/todos/*').as('editTask');

    cy.visit('/todo');
    cy.get('#todo-task-0').should('exist').find('#todo-edit-task-0').click();
    cy.get('#taskName').clear().type('Tarea Actualizada');

    cy.get('#taskPriority').click(); // Open the ion-select dropdown
    cy.get('ion-select-option[value="importante"]').click(); // Select "importante" priority

    cy.get('#taskDate').type('2024-07-07T12:00');
    cy.contains('Guardar Cambios').click();

    cy.wait('@editTask').then((interception) => {
      if (interception && interception.response) {
        expect(interception.response.statusCode).to.eq(200);
        expect(interception.response.body).to.have.property('name', 'Tarea Actualizada');
      } else {
        throw new Error('PUT request interception response is undefined');
      }
    });
  });

  it('should verify the functionality of other pages', () => {
    cy.visit('/week');
    cy.get('ion-content').should('be.visible'); // Verify weekly page is visible

    cy.visit('/archive');
    cy.get('ion-content').should('be.visible'); // Verify archive page is visible

    cy.visit('/memories');
    cy.get('.thumbnail-image').should('be.visible'); // Verify photos are visible

    // Add more tests for other pages as required
  });
});
