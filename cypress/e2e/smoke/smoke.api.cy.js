describe('Smoke Test - API ServeRest', () => {

  let user

  before(() => {
    user = {
      nome: 'Usuário QA Smoke',
      email: `qa${Date.now()}@teste.com`,
      password: '123456',
      administrador: 'true'
    }

    cy.request('POST', 'https://serverest.dev/usuarios', user)
      .its('status')
      .should('eq', 201)
  })

  it('01 - Login com sucesso', () => {
    cy.request('POST', 'https://serverest.dev/login', {
      email: user.email,
      password: user.password
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('authorization')
    })
  })

  it('02 - Listar usuários', () => {
    cy.request('GET', 'https://serverest.dev/usuarios')
      .its('status')
      .should('eq', 200)
  })

})
