// Função auxiliar para realizar login
function fazerLogin(usuario, senha) {
  cy.visit('https://www.saucedemo.com')
  cy.get('#user-name').type(usuario)
  cy.get('#password').type(senha)
  cy.get('#login-button').click()
}

describe('Casos de Teste - Sauce Demo', () => {
  
  // CASO DE TESTE 1: Login com credenciais válidas
  it('Caso 1: Deve fazer login com sucesso usando credenciais válidas', () => {
    fazerLogin('standard_user', 'secret_sauce')
    cy.url().should('include', '/inventory')
    cy.get('.inventory_list').should('be.visible')
  })

  // CASO DE TESTE 2: Adicionar produto ao carrinho
  it('Caso 2: Deve adicionar um produto ao carrinho com sucesso', () => {
    fazerLogin('standard_user', 'secret_sauce')
    cy.get('.inventory_item').first().within(() => {
      cy.get('button').click()
    })
    cy.get('.shopping_cart_badge').should('contain', '1')
  })

  // CASO DE TESTE 3: Verificar carrinho vazio (NEGATIVO)
  it('Caso 3: Deve validar que o carrinho está vazio após limpar itens', () => {
    fazerLogin('standard_user', 'secret_sauce')
    cy.get('.inventory_item').first().within(() => {
      cy.get('button').click()
    })
    cy.get('.shopping_cart_link').click()
    cy.get('button').contains('Remove').click()
    cy.get('.cart_item').should('not.exist')
    cy.get('.cart_list').should('be.visible')
  })

  // CASO DE TESTE 4: Login com credenciais inválidas (NEGATIVO)
  it('Caso 4: Não deve fazer login com credenciais inválidas', () => {
    fazerLogin('usuario_invalido', 'senha_errada')
    cy.get('[data-test="error"]').should('be.visible')
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match')
    cy.url().should('eq', 'https://www.saucedemo.com/')
  })
})