describe('form tests', () => {
    beforeEach(() => {
        cy.visit('/forms')
    })

    it('navigates to forms page', () => {
        //happy path - when user input has a value
        cy.contains(/Testing Forms/i)
        cy.getDataTest('subscribe-form').find('input').as('subscribe-input') //using alias .as to minimise repeating data
        cy.get('@subscribe-input').type('www.sample.com')
        cy.contains(/Successfully subbed: www.sample.com!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/Successfully subbed: www.sample.com!/i).should('exist')

        //unhappy path - Invalid Email message - when user input has .com in it.
        cy.wait(3000)
        cy.get('@subscribe-input').type('www.sample.io')
        cy.contains(/Invalid email: www.sample.io!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/Invalid email: www.sample.io!/i).should('exist')
        cy.wait(3000)
        cy.contains(/Invalid email: www.sample.io!/i).should('not.exist')

        //fail message - when user does not add text input and click subscribe button
        cy.wait(3000)
        cy.contains(/fail!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/fail!/i).should('exist')


    })


})