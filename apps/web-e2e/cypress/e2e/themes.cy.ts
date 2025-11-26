describe('Themes', () => {

    it('should navigate to spotlight au', () => {
        cy.visit('/')
        cy.getTestId('locale_link_spotlight_au').click()
        cy.url().should('include', '/spotlight/au')
    });


    it('should navigate to spotlight nz', () => {
        cy.visit('/')
        cy.getTestId('locale_link_spotlight_nz').click()
        cy.url().should('include', '/spotlight/nz')
    });


    it('should navigate to spotlight my', () => {
        cy.visit('/')
        cy.getTestId('locale_link_spotlight_my').click()
        cy.url().should('include', '/spotlight/my')
    });


    it('should navigate to spotlight sg', () => {
        cy.visit('/')
        cy.getTestId('locale_link_spotlight_sg').click()
        cy.url().should('include', '/spotlight/sg')
    });


    it('should navigate to anaconda', () => {
        cy.visit('/')
        cy.getTestId('locale_link_anaconda_au').click()
        cy.url().should('include', '/anaconda/au')
    });


    it('should navigate to harris scarfe', () => {
        cy.visit('/')
        cy.getTestId('locale_link_harrisscarfe_au').click()
        cy.url().should('include', '/harrisscarfe/au')
    });


    it('should navigate to koo', () => {
        cy.visit('/')
        cy.getTestId('locale_link_koo_au').click()
        cy.url().should('include', '/koo/au')
    });

});