Explicações

- Utilizei custom commands por ser o padrão na documentação do cypress
- Como é um projeto pequeno deixei os testes de API e front aqui no mesmo projeto


Índice
Instalação

Uso

Funcionalidades

Estrutura do Projeto

Executando Testes

Contribuindo

Licença

Instalação
Para começar com este projeto, siga estes passos:

bash
# Clone o repositório
git clone https://github.com/lucasforlinn/serverest-ntt.git

# Navegue até o diretório do projeto
cd serverest-ntt

# Instale as dependências
npm install
Uso
Este projeto permite executar testes automatizados contra a API ServerEST. Para executar os testes:

bash
# Execute os testes Cypress em modo headless
npm test

# Abra o Test Runner do Cypress
npm run cypress:open
Funcionalidades
Testes de API automatizados usando Cypress

Scripts de teste baseados em JavaScript

Ambientes de teste configuráveis

Cobertura de testes abrangente para endpoints do ServerEST

Estrutura do Projeto
text
serverest-ntt/
├── cypress/
│   ├── e2e/           # Arquivos de teste
│   ├── fixtures/      # Dados de teste
│   ├── support/       # Arquivos de suporte e comandos personalizados
├── .gitignore         # Arquivo Git ignore
├── cypress.config.js  # Configuração do Cypress
├── package.json       # Dependências e scripts do projeto
├── package-lock.json  # Arquivo de lock de dependências
└── README.md          # Documentação do projeto