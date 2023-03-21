/// <reference types="cypress" />

describe("Nav bar test", () => {
	it("Navigate though Nav bar", () => {
		cy.visit("http://localhost:3000/");
		cy.get("h5").contains("Who are we?");
		cy.get("[data-cy=shopLink]").contains("Shop").click();
		cy.url().should("include", "/shop");
		cy.get("[data-cy=cartLink]").click();
		cy.url().should("include", "/cart");
		cy.get("[data-cy=indexLink]").contains("Home").click();
		cy.url().should("include", "/");
	});
});
