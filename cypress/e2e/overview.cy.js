describe('overview tests', () => {
    beforeEach(() => {
        cy.visit('/overview')
    })
    it('validates if it is overview page', () => {
        cy.contains(/overview & install/i ).should('exist')
    })

    it('renders clone my repo correctly', () => {
        cy.contains('git clone').should('not.be.visible')

        cy.getDataTest('accordion-item-1').within(() => {
            cy.get('[role="button"]')
        }).as('clone-my-repo-button')

        cy.get('@clone-my-repo-button').click()

        cy.contains('git clone').should('be.visible')

        cy.get('@clone-my-repo-button').click()

        cy.contains('git clone').should('not.be.visible')
    })

    it('install dependencies correctly', () => {
        cy.contains('npm install').should('not.be.visible')

        cy.getDataTest('accordion-item-2').within(() => {
            cy.get('[role="button"]')
        }).as('install-dependencies-button')

        cy.get('@install-dependencies-button').click()

        cy.contains('npm install').should('be.visible')

        cy.get('@install-dependencies-button').click()

        cy.contains('npm install').should('not.be.visible')
    })

    it('run app correctly', () => {
        cy.contains('npm install').should('not.be.visible')

        cy.getDataTest('accordion-item-3').within(() => {
            cy.get('[role="button"]')
        }).as('run-app-button')

        cy.get('@run-app-button').click()

        cy.contains('npm run dev').should('be.visible')

        cy.get('@run-app-button').click()

        cy.contains('npm run dev').should('not.be.visible')
    })

    it('Install Cypress correctly', () => {
        cy.contains('npm install cypress --save-dev').should('not.be.visible')

        cy.getDataTest('accordion-item-4').within(() => {
            cy.get('[role="button"]')
        }).as('install-cypress-button')

        cy.get('@install-cypress-button').click()

        cy.contains('npm install cypress --save-dev').should('be.visible')

        cy.get('@install-cypress-button').click()

        cy.contains('npm install cypress --save-dev').should('not.be.visible')
    })

    it('open and configure cypress correctly', () => {
        cy.contains('npx cypress open').should('not.be.visible')

        cy.getDataTest('accordion-item-5').within(() => {
            cy.get('[role="button"]')
        }).as('open-and-configure-cypress-button')

        cy.get('@open-and-configure-cypress-button').click()

        cy.contains('npx cypress open').should('be.visible')

        cy.get('@open-and-configure-cypress-button').click()

        cy.contains('npx cypress open').should('not.be.visible')
    })





})