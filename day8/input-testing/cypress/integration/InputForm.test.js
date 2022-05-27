/// <reference types="cypress"/>

describe("Basic testing",function(){
    it("should not crash",function(){
        cy.visit("http://localhost:3000");
        cy.get(".inputTag").should("exist");
    });
    it("should type somethong",function(){
        const text = "My name is Parth Bisht";
        cy.visit("http://localhost:3000");
        cy.get(".inputTag").type("My name is Parth Bisht").should("have.value",text);
    })
})