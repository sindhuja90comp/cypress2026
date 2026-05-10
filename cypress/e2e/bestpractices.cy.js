describe('best practices tests', () => {
    beforeEach(() => {
        cy.visit('/best-practices')
    })

    it('validates the h1', () => {
        cy.getDataTest('best-practices').contains('Best Practices (recommended by Cypress)')
    })

    it('validates best practice #1 dropdown', () => {
        cy.getDataTest('accordion-item-1').within(() => {
            cy.get('[role="button"]').as('#1-dropdown')
        })
        cy.get('@#1-dropdown').click()
        cy.contains(`Don't just test the 'happy path' of the user`).should('exist.and.be.visible')
        cy.contains(`Use data-* attributes to provide context to your selectors`).should('be.exist')
        cy.contains(`Use data-* attributes to provide context to your selectors`).should('not.be.visible')
        cy.get('@#1-dropdown').click()
        cy.contains(`Don't just test the 'happy path' of the user`).should('exist.and.not.be.visible')
        cy.contains(`Use data-* attributes to provide context to your selectors`).should('be.exist')
        cy.contains(`Use data-* attributes to provide context to your selectors`).should('not.be.visible')
    })
    it('validates best practice #2 dropdown', () => {
        cy.getDataTest('accordion-item-2').within(() => {
            cy.get('[role="button"]').as('#2-dropdown')
        })
        cy.contains(`Use data-* attributes to provide context to your selectors`).should('exist.and.not.be.visible')
        cy.get('@#2-dropdown').click()
        cy.contains(`Use data-* attributes to provide context to your selectors`).should('exist.and.be.visible')

        cy.get('@#2-dropdown').click()
        cy.contains(`Use data-* attributes to provide context to your selectors`).should('exist.and.not.be.visible')
    })

    it('validates best practice #3 dropdown', () => {
        cy.getDataTest('accordion-item-3').within(() => {
            cy.get('[role="button"]').as('#3-dropdown')
        })
        cy.contains(`Cypress does NOT run synchonously. See *docs`).should('exist.and.not.be.visible')
        cy.get('@#3-dropdown').click()
        cy.contains(`Cypress does NOT run synchonously. See *docs`).should('exist.and.be.visible')

        cy.get('@#3-dropdown').click()
        cy.contains(`Cypress does NOT run synchonously. See *docs`).should('exist.and.not.be.visible')

    })

    it('validates best practice #4 dropdown', () => {
        cy.getDataTest('accordion-item-4').within(() => {
            cy.get('[role="button"]').as('#4-dropdown')
        })
        cy.contains(`Only test websites that you control`).should('exist.and.not.be.visible')
        cy.get('@#4-dropdown').click()
        cy.contains(`Only test websites that you control`).should('exist.and.be.visible')

        cy.get('@#4-dropdown').click()
        cy.contains(`Only test websites that you control`).should('exist.and.not.be.visible')

    })

    it('validates best practice #5 dropdown', () => {
        cy.getDataTest('accordion-item-5').within(() => {
            cy.get('[role="button"]').as('#5-dropdown')
        })
        cy.contains(`Don't make one test dependent on another`).should('exist.and.not.be.visible')
        cy.get('@#5-dropdown').click()
        cy.contains(`Don't make one test dependent on another`).should('exist.and.be.visible')

        cy.get('@#5-dropdown').click()
        cy.contains(`Don't make one test dependent on another`).should('exist.and.not.be.visible')

    })

    it('validates best practice #6 dropdown', () => {
        cy.getDataTest('accordion-item-6').within(() => {
            cy.get('[role="button"]').as('#6-dropdown')
        })
        cy.contains(`Writing tiny tests, like unit tests, is non-performant and excessive`).should('exist.and.not.be.visible')
        cy.get('@#6-dropdown').click()
        cy.contains(`Writing tiny tests, like unit tests, is non-performant and excessive`).should('exist.and.be.visible')

        cy.get('@#6-dropdown').click()
        cy.contains(`Writing tiny tests, like unit tests, is non-performant and excessive`).should('exist.and.not.be.visible')

    })

     it('validates best practice #7 dropdown', () => {
        cy.getDataTest('accordion-item-7').within(() => {
            cy.get('[role="button"]').as('#7-dropdown')
        })
        cy.contains(`Don't clean up state with after or afterEach`).should('exist.and.not.be.visible')
        cy.get('@#7-dropdown').click()
        cy.contains(`Don't clean up state with after or afterEach`).should('exist.and.be.visible')

        cy.get('@#7-dropdown').click()
        cy.contains(`Don't clean up state with after or afterEach`).should('exist.and.not.be.visible')

    })

     it('validates best practice #8 dropdown', () => {
        cy.getDataTest('accordion-item-8').within(() => {
            cy.get('[role="button"]').as('#8-dropdown')
        })
        cy.contains(`Use route aliases or assertions to guard Cypress`).should('exist.and.not.be.visible')
        cy.get('@#8-dropdown').click()
        cy.contains(`Use route aliases or assertions to guard Cypress`).should('exist.and.be.visible')

        cy.get('@#8-dropdown').click()
        cy.contains(`Use route aliases or assertions to guard Cypress`).should('exist.and.not.be.visible')

    })



})