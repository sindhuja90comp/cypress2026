describe('Various examples', () => {
    beforeEach(() => {
        cy.visit('/examples')
    })

    it('multi-page-testing', () => {
        //cy.get('[dataTest = "nav-why-cypress"]').click()
        cy.getdataTest("nav-why-cypress").click()
        cy.location("pathname").should("equal", "/")

        cy.getdataTest("nav-overview").click()
        cy.location("pathname").should("equal", "/overview")

        cy.getdataTest("nav-fundamentals").click()
        cy.location("pathname").should("equal", "/fundamentals")

        cy.getdataTest("nav-forms").click()
        cy.location("pathname").should("equal", "/forms")

        cy.getdataTest("nav-component").click()
        cy.location("pathname").should("equal", "/component")

        cy.getdataTest("nav-best-practices").click()
        cy.location("pathname").should("equal", "/best-practices")

    })

    //intercept a request - meaning, listen to a HTTP request sent and get data from the response; mocking/stabbing
    it('intercepts test', () => {
        cy.intercept("POST", 'http://localhost:3000/examples', {
            body: {
                message: 'succesfully intercepted request'
            }
        })
        cy.getDataTest('post-button').click()
    })

    //return fixture instead of body while intercepting
    it('intercepts a request and return fixture', () => {
        cy.intercept("POST", "http://localhost:3000/examples", {
            fixture: 'example.json'
        })
        cy.getDataTest('post-button').click()
    })

    //important methods to know in cypress .its() .invoke() cy.request() .within()
    it.only('inputs grudge text', () => {
        cy.contains(/add Some Grudges/i).should('be.visible')

        cy.getDataTest('add-grudge-input').within(() => {
            cy.get('input').type('some grudge')
        })
        cy.getDataTest('clear-grudge-btn').should('not.exist')

        cy.getDataTest('grudge-list').within(() => {
            cy.get('li').should('have.length', 0)
        })
        cy.getDataTest('grudge-list-title').should('have.text', 'Add Some Grudges')

        cy.getDataTest('add-grudge-button').click()

        cy.getDataTest('grudge-list-title').should('have.text', 'Grudges')

        cy.getDataTest('grudge-list').within(() => {
            cy.get('li').should('have.length', 1)
        })
        cy.getDataTest('add-grudge-input').within(() => {
            cy.get('input').type('this is second grudge')
        })
        cy.getDataTest('add-grudge-button').click()

        cy.getDataTest('grudge-list').within(() => {                      //.within() method
            cy.get('li').should('have.length', 2)
            cy.get('li').its(0).should('contain.text', 'some grudge')     //.its() method 
        })
        cy.getDataTest('grudge-list').within(() => {
            cy.get('li').its(0).within(() => {
                cy.getDataTest('delete-grudge-btn').click()
            })
            cy.get('li').should('have.length', 1)
            cy.get('li').its(0).should('contain.text', 'this is second grudge')
        })
        cy.getDataTest('clear-grudge-btn').click()

        cy.getDataTest('clear-grudge-btn').should('not.exist')

        cy.getDataTest('grudge-list').within(() => {
            cy.get('li').should('have.length', 0)
        })
        cy.getDataTest('grudge-list-title').should('have.text', 'Add Some Grudges')

    })








})