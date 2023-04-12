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
	it("Cart calculations", () => {
		cy.visit("http://localhost:3000/shop");
		cy.url().should("include", "/shop");
		const itemRandom = Math.floor(Math.random() * 7) + 1;
		cy.get(`[data-cy=${itemRandom}]`).click();
		cy.get("[data-cy=modalBtn]").click();
		const random = parseInt(Math.floor(Math.random() * 10));
		cy.get('[data-cy="qty"]').type(random);
		cy.get(".discription > :nth-child(2)").then(($price) => {
			const price = parseFloat($price.text().replace("£", ""));
			cy.get('[data-cy="qty"]').then(($qty) => {
				const qty = parseInt($qty.val());
				const subtotal = price * qty;
				const tax = subtotal * 1.1;
				const total = subtotal * 1.1 + 20;
				cy.get('[data-cy="cartSubtotal"]').should("contain", `£${subtotal}`);
				cy.get('[data-cy="cartSubtotalTax"]').should(
					"contain",
					`£${tax.toFixed(2)}`
				);
				cy.get('[data-cy="totalPlusShipping"]').should(
					"contain",
					`£${total.toFixed(2)}`
				);
			});
		});
		cy.get("[data-cy=removeAllBtn]").contains("Remove All").click();
		cy.get("[data-cy=emptyCart]").contains("Cart Empty");
	});
});

describe("Test removing all item function in shopping cart", () => {
	it("Remove all items from cart", () => {
		cy.visit("http://localhost:3000/shop");
		cy.url().should("include", "/shop");
		cy.get("[data-cy=1]").click();
		cy.get("[data-cy=modalBtn]").click();
		cy.get("[data-cy=checkoutBtn]").contains("Checkout");
		cy.get(".countHandler > :nth-child(3)").click();
		cy.get(".countHandler > :nth-child(1)").click();
		cy.get(".countHandler > :nth-child(1)").click();
		cy.get("[data-cy=emptyCart]").contains("Cart Empty");
		cy.get("[data-cy=modalCloseBtn]").contains("X").click();
		cy.get("[data-cy=1]").click();
		cy.get("[data-cy=2]").click();
		cy.get("[data-cy=3]").click();
		cy.get("[data-cy=4]").click();
		cy.get("[data-cy=5]").click();
		cy.get("[data-cy=6]").click();
		cy.get("[data-cy=7]").click();
		cy.get("[data-cy=modalBtn]").click();
		cy.get("[data-cy=removeAllBtn]").contains("Remove All").click();
		cy.get("[data-cy=emptyCart]").contains("Cart Empty");
		cy.get("[data-cy=modalCloseBtn]").contains("X").click();
	});
});
