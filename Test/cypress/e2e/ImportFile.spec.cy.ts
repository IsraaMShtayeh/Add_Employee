import LoginValidation from "../support/pageobjects/loginValidation";
const loginObjValidation: LoginValidation = new LoginValidation();
describe("Login Home Page", () => {
    beforeEach(function () {
        cy.fixture('login').as('data')
        cy.fixture('employeeInfo').as('EmpInfo')
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get('@data').then((infoData: any) => {
            loginObjValidation.fillData(infoData.valid.name, infoData.valid.password)
            loginObjValidation.checkPage(infoData.valid.message)
        })
    })

    it("", () => {

cy.visit ("https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate");
cy.get('.oxd-input').eq(1).type("Israa")
cy.get('.oxd-input').eq(2).type("Muaath")
cy.get('.oxd-input').eq(3).type("shtayeh")
cy.get(' .oxd-input').eq(4).type("email@gmail.com")
 cy.get('.oxd-file-div > .oxd-icon').click({force:true})
cy.get('input[type=file]').selectFile("cypress/fixtures/file.txt",{force:true});
cy.get('.oxd-button--secondary').click({force:true})
cy.get('.orangehrm-file-preview',{timeout:30000}).should('contain','file.txt')
    });
})
