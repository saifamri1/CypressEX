describe('Ajouter un produit au panier', () => {
    beforeEach(() => {
        cy.visit('https://ecommerce-playground.lambdatest.io/')
        cy.title().should('eq', 'Your Store')
      })

    // Test cases pour l'ajout des produits au panier
    it('Ajouter un produit au panier', () => {
      cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .flex-fill > input').type('HTC Touch HD')
        cy.get('button[type="submit"]').contains("Search").click({force:true})   
        cy.contains("Search - HTC Touch HD")
        cy.get('#entry_212469 > .row > :nth-child(1)').click()
        cy.get('button[title="Add to Cart"]').contains('Add to Cart').click({force:true})
        cy.contains("Success: You have added ")
        cy.wait(15000)
        // verifier si le produit est bien ajouté au panier 
        cy.get('#entry_217825').find('a[aria-controls="cart-total-drawer"]').click()
        cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=checkout/cart"]').click()
        cy.contains('tr','HTC Touch HD')
        
    })

    it('Ajouter un produit  fois', () => {
        cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .flex-fill > input').type('HTC Touch HD')
          cy.get('button[type="submit"]').contains("Search").click({force:true})   
          cy.contains("Search - HTC Touch HD")
          cy.get('#entry_212469 > .row > :nth-child(1)').click()
          cy.get('button[title="Add to Cart"]').contains('Add to Cart').click({force:true})
          cy.contains("Success: You have added ")
          cy.get('button[title="Add to Cart"]').contains('Add to Cart').click({force:true})
          cy.contains("Success: You have added ")
          cy.get('button[title="Add to Cart"]').contains('Add to Cart').click({force:true})
          cy.contains("Success: You have added ")
          cy.wait(15000) 
          cy.get('#entry_217825').find('a[aria-controls="cart-total-drawer"]').click()
          cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=checkout/cart"]').click()
          cy.contains('tr','HTC Touch HD')
          cy.contains('$438.00')
          
      })

      it('modifier la quantite de produit dans le panier', () => {
        cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .flex-fill > input').type('HTC Touch HD')
          cy.get('button[type="submit"]').contains("Search").click({force:true})   
          cy.contains("Search - HTC Touch HD")
          cy.get('#entry_212469 > .row > :nth-child(1)').click()
          cy.get('button[title="Add to Cart"]').contains('Add to Cart').click({force:true})
          cy.contains("Success: You have added ")
          cy.get('button[title="Add to Cart"]').contains('Add to Cart').click({force:true})
          cy.contains("Success: You have added ")
          cy.get('button[title="Add to Cart"]').contains('Add to Cart').click({force:true})
          cy.contains("Success: You have added ")
          cy.wait(15000) 
          cy.get('#entry_217825').find('a[aria-controls="cart-total-drawer"]').click()
          cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=checkout/cart"]').click()
          cy.contains('tr','HTC Touch HD')
          cy.contains('$438.00')
          cy.get(':nth-child(4) > .input-group > .form-control').clear().type('6')
          cy.get(':nth-child(4) > .input-group > .input-group-append > .btn-primary').click()
          cy.contains('You have modified your shopping cart!')
          cy.contains('$876.00')
          
      })

      it('supprimer produit dans le panier', () => {
        cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .flex-fill > input').type('HTC Touch HD')
          cy.get('button[type="submit"]').contains("Search").click({force:true})   
          cy.contains("Search - HTC Touch HD")
          cy.get('#entry_212469 > .row > :nth-child(1)').click()
          cy.get('button[title="Add to Cart"]').contains('Add to Cart').click({force:true})
          cy.contains("Success: You have added ")
          cy.get('button[title="Add to Cart"]').contains('Add to Cart').click({force:true})
          cy.contains("Success: You have added ")
          cy.get('button[title="Add to Cart"]').contains('Add to Cart').click({force:true})
          cy.contains("Success: You have added ")
          cy.wait(15000) 
          cy.get('#entry_217825').find('a[aria-controls="cart-total-drawer"]').click()
          cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=checkout/cart"]').click()
          cy.contains('tr','HTC Touch HD')
          cy.contains('$438.00')
          cy.get('.btn-danger').click()
          cy.contains('Your shopping cart is empty!')

      })


  })