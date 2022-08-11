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
describe('Pesquisa de pokemon via FrontEnd comparando com as informações armazenadas da API', () => {
  beforeEach(() => {
    cy.visit('https://pokemondb.net/pokedex/pikachu')
  });

  it('Validar nome pokemon Front', () =>{
    cy.get('#main').contains(Cypress.env('nomePokemon'))
  })
     
  it('Validar id pokemon front', () =>{
    cy.get('#tab-basic-25 > :nth-child(1) > :nth-child(2) > .vitals-table > tbody > :nth-child(1) > td').contains(Cypress.env('idPokemon'))
  })

  it('Validar habilidade pokemon', () =>{
    cy.get('td > span.text-muted > a').contains(Cypress.env('habilidadePokemon'),{matchCase: false})
  })

  it('Validar tipo pokemon', () =>{
   cy.get('#tab-basic-25 > :nth-child(1) > :nth-child(2) > .vitals-table > tbody > :nth-child(2) > td > .type-icon').contains(Cypress.env('tipoPokemon'),{matchCase: false})
   })
})
