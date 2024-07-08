describe('Todo App Test', () => {
    it('should navigate through Todo App', () => {
        // Visit the app and login
        cy.visit('localhost:8100/home');

        // Click to navigate to create account
        cy.get('#login-btn-ir-a-crear-cuenta').click();

        // Wait for email input to be visible and interactable
        cy.get('#ion-input-2').should('be.visible').clear().type('testuser@example.com');

        // Wait for password input to be visible and interactable
        cy.get('#ion-input-3').should('be.visible').clear().type('password123');

        // Click on sign up button
        cy.get('#signup-btn-crear-cuenta').click();

        // Wait for email login input to be visible and interactable
        cy.get('#login-input-email > .input-wrapper > .native-wrapper').should('be.visible').click();
        cy.get('#ion-input-0').should('be.visible').clear().type('testuser@example.com');

        // Wait for password login input to be visible and interactable
        cy.get('#ion-input-1').should('be.visible').clear().type('password123');

        // Click on login button
        cy.get('#login-btn-iniciar-sesion').click();

        // Wait for page transition and interactions to settle
        cy.wait(2000);

        // Click on elements as per your recorded test
        cy.get('#todo-add-task > .md').click();

        // Wait for the add task interface to fully load
        cy.wait(2000);

        // Input text in the textarea
        cy.get('#ion-textarea-0').click().type('Esta es una tarea');

        // Wait for input to stabilize
        cy.wait(1000);

        // Click on the task priority dropdown
        cy.get('#taskPriority').click();

        // Wait for dropdown to fully open
        cy.wait(1000);

        // Select 'Normal' priority (assuming the popover opens automatically)
        cy.get(':nth-child(2) > .sc-ion-select-popover-md').click({ force: true });

        // Click on the task category chip
        cy.get('#category-chip-2 > .sc-ion-label-md-h').click();

        // Click on the "Agregar Tarea" button to add the task
        cy.get('#addTaskButton').click();

        // Ensure task is added successfully (you can add assertions here)
        // cy.contains('Task added successfully');

        // Navigate through other parts of the app as per your test
        cy.get('.can-go-back > .header-md > ion-toolbar.md > .buttons-first-slot > .sc-ion-buttons-md').click({ force: true });

        // Wait for page transition
        cy.wait(1000);

        cy.get('#week-item > .sc-ion-label-md-h').click();

        // Wait for page transition
        cy.wait(1000);

        // Click on menu button to open menu
        cy.get('#menu-button').click({ force: true });

        // Wait for menu to fully open
        cy.wait(2000); // Increased wait time as requested

        // Click on memories item in the menu to navigate to memories page
        cy.get('#memories-item').click({ force: true });

        // Wait for memories page to load
        cy.wait(2000);

        // Click on first thumbnail image to open it
        cy.get('#thumbnail-image-1').click({ force: true });

        // Wait for image modal to open
        cy.wait(2000);

        // Click on share button in the modal
        cy.get('ion-icon[name="share"]').click({ force: true });

        // Wait for sharing process to complete (assuming some process)
        cy.wait(2000);

        // Close the image modal by clicking on close button with ID
        cy.get('#close-button').click({ force: true });

        // Wait for modal to close and return to memories page
        cy.wait(2000);

        // Click on the second thumbnail image to open it (the one that will be deleted)
        cy.get('#thumbnail-image-6').click({ force: true });

        // Wait for image modal to open
        cy.wait(2000);

        // Click on delete button in the modal
        cy.get('#trash-icon').click({ force: true });

        // Wait for deletion process to complete (assuming some process)
        cy.wait(2000);


        // Wait for page transition
        cy.wait(2000);

        // Click on menu button to open menu again
        cy.get('#menu-button').click({ force: true });

        // Wait for menu to fully open
        cy.wait(2000);

        // Click on logout item in the menu
        cy.get('#login-item').click({ force: true });

        // Wait for logout process to complete (assuming some process)
        cy.wait(3000); // Increased wait time before logout as requested
    });
});
