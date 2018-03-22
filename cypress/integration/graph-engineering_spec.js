
// const HOME_URL = "https://graph-engineering.firebaseapp.com/";
const HOME_URL = "http://localhost:3000/";

describe('basic', function () {
  it('generate line', function () {
    cy.visit(HOME_URL);
    cy.get('.toolbar-line').click();

    cy.get('svg').trigger('mousedown', { clientX: 200, clientY: 100});
    cy.get('svg').trigger('mousemove', { clientX: 300, clientY: 200});
    cy.get('svg').trigger('mouseup', { clientX: 300, clientY: 200});

    cy.get('.toolbar-select').click();

    cy.get('svg').trigger('mousedown', { clientX: 280, clientY: 180});

    cy.get('#prop-color').type("#4c4");
    cy.get('#prop-width').type("8");

    cy.get('.toolbar-select').click();
    cy.get('svg').trigger('mousedown', { clientX: 10, clientY: 10});
    
  });

  xit('select line', function () {
    cy.visit(HOME_URL);
  });

  
});


