describe('Front End Testing', () => {
  it('Unsuccessful login', () => {
    cy.visit('/login')

    cy.login('nttteste@gmail.com', '123456')
    cy.get('.alert').should('have.text', '×Email e/ou senha inválidos')
  })

  it('Create a new user', () => {
    const user = {
      name: 'Teste',
      email: 'ntttdddeste@gmail.com',
      password: '123456'
    }

    cy.checkIfUserExistsAndDelete(user.email)

    cy.visit('/cadastrarusuarios')

    cy.registerUser(user.name, user.email, user.password)
    cy.get('.alert-link').should('have.text', 'Cadastro realizado com sucesso')
    cy.get('h1').should('contain.text', 'Serverest Store')

  })

  it('Search for a product and add it to the shopping list', () => {
    cy.visit('/login')

    cy.login('nttreal@gmail.com', 'pwd123')
    cy.searchProduct('Logitech')
    cy.get('[data-testid="shopping-cart-product-name"]').should('contain.text', 'Logitech')
  })
})