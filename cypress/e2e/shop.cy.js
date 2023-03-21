/// <reference types="cypress" />

describe("Shop page test", () => {
	it("Test the functions of the shop page and Modal", () => {
		cy.visit("http://localhost:3000/shop");
		cy.url().should("include", "/shop");
		cy.get("[data-cy=1]").click();
		cy.get("[data-cy=modalBtn]").click();
		cy.get("[data-cy=removeAllBtn]").contains("Remove All").click();
		cy.get("[data-cy=checkoutBtn]").contains("Checkout");
		cy.get("[data-cy=modalCloseBtn]").contains("X").click();
	});
});
