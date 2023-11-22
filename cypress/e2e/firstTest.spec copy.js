/// <reference types="cypress" /> 
//enables intellisense
describe('First test suite', () => {

    it('first test', () => {

        //by tag name
        cy.get('input')

        //by ID
        cy.get('#inputEmail1')

        //by class value
        cy.get('.input-full-width')

        //by Attribute name
        cy.get('[fullwidth]')

        //by Attribute and value
        cy.get('[placeholder="Email"]')

        //by entire Class value
        cy.get('[class="input-full-width....."]')

        //by two attributes
        cy.get('[placeholder="Email"][fullwidth]')

        //by tag, attribute, id and class copy all one after another 

        //cypress test ID - recommended ways 
        cy.get('[data-cy="inputEmail1"]')


    })

    it.only('second test', () => {

        cy.visit('/') //base url already in cypress config file

        cy.get('[type="search"]').type('WOO')
        cy.get('[type="submit"]').click
        cy.contains('[class="btn btn-primary"]','Add to cart').click
        
    })


})

    // describe('Second test suite', () => {

    //     describe('suite section', () => {
    
    //         beforeEach('first test', () => {
    //             //code of test 
        
    //         })
    
    //         it('second test', () => {
    //             //code of test 
                
    //         })
    //     })



//})



    // How to find web elements
    //get() - find elements on the page by locator globally
    //find() - find child elements by locator
    //contains() - find HTML text and by text and locator

