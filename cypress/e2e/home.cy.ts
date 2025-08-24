describe("template spec", () => {
  it('h1 contains correct text.', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('hero-heading').contains('Testing Next.js Applications with Cypress')
  })
})
