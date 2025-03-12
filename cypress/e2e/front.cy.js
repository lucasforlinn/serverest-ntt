describe('template spec', () => {
  it('Unsuccessful login', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('nttteste@gmail.com')
    cy.get('[data-testid="senha"]').type('123456')
    cy.get('[data-testid="entrar"]').click()
    cy.get('.alert').should('have.text', '×Email e/ou senha inválidos')
  })

  it('Create a new user', () => {
    cy.request('GET', 'https://serverest.dev/usuarios?email=ntttdddeste@gmail.com').then((response) => {
      if (response.body.quantidade > 0) {
        cy.request('DELETE', `https://serverest.dev/usuarios/${response.body.usuarios[0]._id}`)
      }
    })

    cy.visit('https://front.serverest.dev/cadastrarusuarios')
    cy.get('[data-testid="nome"]').type('Teste')
    cy.get('[data-testid="email"]').type('ntttdddeste@gmail.com')
    cy.get('[data-testid="password"]').type('123456')
    cy.get('[data-testid="cadastrar"]').click()

    cy.get('.alert-link').should('have.text', 'Cadastro realizado com sucesso')
    cy.get('h1').should('contain.text', 'Serverest Store')

  })

  it.only('Search for a product and add it to the cart', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('nttreal@gmail.com')
    cy.get('[data-testid="senha"]').type('pwd123')
    cy.get('[data-testid="entrar"]').click()

    cy.get('[data-testid="pesquisar"]').type('logitech')
    cy.get('[data-testid="botaoPesquisar"]').click()
    cy.get('[data-testid="adicionarNaLista"]').first().click()

    cy.get('[data-testid="shopping-cart-product-name"]').should('contain.text', 'Logitech')
  })


})