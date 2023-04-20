
export const homePage = {
    get lupa() { return cy.get('.site-header .search-form > button') },
    pesquisaLupa() {this.lupa.click()}
}



/*class homePages {
    
    pesquisa() {
        cy.get('.site-header .search-form > button').click()
    }
}
export default new homePages()*/

