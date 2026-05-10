describe('why cypress tests', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('validates the h1 tag', () => {
        cy.getDataTest('why-cypress').contains('Why Cypress?').should('exist')
        cy.getDataTest('accordion-wrapper').within(() => {
            cy.get('[data-test^="accordion-item"]')
        })
    })

    it('validates the reason 1 drop down', () => {
       cy.getDataTest('accordion-item-1').within(() => {
        cy.get('[role="button"]').as('reason-1')
       })
       cy.get('@reason-1').click()
       cy.contains('An all-in-one testing framework, assertion library, with mocking and stubbing').should('be.visible')
       cy.get('@reason-1').click()
       cy.contains('An all-in-one testing framework, assertion library, with mocking and stubbing').should('not.be.visible')
    })

    it('validates the reason 2 drop down', () => {
       cy.getDataTest('accordion-item-2').within(() => {
        cy.get('[role="button"]').as('reason-2')
       })
       cy.get('@reason-2').click()
       cy.contains('Focus on E2E and Component Testing -- real world testing').should('be.visible')
       cy.get('@reason-2').click()
       cy.contains('Focus on E2E and Component Testing -- real world testing').should('not.be.visible')
    })

    it('validates the reason 3 drop down', () => {
       cy.getDataTest('accordion-item-3').within(() => {
        cy.get('[role="button"]').as('reason-3')
       })
       cy.get('@reason-3').click()
       cy.contains('Runs in the browser and wrote in JavaScript').should('be.visible')
       cy.get('@reason-3').click()
       cy.contains('Runs in the browser and wrote in JavaScript').should('not.be.visible')
    })

    it('validates the reason 4 drop down', () => {
       cy.getDataTest('accordion-item-4').within(() => {
        cy.get('[role="button"]').as('reason-4')
       })
       cy.get('@reason-4').click()
       cy.contains('Good performance and can be integrated in CI/CD quite easily').should('be.visible')
       cy.get('@reason-4').click()
       cy.contains('Good performance and can be integrated in CI/CD quite easily').should('not.be.visible')
    })

    it('validates the reason 5 drop down', () => {
       cy.getDataTest('accordion-item-5').within(() => {
        cy.get('[role="button"]').as('reason-5')
       })
       cy.get('@reason-5').click()
       cy.contains('Native access to the DOM and to your app').should('be.visible')
       cy.get('@reason-5').click()
       cy.contains('Native access to the DOM and to your app').should('not.be.visible')
    })

    it('validates the reason 6 drop down', () => {
       cy.getDataTest('accordion-item-6').within(() => {
        cy.get('[role="button"]').as('reason-6')
       })
       cy.get('@reason-6').click()
       cy.contains('Great developer UX').should('be.visible')
       cy.get('@reason-6').click()
       cy.contains('Great developer UX').should('not.be.visible')
    })

     it('validates the reason 7 drop down', () => {
       cy.getDataTest('accordion-item-7').within(() => {
        cy.get('[role="button"]').as('reason-7')
       })
       cy.get('@reason-7').click()
       cy.contains('Generally not flaky if you follow the best practices').should('be.visible')
       cy.get('@reason-7').click()
       cy.contains('Generally not flaky if you follow the best practices').should('not.be.visible')
    })

})