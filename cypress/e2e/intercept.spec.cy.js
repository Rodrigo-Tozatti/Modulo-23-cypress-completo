
import { homePage } from "../support/Pages/home.pages";
import { selProdPage } from "../support/Pages/selProd.page";

describe('Selecionar produto', () => {

  beforeEach(() => {
    cy.visit('')
  });

  it('deve preencher a busca e retornar produtos corretor', () => {
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
            ${JSON.stringify(
              [{"label":"EBAC Jacket","link":"http:\/\/lojaebac.ebaconline.art.br\/product\/ingrid-running-jacket\/","result":"15 result found with <span>\"jacket\"<\/span> ","view_all":true,"image":"http:\/\/lojaebac.ebaconline.art.br\/wp-content\/uploads\/2021\/05\/wj04-white_main-160x130.jpg","price":"<span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#82;&#36;<\/span>84,00<\/bdi><\/span>"},{"label":"Augusta Pullover Jacket","link":"http:\/\/lojaebac.ebaconline.art.br\/product\/augusta-pullover-jacket\/","result":"15 result found with <span>\"jacket\"<\/span> ","view_all":true,"image":"http:\/\/lojaebac.ebaconline.art.br\/wp-content\/uploads\/2021\/05\/wj03-red_main-160x130.jpg","price":"<span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#82;&#36;<\/span>57,00<\/bdi><\/span>"},{"label":"Josie Yoga Jacket","link":"http:\/\/lojaebac.ebaconline.art.br\/product\/josie-yoga-jacket\/","result":"15 result found with <span>\"jacket\"<\/span> ","view_all":true,"image":"http:\/\/lojaebac.ebaconline.art.br\/wp-content\/uploads\/2021\/05\/wj02-gray_main-160x130.jpg","price":"<span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#82;&#36;<\/span>56,25<\/bdi><\/span>"},{"label":"Stellar Solar Jacket","link":"http:\/\/lojaebac.ebaconline.art.br\/product\/stellar-solar-jacket\/","result":"15 result found with <span>\"jacket\"<\/span> ","view_all":true,"image":"http:\/\/lojaebac.ebaconline.art.br\/wp-content\/uploads\/2021\/05\/wj01-red_main-160x130.jpg","price":"<span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#82;&#36;<\/span>75,00<\/bdi><\/span>"},{"label":"Typhon Performance Fleece-lined Jacket","link":"http:\/\/lojaebac.ebaconline.art.br\/product\/typhon-performance-fleece-lined-jacket\/","result":"15 result found with <span>\"jacket\"<\/span> ","view_all":true,"image":"http:\/\/lojaebac.ebaconline.art.br\/wp-content\/uploads\/2021\/05\/mj11-black_main-160x130.jpg","price":"<span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#82;&#36;<\/span>60,00<\/bdi><\/span>"}]
            )}
          )`
        }
      )
    })
    homePage.pesquisaLupa()
    selProdPage.pesquisar('jacket')
    selProdPage.listaProdutos.first().should('have.attr', 'title', 'EBAC Jacket')
  })
})

