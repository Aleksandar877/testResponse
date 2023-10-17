export class LookUpPage {

    searchDomain(domainName) {
        cy.get('#rdapLookup').type(domainName)
    }

    clickLookup() {
        cy.get('#gtm-rdap-click').click()
    }

    clickRDAPResponseTab() {
        cy.get('.tabs').find('span').contains('Technical RDAP Response').click()
    }

    verifyNameServerValue() {
        cy.get('pre').should('contain', 'https://rdap.nominet.uk/wales/domain/ourhomeonline.wales')
    }
}

export const lookUpPage = new LookUpPage()