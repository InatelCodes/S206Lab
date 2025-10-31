# S206Lab - Qualidade de Software

Este repositório contém os testes automatizados desenvolvidos durante a disciplina de Qualidade de Software (S206-LAB).

## Testes Implementados

### Lista 1 - Testes no Site Sauce Demo
Arquivo: `cypress/e2e/Lista1.cy.js`

Casos de teste implementados:
1. Login com sucesso
2. Login com falha (usuário bloqueado)
3. Adição de produto ao carrinho
4. Remoção de produto do carrinho
5. Ordenação de produtos
6. Checkout completo

## Pré-requisitos

- Node.js instalado
- NPM (Node Package Manager) instalado

## Instalação

1. Clone este repositório:
```bash
git clone https://github.com/InatelCodes/S206Lab.git
cd S206Lab
```

2. Instale as dependências:
```bash
npm install
```

## Como Executar os Testes

### Interface Gráfica do Cypress
Para abrir o Cypress em modo interativo:
```bash
./node_modules/.bin/cypress open
```

### Modo Headless (Terminal)
Para executar todos os testes e gerar o relatório:
```bash
./node_modules/.bin/cypress run
```

Para executar um arquivo específico:
```bash
./node_modules/.bin/cypress run --spec "cypress/e2e/Lista1.cy.js"
```

## Relatório de Testes

Os relatórios de teste são gerados automaticamente após a execução em modo headless e podem ser encontrados em:
```
cypress/reports/html/
```

## Estrutura do Projeto

- `cypress/e2e/` - Arquivos de teste
  - `Lista1.cy.js` - Testes do site Sauce Demo
  - `ExemploAula2.cy.js` - Exemplos da aula
- `cypress/support/` - Arquivos de suporte
  - `commands.js` - Comandos customizados do Cypress
- `cypress/reports/html/` - Relatórios de teste gerados
- `cypress.config.js` - Configurações do Cypress

## Notas Adicionais

- O site testado (Sauce Demo) utiliza usuários pré-definidos para teste:
  - `standard_user`: Usuário padrão para testes normais
  - `locked_out_user`: Usuário bloqueado (usado no teste negativo)
  - `problem_user`: Usuário com comportamentos problemáticos
  - `performance_glitch_user`: Usuário com problemas de performance

- Todos os testes incluem asserções para verificar o comportamento esperado
- O projeto utiliza o reporter Mochawesome para gerar relatórios HTML detalhados
