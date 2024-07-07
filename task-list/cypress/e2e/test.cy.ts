describe('Pruebas E2E de la aplicación Todo', () => {
  const email = 'test@example.com';
  const password = 'Test1234';

  it('debería navegar del login al registro y crear una nueva cuenta', () => {
    cy.visit('/login');
    cy.get('#login-btn-ir-a-crear-cuenta').click(); // Ir a la página de registro
    cy.url().should('include', '/signup');
    cy.get('#signup-input-email').type(email); // Ingresar email en el registro
    cy.get('#signup-input-pass').type(password); // Ingresar contraseña en el registro
    cy.get('#signup-btn-crear-cuenta').click(); // Crear la cuenta
  });

  it('debería iniciar sesión con la cuenta recién creada', () => {
    cy.get('#login-input-email').type(email); // Ingresar email en el login
    cy.get('#login-input-pass').type(password); // Ingresar contraseña en el login
    cy.get('#login-btn-iniciar-sesion').click(); // Iniciar sesión
  });

  it('debería verificar la lista de tareas', () => {
    cy.visit('/todo');
    cy.get('.todo-list').should('be.visible'); // Verificar que la lista de tareas es visible
    cy.scrollTo('top');
    cy.scrollTo('bottom');

    // Agregar una tarea
    cy.get('#todo-add-task').click(); // Ir a la página de agregar tarea
    cy.get('#new-task').type('Nueva Tarea'); // Ingresar el nombre de la nueva tarea
    cy.contains('Guardar Tarea').click(); // Guardar la nueva tarea
    cy.contains('Nueva Tarea').should('be.visible'); // Verificar que la nueva tarea es visible

    // Editar una tarea
    cy.get('#todo-task-0').find('#todo-edit-task-0').click(); // Hacer clic en el botón de editar
    cy.get('#edit-task').clear().type('Tarea Actualizada'); // Editar el nombre de la tarea
    cy.contains('Guardar Cambios').click(); // Guardar los cambios
    cy.contains('Tarea Actualizada').should('be.visible'); // Verificar que la tarea se actualizó
  });

  it('debería verificar la página de esta semana', () => {
    cy.visit('/week');
    cy.get('ion-content').should('be.visible'); // Verificar que la página de esta semana es visible
  });

  it('debería verificar la página de archivo', () => {
    cy.visit('/archive');
    cy.get('ion-content').should('be.visible'); // Verificar que la página de archivo es visible
  });

  it('debería verificar la funcionalidad de memorias', () => {
    cy.visit('/memories');
    cy.get('.thumbnail-image').should('be.visible'); // Verificar que las fotos son visibles

    // Ver una foto en detalle
    cy.get('.thumbnail-image').first().click(); // Hacer clic en la primera foto
    cy.get('.image-container').should('be.visible'); // Verificar que la vista detallada de la foto es visible

    // Tomar una nueva foto (asumiendo que hay un botón para tomar una foto)
    cy.contains('Tomar Foto').click(); // Hacer clic en el botón para tomar una foto
    // Asumiendo que la foto se toma y se agrega a la lista

    // Borrar una foto
    cy.get('.thumbnail-image').first().parent().find('.delete-button').click(); // Hacer clic en el botón de eliminar
    cy.contains('¿Estás seguro?').should('be.visible'); // Verificar el mensaje de confirmación
    cy.contains('Sí').click(); // Confirmar eliminación
    cy.get('.thumbnail-image').should('not.exist'); // Asegurarse de que la foto se eliminó
  });
});
