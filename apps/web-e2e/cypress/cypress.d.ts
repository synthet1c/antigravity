// cypress.d.ts
/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject = any> {
        /**
         * Get an element by its `data-test-id` attribute.
         *
         * @example cy.getTestId('submit_button')
         */
        getTestId(id: string): Chainable<JQuery<HTMLElement>>;
    }
}