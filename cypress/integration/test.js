describe("Tests", function(){
    it("test 1", function(){
        cy.visit("https://factumsoft.com/")
        cy.get(':nth-child(7) > .navbar-factum').should("have.text", "Contact us")
        cy.get('.subscribe-content > h1').should("have.text", "Additional resources to help you grow")
        cy.get('.nav-links > :nth-child(1) > .navbar-factum').should("have.text", "Home")
        cy.get("[onclick=\"onTabChange(3, 'tab-items1', 'tab-contents1', 'tab-item-active')\"] > p").should("have.text", "HR Management")
        cy.get(':nth-child(4) > .navbar-factum').should("have.text", "Partnership")
        cy.get('.ft-module3-sub > ul > :nth-child(6) > .footer_factumText').should("have.text", "Partnership Program")
    })
    it("test 2 (HW3.2-3)", function(){
        cy.visit("https://factumsoft.com/")
        cy.get(':nth-child(9) > .footer_factumText').should("have.text", "ERP Module")
        cy.get(':nth-child(4) > .navbar-factum').should("have.text", "Partnership")
        cy.get('.ft-module3 > h5').should("have.text", "QUICK LINKS")
    })
})
