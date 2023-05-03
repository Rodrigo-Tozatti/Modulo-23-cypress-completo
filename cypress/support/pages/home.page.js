
export const homePage = {
    get botaoLupa() {return cy.xpath(`//*[@id="tbay-header"]/div/div/div/div[2]/div/div[4]`)},
    pesquisaLupa() {this.botaoLupa.click()}
}