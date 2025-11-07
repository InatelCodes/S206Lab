/// <reference types="cypress"/>

describe('Testes da Lista 1 - site Sauce Demo', () => {
  it('Teste de login com sucesso', () => {
    cy.loginSauceDemo('standard_user', 'secret_sauce');
    cy.get('.title').should('have.text', 'Products');
  })

  it('Teste de login com falha - usuário bloqueado', () => {
    cy.loginSauceDemo('locked_out_user', 'secret_sauce')
    cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Sorry, this user has been locked out')
  })

  it('Teste de adição de produto ao carrinho', () => {
    cy.loginSauceDemo('standard_user', 'secret_sauce')

    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('.shopping_cart_badge').should('have.text', '1')
  })

  it('Teste de remoção de produto do carrinho', () => {
    cy.loginSauceDemo('standard_user', 'secret_sauce')

    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('#remove-sauce-labs-backpack').click()
    cy.get('.shopping_cart_badge').should('not.exist')
  })

  it('Teste de ordenação de produtos', () => {
    cy.loginSauceDemo('standard_user', 'secret_sauce')

    cy.get('.product_sort_container').select('za')
    cy.get('.inventory_item_name').first().should('contain.text', 'Test.allTheThings() T-Shirt')
  })

  it('Teste de checkout com sucesso', () => {
    cy.loginSauceDemo('standard_user', 'secret_sauce');

    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('.shopping_cart_link').click()
    cy.get('#checkout').click()

    cy.get('#first-name').type('John')
    cy.get('#last-name').type('Doe')
    cy.get('#postal-code').type('12345')
    cy.get('#continue').click()
    cy.get('#finish').click()
    cy.get('.complete-header').should('have.text', 'Thank you for your order!')
  })
})
