## Visão Geral do Projeto

Explicações

Utilizei custom commands por ser o padrão na documentação do cypress
Como é um projeto pequeno deixei os testes de API e front aqui no mesmo projeto

## Instalação

Para começar com este projeto, siga estes passos:

```bash
# Clone o repositório
git clone https://github.com/lucasforlinn/serverest-ntt.git

# Navegue até o diretório do projeto
cd serverest-ntt

# Instale as dependências
npm install
```

## Uso

Este projeto permite executar testes automatizados contra a API ServerEST. Para executar os testes:

```bash
# Execute os testes Cypress em modo headless
npx cypress run

# Abra o Test Runner do Cypress
npx cypress open
```

## Estrutura do Projeto

```
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
```