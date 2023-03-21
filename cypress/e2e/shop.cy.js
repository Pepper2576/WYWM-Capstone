/// <reference types="cypress" />

describe("Shop page test", () => {
	it("Test the functions of the shop page and Modal", () => {
		cy.visit("http://localhost:3000/shop");
		cy.url().should("include", "/shop");
		cy.get("[data-cy=1]").click();
		cy.get("[data-cy=modalBtn]").click();
		cy.get('[data-cy="cartSubtotal"]').should("contain", `£50`);
		cy.get('[data-cy="cartSubtotalTax"]').should("contain", `£55`);
		cy.get('[data-cy="totalPlusShipping"]').should("contain", `£75`);

		cy.get("[data-cy=removeAllBtn]").contains("Remove All").click();
		cy.get("[data-cy=checkoutBtn]").contains("Checkout");
		cy.get("[data-cy=modalCloseBtn]").contains("X").click();
		cy.request({
			method: "GET",
			url: "http://localhost:3000/",
		}).then((response) => {
			expect(response.status).to.eq(200);
		});
	});
});
