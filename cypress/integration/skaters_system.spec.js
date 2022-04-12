
describe("Smoke Test", () => {
    it("frontepage can be opened", () => {
        cy.visit("http://localhost:3000/Login");
        cy.contains("Skate Park");
    });

    it("Click test Input Email", () => {
        cy.visit("http://localhost:3000/Login");
        cy.get("input:first").type("admin");
        cy.get('input:last').type("admin")
        cy.contains("Ingresar").click();
    });

    it("Click test boton Registro", () => {
        cy.visit("http://localhost:3000/Login");
        cy.contains('Registrate').click()
    });
});