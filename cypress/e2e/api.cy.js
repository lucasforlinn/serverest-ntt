describe('API Testing', () => {
    it.only('Create a new user', () => {
        const data = {
            "nome": "lucas da Silva",
            "email": "lucasntt@qa.com.br",
            "password": "teste",
            "administrador": "true"
        }
        cy.checkIfUserExistsAndDelete(data.email)
        cy.request('POST', 'https://serverest.dev/usuarios', data).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.message).to.eq('Cadastro realizado com sucesso')
        })
    })

    it('Create a new user', () => {

    })

    it('Search for a product and add it to the shopping list', () => {
        
    })
})