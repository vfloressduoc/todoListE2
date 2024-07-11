describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('new test 1', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('localhost:8100');
    cy.get('#ion-input-0').click();
    cy.get('#login-btn-ir-a-crear-cuenta').click();
    cy.get('#ion-input-2').clear('b');
    cy.get('#ion-input-2').type('bb@bb.cl');
    cy.get('#ion-input-3').clear('b');
    cy.get('#ion-input-3').type('bbbb');
    cy.get('#signup-btn-crear-cuenta').click();
    cy.get('#login-input-email > .input-wrapper > .native-wrapper').click();
    cy.get('#ion-input-0').click();
    cy.get('#ion-input-0').clear('b');
    cy.get('#ion-input-0').type('bb@bb.cl');
    cy.get('#login-input-pass > .input-wrapper > .native-wrapper').click();
    cy.get('#ion-input-1').clear('b');
    cy.get('#ion-input-1').type('bbbb');
    cy.get('#login-btn-iniciar-sesion').click();
    cy.get('.alert-button-inner').click();
    cy.get('#todo-add-task > .md').click();
    cy.get('#ion-textarea-0').click();
    cy.get('#taskPriority').click();
    cy.get('#taskPriority').click();
    cy.get(':nth-child(2) > .sc-ion-select-popover-md').click();
    cy.get('#category-chip-2').click();
    cy.get('ion-card.md > :nth-child(4) > .sc-ion-label-md-h').click();
    cy.get('ion-card.md > :nth-child(4) > .sc-ion-label-md-h').click();
    cy.get('ion-card.md > :nth-child(4) > .sc-ion-label-md-h').click();
    cy.get('ion-card.md > :nth-child(4) > .sc-ion-label-md-h').click();
    cy.get('ion-datetime-button.ion-color').click();
    cy.get('#datetime').click();
    cy.get('#ion-overlay-6').click();
    cy.get('.ion-margin').click();
    cy.get('#todo-add-task > .md').click();
    cy.get('#ion-textarea-1').click();
    cy.get('#ion-textarea-1').click();
    cy.get('#ion-textarea-1').click();
    cy.get('#ion-textarea-1').click();
    cy.get('#taskPriority').click();
    cy.get('#taskPriority').click();
    cy.get(':nth-child(3) > .sc-ion-select-popover-md').click();
    cy.get('ion-card.md > :nth-child(5)').click();
    cy.get('#category-chip-3 > .sc-ion-label-md-h').click();
    cy.get('ion-card.md > :nth-child(5)').click();
    cy.get('#category-chip-2 > .sc-ion-label-md-h').click();
    cy.get('#category-chip-1 > .sc-ion-label-md-h').click();
    cy.get('ion-card.md > .ion-margin').click();
    cy.get('#todo-add-task > .md').click();
    cy.get('#ion-textarea-2').click();
    cy.get('ion-datetime-button.ion-color').click();
    cy.get('#datetime').click();
    cy.get('#ion-overlay-14').click();
    cy.get('#taskPriority').click();
    cy.get('#taskPriority').click();
    cy.get('ion-radio-group.sc-ion-select-popover-md > :nth-child(1) > .sc-ion-select-popover-md').click();
    cy.get('ion-card.md > .ion-margin').click();
    cy.get('.can-go-back > .header-md > ion-toolbar.md > .buttons-first-slot > .sc-ion-buttons-md').click();
    cy.get('#week-item > .sc-ion-label-md-h').click();
    cy.get('#edit-button-0 > p').click();
    cy.get('#taskPriority').click();
    cy.get('#taskPriority').click();
    cy.get(':nth-child(2) > .sc-ion-select-popover-md').click();
    cy.get('ion-card.md > .button').click();
    cy.get('#complete-button-1 > p').click();
    cy.get('#delete-button-0 > p').click();
    cy.get('app-week.ion-page > .header-md > ion-toolbar.md > .buttons-first-slot > #menu-button').click();
    cy.get('#archive-item > .sc-ion-label-md-h').click();
    cy.get('.item > .button').click();
    cy.get(':nth-child(2) > .alert-button-inner').click();
    cy.get('app-archive.ion-page > .header-md > ion-toolbar.md > .buttons-first-slot > #menu-button').click();
    cy.get('#memories-item').click();
    cy.get('#fab-button').click();
    cy.get('.action-sheet-container > :nth-child(1) > :nth-child(2)').click();
    cy.get('pwa-camera-modal-instance.hydrated').click();
    cy.get('pwa-camera-modal-instance.hydrated').click();
    cy.get('#fab-button').click();
    cy.get('.action-sheet-container > :nth-child(1) > :nth-child(3)').click();
    cy.get('#thumbnail-image-7').click();
    cy.get('.buttons-last-slot > :nth-child(2)').click();
    cy.get('app-memories.ion-page > .header-md > ion-toolbar.md > .buttons-first-slot > #menu-button').click();
    cy.get('#week-item').click();
    cy.get('app-week.ion-page > .header-md > ion-toolbar.md > .buttons-first-slot > #menu-button').click();
    cy.get('#memories-item').click();
    cy.get('#fab-button > .md').click();
    cy.get('.action-sheet-container > :nth-child(1) > :nth-child(2)').click();
    cy.get('pwa-camera-modal-instance.hydrated').click();
    cy.get('pwa-camera-modal-instance.hydrated').click();
    cy.get('app-memories.ion-page > .header-md > ion-toolbar.md > .buttons-first-slot > #menu-button').click();
    cy.get('#week-item').click();
    cy.get('app-week.ion-page > .header-md > ion-toolbar.md > .buttons-first-slot > #menu-button').click();
    cy.get('#memories-item > .sc-ion-label-md-h').click();
    cy.get('app-memories.ion-page > .header-md > ion-toolbar.md > .buttons-first-slot > #menu-button').click();
    cy.get('#archive-item > .sc-ion-label-md-h').click();
    cy.get('app-archive.ion-page > .header-md > ion-toolbar.md > .buttons-first-slot > #menu-button').click();
    cy.get('#login-item').click();
    cy.get(':nth-child(2) > .alert-button-inner').click();
    /* ==== End Cypress Studio ==== */
  });
})