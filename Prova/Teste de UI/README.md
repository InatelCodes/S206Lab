## Prova - Teste de UI (User Interface) com Cypress

Testes automatizados para o website [Sauce Demo](https://www.saucedemo.com/) usando Cypress.

### 📋 Pré-requisitos

- **Node.js** e **npm** instalados no computador
- Conexão com a internet para acessar o site de testes

### 🚀 Instalação

1. Abra o terminal/prompt de comando na pasta do projeto
2. Execute o comando para instalar as dependências:

```bash
npm install
```

### ▶️ Rodar os Testes

**Modo interativo (interface visual do Cypress):**

```bash
./node_modules/.bin/cypress open
```

Após abrir, clique em **E2E Testing** e defina um navegador para rodar os testes.

### 📝 Casos de Teste

1. **Caso 1 - Login com credenciais válidas** ✅
   - Realiza login com usuário válido (`standard_user` / `secret_sauce`)
   - Valida acesso à página de produtos

2. **Caso 2 - Adicionar produto ao carrinho** ✅
   - Realiza login e adiciona um produto ao carrinho
   - Valida se o badge do carrinho atualiza

3. **Caso 3 - Remover produto do carrinho** ✅
   - Adiciona um produto e depois remove
   - Valida se o carrinho fica vazio

4. **Caso 4 - Login com credenciais inválidas** ❌
   - Tenta fazer login com credenciais incorretas
   - Valida se mensagem de erro é exibida (Teste Negativo)

### 📂 Estrutura do Projeto

```
cypress/
├── e2e/
│   └── prova.cy.js          # Arquivo principal com os testes
├── fixtures/
│   └── example.json         # Dados para testes
└── support/
    ├── commands.js          # Comandos customizados
    └── e2e.js               # Configurações globais

cypress.config.js             # Configuração do Cypress
package.json                  # Dependências do projeto
```