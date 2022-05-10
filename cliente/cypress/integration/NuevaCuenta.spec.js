//Para solucionar autocompletado de cypress
///<reference types="cypress" />

describe( '<NuevaCuenta />', () => {
    
    //Prueba al Login
    it('<NuevaCuenta /> - Validacion y alertas', () => {
        cy.visit('/nueva-cuenta');


    cy.get('[data-cy=submit-registro]')
        .click();
    
    cy.get('[data-cy=alert]')
        .should('exist')
        .invoke('text')
        .should('equal', 'Todos los campos son obligatorios');

    cy.get('[data-cy=alert]')
        .should('have.class', 'alerta-error');


    //Llenado de formulario
    cy.get('[data-cy=input-nombre]').type('Juergen');
    cy.get('[data-cy=input-email]').type('juergen@gmail.com');
    cy.get('[data-cy=input-password]').type('123');
    cy.get('[data-cy=input-confirm-password]').type('123');


    cy.get('[data-cy=submit-registro]')
        .click();


    cy.get('[data-cy=alert]')
        .should('exist')
        .invoke('text')
        .should('equal', 'El password debe ser de al menos 6 caracteres');
    cy.get('[data-cy=alert]')
        .should('have.class', 'alerta-error');

    });
});