describe('Testes de Regressão - Login', () => {

  let user

  before(() => {
    user = {
      nome: 'Usuário QA Regressão',
      email: `regressao${Date.now()}@teste.com`,
      password: '123456',
      administrador: 'true'
    }

    cy.request('POST', 'https://serverest.dev/usuarios', user)
      .its('status')
      .should('eq', 201)
  })

  it('01 - Login continua funcionando', () => {
    cy.request('POST', 'https://serverest.dev/login', {
      email: user.email,
      password: user.password
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('authorization')
    })
  })

})
