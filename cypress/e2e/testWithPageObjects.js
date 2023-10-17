const { lookUpPage } = require("../support/page_objects/lookUpPage")

describe('Test domain names', () => {
    beforeEach('Open application', () => {
        cy.openHomePage()
    })

    it.only('verify navigation accros the pages', () => {
        lookUpPage.searchDomain('ourhomeonline.wales')
        lookUpPage.clickLookup()
        lookUpPage.clickRDAPResponseTab()
        lookUpPage.verifyNameServerValue()
    })
})