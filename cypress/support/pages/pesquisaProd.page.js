
export const pesquisaProduto = {
    get digitaProduto() {return cy.get('#tbay-header .tbay-search')},
    get listaProdutos() {return cy.get(`.ui-menu-item:not([class^="list-header"]) > a`)},
    search(product) {this.digitaProduto.type(product)}
}