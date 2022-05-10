//Para solucionar autocompletado de cypress
///<reference types="cypress" />

describe( '<Login />', () => {
    
    //Prueba al Login
    it('<Login /> - Verificar pantalla de inicio', () => {
        cy.visit('/');

        //Probar texto
        cy.contains('Iniciar Sesión');
        cy.contains('Email');
        cy.contains('Password');
        cy.contains('Iniciar Sesión');
        cy.contains('Obtener Cuenta');

        cy.get('[data-cy=title]')
            .invoke('text')
            .should('equal', 'Iniciar Sesión');


        //Probar si el formulario existe
        cy.get('[data-cy=form-login')
            .should('exist');

        //revisar los dos inputs
        cy.get('[data-cy=email-input]')
            .should('exist')

        cy.get('[data-cy=password-input]')
            .should('exist')

            
        //Existencia del boton
        cy.get('[data-cy=submit-login]')
            .should('exist')
            .should('have.value', 'Iniciar Sesión')
            .should('have.class','btn-primario')
            .and('have.class', 'btn');

        //link nueva cuenta
        cy.get('[data-cy=nueva-cuenta]')
            .should('exist')
            .should('have.prop', 'tagName')
            .should('eq', 'A');
        
        cy.get('[data-cy=nueva-cuenta]')
            .should('have.attr', 'href')
            .should('eq', '/nueva-cuenta')
        

        cy.visit('/nueva-cuenta')
    });


    //Prueba al nueva-cuenta
    it('<NuevaCuenta /> - Verificar pantalla de nueva cuenta', () => {
        //Probar texto
        cy.contains('Obtener una cuenta');
        cy.contains('Nombre');
        cy.contains('Email');
        cy.contains('Password');
        cy.contains('Confirmar Password');
        cy.contains('Registrarme');
    
        cy.get('[data-cy=title]')
            .should('exist')
            .invoke('text')
            .should('equal', 'Obtener una cuenta');

        //Probar si el formulario existe
        cy.get('[data-cy=form-registro')
            .should('exist');

        //revisar los inputs
        cy.get('[data-cy=input-nombre]')
            .should('exist')

        cy.get('[data-cy=input-password]')
            .should('exist')
            .should('have.prop', 'type')
            .should('equal', 'password')

        cy.get('[data-cy=input-confirm-password]')
            .should('exist')
            .should('have.prop', 'type')
            .should('equal', 'password')


        //Botones
        cy.get('[data-cy=submit-registro]')
            .should('exist')
            .should('have.value', 'Registrarme')
            .should('not.have.value', 'Crear Nueva Cuenta')
            .should('have.class','btn-primario')
            .and('have.class', 'btn');
        
        cy.get('[data-cy=login]')
            .should('have.attr', 'href')
            .should('eq', '/')
    });

    

});