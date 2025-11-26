// Custom Cypress commands

declare namespace Cypress {
    interface Chainable<Subject> {
        /**
         * Get an element by its data-test-id attribute.
         * @example cy.getTestId('submit_button')
         */
        getTestId(id: string): Chainable<JQuery<HTMLElement>>;
    }
}

Cypress.Commands.add('getTestId', (id: string) => {
    return cy.get(`[data-test-id="${id}"]`);
});
