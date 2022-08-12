Feature: Pesquisa de pokemon via FrontEnd comparando com as informações armazenadas da API

    Como uma usuária do site do pokemon
    Quero comparar as informações coletadas na API com as informação de Front end
 
Background:
    Given que eu acesso o site do Pokemon
    When eu acesso a fixa tecnica do pokemon

#-- Cenário 01 --#
Scenario: Validar nome do pokemon via Front End
    Then eu vejo que as informações sobre o nome do Pokemon são as mesmas da API

#-- Cenário 02 --#
Scenario: Validar id do pokemon via Front End
    Then eu vejo que as informações sobre o id do Pokemon são as mesmas da API
    
#-- Cenário 03  --#
Scenario: Validar habilidade do Pokemon via Front End
   Then eu vejo que as informações sobre a habilidade do Pokemon são as mesmas da API

#-- Cenário-04 --#
Scenario: Validar tipo do Pokemon via Front End
    Then eu vejo que as informações sobre o tipo do Pokemon são as mesmas da API
