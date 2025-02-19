describe('User sign up', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.get('#sign').click()
  })

  const fillSignUpForm = (name: string, email: string, password: string) => {
    cy.get('[data-testID="full-name"]').type(name)
    cy.get('[data-testID="email"]').type(email)
    cy.get('[data-testID="password"]').type(password)
    cy.get('[data-testID="confirm-password"]').type(password)
  }

  it('should fill up the form and sign up a new user', () => {
    cy.intercept('POST', '/api/auth/signup', { statusCode: 201 }).as('signup')

    fillSignUpForm('John Doe', 'john.doe@mail.com', 'teste1234')
    cy.get('[data-testID="submit-btn"]').click()

    cy.wait('@signup')
    cy.location('pathname').should('contains', '/home')
  })

  it('should fill up the form and inform user is already registered', () => {
    cy.intercept('POST', '/api/auth/signup', { statusCode: 403 }).as('signup')

    fillSignUpForm('John Doe', 'john.doe@mail.com', 'teste1234')
    cy.get('[data-testID="submit-btn"]').click()

    cy.wait('@signup')
    cy.get('[data-testID="error-msg"]').should('be.visible')
  })
})
