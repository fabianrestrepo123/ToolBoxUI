class HomeEcommerce {


    elements = {
        btnSingUp: () => cy.get('.shop-menu > .nav > :nth-child(4)').click(),
        usernameInput: () => cy.get('input[data-qa="signup-name"]'),
        emailInput: () => cy.get('input[data-qa="signup-email"]'),
        btnSingUpSubmit: () => cy.get('button[data-qa="signup-button"]').click(),
        btnDeleteAccount: () => cy.get('.shop-menu > .nav > :nth-child(5)').click(),

    }

    typeUsername(username) {
        this.elements.usernameInput().type(username)
    }

    typeEmail(email) {
        this.elements.emailInput().type(email)
    }

    clickBtnSingUp() {
        this.elements.btnSingUp()
    }
    
    clickBtnSingUpSubmit() {
        this.elements.btnSingUpSubmit()
    }

    clickBtnDeleteAccount() {
        this.elements.btnDeleteAccount()
    }


}

module.exports = new HomeEcommerce();
