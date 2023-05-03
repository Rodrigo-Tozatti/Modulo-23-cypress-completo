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
// Cypress.Commands.add('login', (email, password) => { ... })
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

Cypress.Commands.add('lupa', () => {
    cy.xpath(`//*[@id="tbay-header"]/div/div/div/div[2]/div/div[4]`).click()
})

Cypress.Commands.add('preencher_pesquisa', (produto) => {
    cy.get('#tbay-header .tbay-search').type(produto)
})

Cypress.Commands.add('lista_produto', () => {
    cy.get('#ui-id-1')
})
