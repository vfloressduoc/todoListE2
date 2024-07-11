describe('PenguPlan E2E Test', () => {
    it('should navigate through PenguPlan', () => {
        // Visit the application and navigate to the home page
        cy.visit('http://localhost:8100/home');

        // Click to navigate to create an account
        cy.get('#login-btn-ir-a-crear-cuenta').click();

        // Wait for the email field to be visible and interactable
        cy.get('#ion-input-2').should('be.visible').clear().type('testuser@example.com');

        // Wait for the password field to be visible and interactable
        cy.get('#ion-input-3').should('be.visible').clear().type('password123');

        // Click the signup button
        cy.get('#signup-btn-crear-cuenta').click();

        // Wait for the login email field to be visible and interactable
        cy.get('#login-input-email > .input-wrapper > .native-wrapper').should('be.visible').click();
        cy.get('#ion-input-0').should('be.visible').clear().type('testuser@example.com');

        // Wait for the login password field to be visible and interactable
        cy.get('#ion-input-1').should('be.visible').clear().type('password123');

        // Click the login button
        cy.get('#login-btn-iniciar-sesion').click();

        // Wait for page transition and interactions to stabilize
        cy.wait(4000);

        // Click the alert button
        cy.get('.alert-button-inner').click();

        // Click to add a new task
        cy.get('#todo-add-task > .md').click();

        // Wait for the add task interface to fully load
        cy.wait(2000);

        // Enter text in the textarea
        cy.get('#ion-textarea-0').click().type('Esta es una tarea');

        // Wait for the input to stabilize
        cy.wait(1000);

        // Click on the task priority dropdown menu
        cy.get('#taskPriority').click();

        // Wait for the dropdown menu to fully open
        cy.wait(1000);

        // Select 'Normal' priority
        cy.get(':nth-child(2) > .sc-ion-select-popover-md').click({ force: true });

        // Click on the task category chip
        cy.get('#category-chip-2 > .sc-ion-label-md-h').click();

        // Click the "Add Task" button to add the task
        cy.get('#add-btn').click(); // error here

        // Navigate through other parts of the application
        cy.get('.can-go-back > .header-md > ion-toolbar.md > .buttons-first-slot > .sc-ion-buttons-md').click({ force: true });

        // Wait for page transition
        cy.wait(1000);

        cy.get('#week-item > .sc-ion-label-md-h').click();

        // Wait for page transition
        cy.wait(1000);

        // Click on the menu button to open the menu
        cy.get('#menu-button').click({ force: true });

        // Wait for the menu to fully open
        cy.wait(2000); 

        // Click on the memories item in the menu to navigate to the memories page
        cy.get('#memories-item').click({ force: true });

        // Wait for the memories page to load
        cy.wait(2000);

        // Click on the first thumbnail image to open it
        cy.get('#thumbnail-image-1').click({ force: true });

        // Wait for the image modal to open
        cy.wait(2000);

        // Click on the share button in the modal
        cy.get('ion-icon[name="share"]').click({ force: true });

        // Wait for the sharing process to complete
        cy.wait(2000);

        // Close the image modal by clicking on the close button with ID
        cy.get('#close-button').click({ force: true });

        // Wait for the modal to close and return to the memories page
        cy.wait(2000);

        // Click on the sixth thumbnail image to open it (the one to be deleted)
        cy.get('#thumbnail-image-6').click({ force: true });

        // Wait for the image modal to open
        cy.wait(2000);

        // Click on the delete button in the modal
        cy.get('#trash-icon').click({ force: true });

        // Wait for the deletion process to complete
        cy.wait(2000);

        // Wait for page transition
        cy.wait(2000);

        // Click on the menu button to open the menu again
        cy.get('#menu-button').click({ force: true });

        // Wait for the menu to fully open
        cy.wait(2000);

        // Click on the logout item in the menu
        cy.get('#login-item').click({ force: true });

          // Esperar a que el menú se abra completamente
          cy.wait(2000);

        // Wait for the confirmation alert to appear and click 'Cerrar sesión'
        cy.get('.alert-button').contains('Cerrar sesión').click();

        // Wait for the logout process to complete
        cy.wait(3000); 
    });
});
