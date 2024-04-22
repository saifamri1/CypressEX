
describe('Création de compte', () => {

    // déclarer les variables golbales 
    var firstname;  var lastname; var email;  var tel;  var password

    // Initialiser ces variables avec vos valeurs spécifique
    before(() => {
      firstname = 'saif';
      lastname = 'amri';
      email = 'saifnew@test.com';
      tel = '1234567890';
      password = 'abcd123';
    });

    // Actions à effectuer avant chaque cas de test
    beforeEach(() => {
      cy.visit('https://ecommerce-playground.lambdatest.io/')
      cy.title().should('eq', 'Your Store')
      cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/account"]').contains(" My account").click({force:true})   
      cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/register"]').contains("Continue").click({force:true})
      
    })

    // les cas des tests 
    it('Creation de nouveau compte avec succée', () => {
      cy.get('input[name="firstname"]').type(firstname)
      cy.get('input[name="lastname"]').type(lastname)
      cy.get('input[name="email"]').type("saif23322@gmail.com")
      cy.get('input[name="telephone"]').type(tel)
      cy.get('input[name="password"]').type(password)
      cy.get('input[name="confirm"]').type(password)
      cy.get('input[id="input-newsletter-yes"]').click({force:true})
      cy.get('input[name="agree"]').click({force:true})
      cy.get('input[value="Continue"]').click({force:true})
      cy.contains("Congratulations! Your new account has been successfully created!")
    })

    it(('Creation compte avec email Inscrivez-vous avant'), () => {
        cy.get('input[name="firstname"]').type(firstname)
        cy.get('input[name="lastname"]').type(lastname)
        cy.get('input[name="email"]').type("saif2332@gmail.com")
        cy.get('input[name="telephone"]').type(tel)
        cy.get('input[name="password"]').type(password)
        cy.get('input[name="confirm"]').type(password)
        cy.get('input[id="input-newsletter-yes"]').click({force:true})
        cy.get('input[name="agree"]').click({force:true})
        cy.get('input[value="Continue"]').click({force:true})
        cy.contains("E-Mail Address is already registered!")
      })

    it('Creation compte avec First Name et Last Name vide', () => {
        cy.get('input[name="email"]').type("saif2332@gmail.com")
        cy.get('input[name="telephone"]').type(tel)
        cy.get('input[name="password"]').type(password)
        cy.get('input[name="confirm"]').type(password)
        cy.get('input[id="input-newsletter-yes"]').click({force:true})
        cy.get('input[name="agree"]').click({force:true})
        cy.get('input[value="Continue"]').click({force:true})
        cy.contains("First Name must be between 1 and 32 characters!")
        cy.contains("Last Name must be between 1 and 32 characters!")
      })

  });