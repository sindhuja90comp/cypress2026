describe('Fundamentals test', () => {
  beforeEach(() => {
    cy.visit('/fundamentals')
  })

  it('Contains correct Header text', () => {
    cy.getDataTest('fundamentals-header').contains('Testing Fundamentals')
    //cy.get('[data-test="fundamentals-header"]').contains('Testing Fundamentals')
    cy.get('[data-test="fundamentals-header"]').contains(/Testing Fundamentals/i)
    cy.get('[data-test="fundamentals-header"]').should('contain.text', 'Testing Fundamentals')
  })

  it('Accordion works correctly',() => {
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
  })

  it('Accordion 2 works correctly', () => {
    cy.contains(/Testing Fundamentals/i)
    cy.contains(/Within your describe block, you will also have it blocks/i).should('not.be.visible')
    cy.get('[data-test="accordion-item-2"] div[role="button"]').click()
    cy.contains(/Within your describe block, you will also have it blocks/i).should('be.visible')
    cy.get('[data-test="accordion-item-2"] div[role="button"]').click()
    cy.contains(/Within your describe block, you will also have it blocks/i).should('not.be.visible')
  })
  it('Accordion 3 works correctly', () => {
    cy.contains(/Testing Fundamentals/i)
    cy.contains(/Cypress gives you various commands to help you test/i).should('not.be.visible')
    cy.get('[data-test="accordion-item-3"] div[role="button"]').click()
    cy.contains(/Cypress gives you various commands to help you test/i).should('be.visible')
    cy.get('[data-test="accordion-item-3"] div[role="button"]').click()
    cy.contains(/Cypress gives you various commands to help you test/i).should('not.be.visible')
  })




})
