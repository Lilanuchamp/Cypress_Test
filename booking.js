describe('CP Portugal Ticket Booking Automation', () => {
    it('Navigates, selects tickets, cancels, and validates search parameters', () => {
      const departureCity = 'Lagos';
      const arrivalCity = 'Porto - Campanha';
      const today = new Date();
      const departDate = new Date(today);
      const returnDate = new Date(today);
      
      departDate.setDate(today.getDate() + 3); // 3 days from today
      returnDate.setDate(today.getDate() + 5); // 5 days from today
      
      const formattedDepartDate = departDate.toISOString().split('T')[0]; // Format date for input
      const formattedReturnDate = returnDate.toISOString().split('T')[0];
  
      cy.visit('https://www.cp.pt/passageiros/en/buy-tickets');
  
      cy.get('#departure').type(departureCity);
      cy.get('#arrival').type(arrivalCity);
      cy.get('#departDate').type(formattedDepartDate);
      cy.get('#returnDate').type(formattedReturnDate);
      cy.get('#submitButton').click(); // Assuming there's an ID for submission
  
      cy.contains('Cancel').click(); // Clicks the "Cancel" button
  
      // Validate that search parameters persist after cancellation
      cy.get('#departure').should('have.value', departureCity);
      cy.get('#arrival').should('have.value', arrivalCity);
      cy.get('#departDate').should('have.value', formattedDepartDate);
      cy.get('#returnDate').should('have.value', formattedReturnDate);
    });
  });