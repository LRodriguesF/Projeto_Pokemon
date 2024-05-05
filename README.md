**Automação com Cypress e Cucumber: Testes do Pokemon validando API em conjunto com o Front-end**
Este projeto contém testes automatizados desenvolvidos com Cypress e Cucumber para verificar a funcionalidade de pesquisa de Pokemon no site Pokémon Database. O objetivo deste projeto é demonstrar como criar e executar testes automatizados usando o framework Cypress em conjunto com o Cucumber, bem como fornecer um exemplo prático de automação de testes em uma aplicação web real.

**Funcionalidade Testada**
O teste automatizado abrange a seguinte funcionalidade:

Pesquisa de Pokemon: Verifica se as informações coletadas da API de Pokemon são consistentes com as informações exibidas no site Pokémon Database para o Pokemon especificado.
**Pré-requisitos**
Antes de executar os testes, certifique-se de ter o seguinte instalado em seu ambiente de desenvolvimento:

Node.js
Cypress
Cucumber
Instalação
Siga estas etapas para configurar o projeto e instalar as dependências:

Clone este repositório para o seu ambiente de desenvolvimento:
bash
Copy code
git clone https://github.com/seu-usuario/pokemon-automation.git
Navegue até o diretório do projeto:
bash
Copy code
cd pokemon-automation
Instale as dependências do projeto:
bash
Copy code
npm install
Executando os Testes
Para executar os testes automatizados, siga estas etapas:

Abra o Cypress Test Runner:
bash
Copy code
npm run cypress:open
Selecione o arquivo de teste pokemon.feature na interface do Cypress.
Aguarde até que o navegador seja aberto e os testes sejam executados automaticamente.
Estrutura do Projeto
O projeto segue a seguinte estrutura de diretórios:

cypress/integration: Contém os arquivos de teste Cypress.
cypress/support: Contém arquivos de suporte, como comandos personalizados.
cypress/plugins: Contém plugins Cypress, se houver.
cypress/cucumber: Contém os arquivos de configuração do Cucumber.
cypress.json: Arquivo de configuração do Cypress.
package.json: Arquivo de manifesto do Node.js com as dependências do projeto e scripts de execução.
Contribuição
Contribuições são bem-vindas! Se você deseja contribuir para este projeto, por favor, siga estas etapas:

Fork este repositório.
Crie uma branch para sua nova feature (git checkout -b feature/nova-feature).
Faça commit de suas alterações (git commit -am 'Adiciona nova feature').
Faça push para a branch (git push origin feature/nova-feature).
Crie um novo Pull Request.
