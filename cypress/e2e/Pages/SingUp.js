class signup{

    elements = {

            btnGender: () => cy.get('#id_gender1'),
            inputPassword: () => cy.get('#password'),
            btnDayOfBirth: () => cy.get('#days'),
            btnMounthOfBirth: () => cy.get('#months'),
            btnYearOfBirth: () => cy.get('#years'),
            firstName: () => cy.get('#first_name'),
            lastName: () => cy.get('#last_name'),
            company: () => cy.get('#company'),
            address1: () => cy.get('#address1'),
            addres2: () => cy.get('#address2'),
            country: () => cy.get('#country').select('United States'),
            state: () => cy.get('#state'),
            city: () => cy.get('#city'),
            zipCode: () => cy.get('#zipcode'),
            mobileNumber: () => cy.get('#mobile_number'),
            btnCreateAccount: () => cy.get('[data-qa="create-account"]').click(),
            accountCreatedMessage: () => cy.get('h2[data-qa="account-created"] b'),
            btnContinue: () => cy.get('[data-qa="continue-button"]').click(),

    }
    
    datosUsuario(password, firstName, lastName, company, address1, address2, state, city, zipCode, mobileNumber){
        this.elements.btnGender().click()      // ejemplo: masculino
        this.elements.inputPassword().type(password) // ejemplo: "12345"
        this.elements.firstName().type(firstName)   // ejemplo: "Fabian"
        this.elements.lastName().type(lastName)     // ejemplo: "Restrepo"
        this.elements.company().type(company)       // ejemplo: "Empresa S.A.S"
        this.elements.address1().type(address1)     // ejemplo: "Calle 123 # 45-67"
        this.elements.addres2().type(address2)      // ejemplo: "Barrio La Esmeralda"
        this.elements.state().type(state)           // ejemplo: "Antioquia"
        this.elements.city().type(city)             // ejemplo: "Medellin"
        this.elements.zipCode().type(zipCode)       // ejemplo: "050021"
        this.elements.mobileNumber().type(mobileNumber) // ejemplo: "3101234567"
    }

    selectDateOfBirth(day, month, year) {
        this.elements.btnDayOfBirth().select(day);     // ejemplo: "21"
        this.elements.btnMounthOfBirth().select(month); // ejemplo: "May"
        this.elements.btnYearOfBirth().select(year);   // ejemplo: "1995"
      }

    countrySelect(country){
        this.elements.country().select(country) // ejemplo: "United States"
    }
    
    bntCreateAccount(){
        this.elements.btnCreateAccount()
    }

    verifyAccountCreated() {
        //cy.url().should('include', '/account_created'); // asegura que estamos en la URL correcta
        cy.get('h2[data-qa="account-created"]')
          .should('be.visible')
          .and('contain.text', 'Account Created');
      }
      btnContinue(){
        this.elements.btnContinue()
      }

      verifyLoggedUser(name) {
        cy.get('a > b')
          .should('be.visible')
          .and('contain.text', name);
      }
      
      
      

    




}

module.exports = new signup();