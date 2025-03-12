// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {
    cy.get('[data-testid="email"]').type(email)
    cy.get('[data-testid="senha"]').type(password)
    cy.get('[data-testid="entrar"]').click()
 })


Cypress.Commands.add('registerUser', (name, email, password) => {
    cy.get('[data-testid="nome"]').type(name)
    cy.get('[data-testid="email"]').type(email)
    cy.get('[data-testid="password"]').type(password)
    cy.get('[data-testid="cadastrar"]').click()
})

Cypress.Commands.add('searchProduct', (product) => {
    cy.get('[data-testid="pesquisar"]').type(product)
    cy.get('[data-testid="botaoPesquisar"]').click()
    cy.get('[data-testid="adicionarNaLista"]').first().click()
})

Cypress.Commands.add('checkIfUserExistsAndDelete', (email) => {
    cy.request('GET', `https://serverest.dev/usuarios?email=${email}`).then((response) => {
        if (response.body.quantidade > 0) {
          cy.request('DELETE', `https://serverest.dev/usuarios/${response.body.usuarios[0]._id}`)
        }
    }) 
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })