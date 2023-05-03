
const dados_padrao = require('../fixtures/dados_padrao.json')

describe('Testes utilizando Intercept', () => {

  beforeEach(() => {
    cy.visit('')

    cy.intercept({
      method: 'GET',
      url: 'wp-admin/admin-ajax*',
      query: {
        term: dados_padrao.produto
      }
    }, req => {
      req.reply(
        {
          statusCode: 200,
          body: `${req.query.callback}(
            ${JSON.stringify(
            dados_padrao.resposta
          )}
          )`
        }
      )
    })
  });

  it('Deve preencher a pesquisa e retornar item com sucesso', () => {
    cy.lupa()
    cy.preencher_pesquisa(dados_padrao.produto)
    cy.lista_produto().should('contain', 'Augusta EBAC Jacket')
  });
})