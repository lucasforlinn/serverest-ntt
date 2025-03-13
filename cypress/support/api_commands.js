Cypress.Commands.add('checkIfUserExistsAndDelete', (email) => {
    cy.request('GET', `https://serverest.dev/usuarios?email=${email}`).then((response) => {
        if (response.body.quantidade > 0) {
          cy.request('DELETE', `https://serverest.dev/usuarios/${response.body.usuarios[0]._id}`)
        }
    }) 
})

Cypress.Commands.add('getToken', (user) => {
    cy.request('POST', 'https://serverest.dev/login', user)
    .then((response) => {return response.body.authorization}) 
})

Cypress.Commands.add('deleteProduct', (id, token) => {
    cy.request({
        method: 'DELETE',
        url: `https://serverest.dev/produtos/${id}`,
        headers: {
            'authorization': token
        }
    })
})