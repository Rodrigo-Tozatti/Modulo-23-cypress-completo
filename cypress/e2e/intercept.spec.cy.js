
import { homePage } from "../support/Pages/home.pages";
import { selProdPage } from "../support/Pages/selProd.page";
const dados_padrao = require ('../fixtures/dados_padrao.json')

describe('Selecionar produto', () => {

  before(() => {
    cy.intercept({
      method: 'GET',
      url: 'wp-admin/admin-ajax*',
      query: {
        term: 'Jacket'
      }
    }, req => {
      req.reply(
        {
          statusCode: 200,
          body: `${req.query.callback}(
            ${JSON.stringify(dados_padrao.codigo)}
          )`
        }
      )
    })
  });
  
  beforeEach(() => {
    cy.visit('')
  });

  it('deve preencher a busca e retornar produtos corretor', () => {

    homePage.pesquisaLupa()
    selProdPage.pesquisar('jacket')
    selProdPage.listaProdutos.first().should('have.attr', 'title', 'EBAC Jacket')
  })
})

