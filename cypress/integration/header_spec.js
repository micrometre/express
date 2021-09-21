describe('Home Page test logo/ brand tesst', () => {
  it('Visits hmoe localhost', () => {
    cy.visit('localhost:9998')

    // Should be on a new URL which includes '/commands/actions'
        cy.contains('icrometre').click()
    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/')
  })
})

