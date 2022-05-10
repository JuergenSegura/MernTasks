///<reference types="cypress" />

describe( '<Login />', () => {
    it('Login /> - Verificar pantalla de inicio', () => {
        cy.visit('/');

        //Probar texto

        cy.contains('Iniciar Sesión');
        cy.contains('Email');
        cy.contains('Password');
        cy.contains('Iniciar Sesión');
        cy.contains('Obtener Cuenta')
    });

    it('Login /> - Verificar el formulario', () => {
        
    });
});