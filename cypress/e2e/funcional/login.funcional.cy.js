describe('Testes Funcionais - Login', () => {

  let user.

  beforeEach(() => {
    user = {
      nome: 'Usuário QA Funcional',
      email: `funcional${Date.now()}@teste.com`,
      password: '123456',
      administrador: 'true'
    }

    cy.request('POST', 'https://serverest.dev/usuarios', user)
      .its('status')
      .should('eq', 201)
  })

  it('01 - Login válido', () => {
    cy.request('POST', 'https://serverest.dev/login', {
      email: user.email,
      password: user.password
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('authorization')
    })
  })

  it('02 - Login com senha inválida', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/login',
      failOnStatusCode: false,
      body: {
        email: user.email,
        password: 'senha_errada'
      }
    }).then((response) => {
      expect(response.status).to.eq(401)
    })
  })

})
