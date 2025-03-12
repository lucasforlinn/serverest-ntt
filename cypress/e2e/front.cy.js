describe('template spec', () => {
  it('Unsuccessful login', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('nttteste@gmail.com')
    cy.get('[data-testid="senha"]').type('123456')
    cy.get('[data-testid="entrar"]').click()
    cy.get('.alert').should('have.text', '×Email e/ou senha inválidos')
  })

  it('Create a new user', () => {

  })

  it('Search for a product and add it to the cart', () => {

  })


})