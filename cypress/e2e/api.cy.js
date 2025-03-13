describe('API Testing', () => {
    it('Create a new user', () => {
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

    it('Create a new product', () => {
        const user = {
            "email": "admntt@gmail.com",
            "password": "pwd123",
        }

        const product = {
            "nome": "Produto NTT",
            "preco": 470,
            "descricao": "NTT descricao",
            "quantidade": 381
        }

        cy.loginAPI(user).then(response => {
            cy.request({
                method: 'POST',
                url: 'https://serverest.dev/produtos',
                headers: {
                    'authorization': response.body.authorization
                },
                body: product
            }).then((product) => {
                expect(product.status).to.eq(201)
                expect(product.body.message).to.eq('Cadastro realizado com sucesso')
                cy.deleteProduct(product.body._id, response.body.authorization)
            })
        })
    })

    it('Unsuccessful login', () => {
        const user = {
            "email": "batatinha@gmail.com",
            "password": "222111",
        }

        cy.loginAPI(user).then(response => {
            expect(response.status).to.eq(401)
            expect(response.body.message).to.eq('Email e/ou senha inválidos')
        })
    })
})