import HomeEcommerce from "./Pages/HomeEcommerce"
import SingUp from "./Pages/SingUp"

describe ('test ecommercer', function(){

    beforeEach(() => {
        cy.visit('https://automationexercise.com/')
    })


    it('Register user in Ecommerce', function(){
        HomeEcommerce.clickBtnSingUp();
        HomeEcommerce.typeUsername("Fabian Restrepo")
        HomeEcommerce.typeEmail("fabianres8@gmail.com")
        HomeEcommerce.clickBtnSingUpSubmit()
        SingUp.datosUsuario("12345", "Fabian", "Restrepo", "Toolbox OTT", "Calle 123 # 45-67", "New york", "New york", "New york", "07030", "3101234567")
        SingUp.selectDateOfBirth("21", "May", "1995")
        SingUp.countrySelect("United States")
        SingUp.bntCreateAccount()
        SingUp.verifyAccountCreated()
        SingUp.btnContinue()
        SingUp.verifyLoggedUser("Fabian Restrepo")
        HomeEcommerce.clickBtnDeleteAccount()

    })

})