describe("Test my form", function(){
    beforeEach(function (){
        cy.visit("http://localhost:3000/");
    })

    it('Add test to inputs and submit form', function (){
        cy.get('input[name="name"]')
            .type("Nyjae")
            .should("have.value", "Nyjae")

        cy.get('input[name="name"]')
            .type("a")
            .clear()
        // cy.get('.error')
        //         .contains("Name is required dummy")
            
        cy.get('input[name="email"]')
            .type("naj10000@live.com")
            .should("have.value", "naj10000@live.com")

        cy.get('input[name="email"]')
            .type("a")
            .clear()
        cy.get('.error')
            .contains('Need a valid email my guy')


        cy.get('input[name="password"]')
            .type("hjsdkjsajk")

        cy.get('[type="checkbox"]')
            .check()
            .should("be.checked")
        cy.get('form')
            .submit()
            


    })
})
