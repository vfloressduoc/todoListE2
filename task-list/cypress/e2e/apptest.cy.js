describe('Todo App Test', () => {
    it('should navigate through Todo App', () => {
        // Visitar la aplicación e iniciar sesión
        cy.visit('localhost:8100/home');

        // Hacer clic para navegar a crear cuenta
        cy.get('#login-btn-ir-a-crear-cuenta').click();

        // Esperar a que el campo de email sea visible e interactuable
        cy.get('#ion-input-2').should('be.visible').clear().type('testuser@example.com');

        // Esperar a que el campo de contraseña sea visible e interactuable
        cy.get('#ion-input-3').should('be.visible').clear().type('password123');

        // Hacer clic en el botón de registro
        cy.get('#signup-btn-crear-cuenta').click();

        // Esperar a que el campo de email para iniciar sesión sea visible e interactuable
        cy.get('#login-input-email > .input-wrapper > .native-wrapper').should('be.visible').click();
        cy.get('#ion-input-0').should('be.visible').clear().type('testuser@example.com');

        // Esperar a que el campo de contraseña para iniciar sesión sea visible e interactuable
        cy.get('#ion-input-1').should('be.visible').clear().type('password123');

        // Hacer clic en el botón de iniciar sesión
        cy.get('#login-btn-iniciar-sesion').click();

        // Esperar a que la transición de página y las interacciones se estabilicen
        cy.wait(2000);

        // Hacer clic en elementos según tu prueba grabada
        cy.get('#todo-add-task > .md').click();

        // Esperar a que la interfaz de agregar tarea se cargue completamente
        cy.wait(2000);

        // Introducir texto en el área de texto
        cy.get('#ion-textarea-0').click().type('Esta es una tarea');

        // Esperar a que la entrada se estabilice
        cy.wait(1000);

        // Hacer clic en el menú desplegable de prioridad de tarea
        cy.get('#taskPriority').click();

        // Esperar a que el menú desplegable se abra completamente
        cy.wait(1000);

        // Seleccionar prioridad 'Normal'
        cy.get(':nth-child(2) > .sc-ion-select-popover-md').click({ force: true });

        // Hacer clic en el chip de categoría de tarea
        cy.get('#category-chip-2 > .sc-ion-label-md-h').click();

        // Hacer clic en el botón "Agregar Tarea" para añadir la tarea
        cy.get('#addTaskButton').click();

        // Navegar por otras partes de la aplicación según tu prueba
        cy.get('.can-go-back > .header-md > ion-toolbar.md > .buttons-first-slot > .sc-ion-buttons-md').click({ force: true });

        // Esperar a la transición de página
        cy.wait(1000);

        cy.get('#week-item > .sc-ion-label-md-h').click();

        // Esperar a la transición de página
        cy.wait(1000);

        // Hacer clic en el botón del menú para abrir el menú
        cy.get('#menu-button').click({ force: true });

        // Esperar a que el menú se abra completamente
        cy.wait(2000); 

        // Hacer clic en el elemento de recuerdos en el menú para navegar a la página de recuerdos
        cy.get('#memories-item').click({ force: true });

        // Esperar a que la página de recuerdos se cargue
        cy.wait(2000);

        // Hacer clic en la primera imagen en miniatura para abrirla
        cy.get('#thumbnail-image-1').click({ force: true });

        // Esperar a que el modal de imagen se abra
        cy.wait(2000);

        // Hacer clic en el botón de compartir en el modal
        cy.get('ion-icon[name="share"]').click({ force: true });

        // Esperar a que el proceso de compartir se complete 
        cy.wait(2000);

        // Cerrar el modal de imagen haciendo clic en el botón de cerrar con ID
        cy.get('#close-button').click({ force: true });

        // Esperar a que el modal se cierre y volver a la página de recuerdos
        cy.wait(2000);

        // Hacer clic en la sexta imagen en miniatura para abrirla (la que se eliminará)
        cy.get('#thumbnail-image-6').click({ force: true });

        // Esperar a que el modal de imagen se abra
        cy.wait(2000);

        // Hacer clic en el botón de eliminar en el modal
        cy.get('#trash-icon').click({ force: true });

        // Esperar a que el proceso de eliminación se complete 
        cy.wait(2000);

        // Esperar a la transición de página
        cy.wait(2000);

        // Hacer clic en el botón del menú para abrir el menú nuevamente
        cy.get('#menu-button').click({ force: true });

        // Esperar a que el menú se abra completamente
        cy.wait(2000);

        // Hacer clic en el elemento de cerrar sesión en el menú
        cy.get('#login-item').click({ force: true });

        
        // Esperar a que el proceso de cierre de sesión se complete 
        cy.wait(3000); 
    });
});
