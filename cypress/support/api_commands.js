Cypress.Commands.add('checkIfUserExistsAndDelete', (email) => {
    cy.request('GET', `https://serverest.dev/usuarios?email=${email}`).then((response) => {
        if (response.body.quantidade > 0) {
          cy.request('DELETE', `https://serverest.dev/usuarios/${response.body.usuarios[0]._id}`)
        }
    }) 
})

Cypress.Commands.add('login', (user) => {
    cy.request({
        method: 'POST',
        url: 'https://serverest.dev/login',
        body: user,
        failOnStatusCode: false
    }).then((response) => {return response}) 

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