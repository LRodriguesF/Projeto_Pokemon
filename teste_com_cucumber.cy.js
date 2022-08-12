import { Given, When,Then,} from "cypress-cucumber-preprocessor/steps";

describe('API pesquisa de pokemon', () => {
  it('Busca de dados do pokemon API', () => {
    cy.request({
    method: 'GET',
    url: 'https://pokeapi.co/api/v2/pokemon/pikachu/'

    }).then((response) => {
      cy.expect(response.status).to.eql(200)
      cy.expect(response.body).to.have.property('name')
      cy.expect(response.body.name).to.eql('pikachu')
      cy.expect(response.body).to.have.property('id')
      cy.expect(response.body.id).to.eql(25) 
      cy.expect(response.body.abilities[0].ability.name).to.eql('static')
      cy.expect(response.body.types[0].type.name).to.eql('electric')

      // Armazenando informação da API
      Cypress.env('nomePokemon', response.body.name)
      Cypress.env('idPokemon', response.body.id)
      Cypress.env('habilidadePokemon', response.body.abilities[0].ability.name)
      Cypress.env('tipoPokemon',response.body.types[0].type.name)
    }) 
  })
})   
it('Pesquisa de pokemon via FrontEnd comparando com as informações armazenadas da API', () => {
  
 Given(/^que eu acesso o site do Pokemon$/, () => {
	cy.visit('https://pokemondb.net/pokedex/pikachu')
 });
 
/** Cenário 01 - Nome  */
 Then(/^eu vejo que as informações sobre o nome do Pokemon são as mesmas da API$/, () => {
	 cy.get('#main').contains(Cypress.env('nomePokemon'))
 });

/** Cenário 02 - ID*/
 Then(/^eu vejo que as informações sobre o id do Pokemon são as mesmas da API$/, () => {
	 cy.get('#tab-basic-25 > :nth-child(1) > :nth-child(2) > .vitals-table > tbody > :nth-child(1) > td').contains(Cypress.env('idPokemon'))
 });

 /** Cenário 03 - Habilidade */
 Then(/^eu vejo que as informações sobre a habilidade do Pokemon são as mesmas da API$/, () => {
	 cy.get('td > span.text-muted > a').contains(Cypress.env('habilidadePokemon'),{matchCase: false})
 });

  /** Cenário 04 - Tipo */
 Then(/^eu vejo que as informações sobre o tipo do Pokemon são as mesmas da API$/, () => {
	 cy.get('#tab-basic-25 > :nth-child(1) > :nth-child(2) > .vitals-table > tbody > :nth-child(2) > td > .type-icon').contains(Cypress.env('tipoPokemon'),{matchCase: false})
 });
})
