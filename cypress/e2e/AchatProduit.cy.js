describe('Acheter un produit ', () => {

    beforeEach(() => {
        cy.visit('https://ecommerce-playground.lambdatest.io/')
        cy.title().should('eq', 'Your Store')
      })
    // Test cases pour l'ajout des produits au panier
    it('Acheter un produit au panier', () => {
      cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .flex-fill > input').type('HTC Touch HD')
        cy.get('button[type="submit"]').contains("Search").click({force:true})   
        cy.contains("Search - HTC Touch HD")
        cy.get('#entry_212469 > .row > :nth-child(1)').click()
        cy.get('#entry_216843 > .text').click()
        cy.get('.sticky-top > :nth-child(1) > .form-group > :nth-child(1)').click()
        cy.get('#input-login-email').type('saifaccc@gmail.com')
        cy.get('#input-login-password').type('123456789')
        cy.get('#button-login').click()
        cy.contains('Billing Address')
        cy.get('#payment-address > :nth-child(2) > .custom-control').click({force:true})
        cy.get('#input-payment-firstname').type('saif')
        cy.get('#input-payment-lastname').type('amri')
        cy.get('#input-payment-company').type('SEAC')
        cy.get('#input-payment-address-1').type('beja')
        cy.get('#input-payment-city').type('beja')
        cy.get('#input-payment-postcode').type('9000')
        cy.get('#input-payment-country').click()
        cy.contains('Tunisia').click()
        cy.get('#input-payment-zone').click()
        cy.contains('Beja').click()
        cy.get('.col-lg-7 > .sticky-top > :nth-child(5)').click()
        cy.get('#button-save').click()
        cy.contains('Confirm Order')
        cy.get('button[id="button-confirm"]').click()
        cy.contains('Your order has benn placed!')

        
    })
    
    
  })