/// <reference types="cypress" />
describe("Get a 200 status from home endpoint", () => {
	it("Get a 200 status", () => {
		cy.visit("http://localhost:3000/shop");
		cy.url().should("include", "/shop");
		cy.request({
			method: "GET",
			url: "http://localhost:3000/",
		}).then((response) => {
			expect(response.status).to.eq(200);
		});
	});
});

describe("Test 3 elements are being rendered", () => {
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

describe("Test adding item to shopping cart", () => {
	it("Add item to shopping cart", () => {
		cy.visit("http://localhost:3000/shop");
		cy.url().should("include", "/shop");
		cy.get("[data-cy=1]").click();
		cy.get("[data-cy=modalBtn]").click();
	});
});

describe("Test cart calculations subtotal, with 10% tax & total with shipping", () => {
	it("Cart calculations ", () => {
		cy.visit("http://localhost:3000/shop");
		cy.url().should("include", "/shop");
		cy.get("[data-cy=1]").click();
		cy.get("[data-cy=modalBtn]").click();
		cy.get('[data-cy="cartSubtotal"]').should("contain", `£50`);
		cy.get('[data-cy="cartSubtotalTax"]').should("contain", `£55`);
		cy.get('[data-cy="totalPlusShipping"]').should("contain", `£75`);
	});
});
describe("Test adding item to shopping cart", () => {
	it("Add item to shopping cart", () => {
		cy.visit("http://localhost:3000/shop");
		cy.url().should("include", "/shop");
		cy.get("[data-cy=1]").click();
		cy.get("[data-cy=modalBtn]").click();
		cy.get("[data-cy=removeAllBtn]").contains("Remove All").click();
		cy.get("[data-cy=checkoutBtn]").contains("Checkout");
		cy.get("[data-cy=modalCloseBtn]").contains("X").click();
	});
});
