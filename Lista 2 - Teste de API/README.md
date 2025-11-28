## Lista de Exercícios - Teste de API (Application Programming Interface) com PostMan

## Pré-requisitos
- `Node.js` (para instalar o `newman` via `npm`).
- `newman` — executor de coleções Postman.
- `htmlextra` (reporter opcional para gerar relatórios HTML bonitos).

## Instalação rápida
Instale o `newman` e o reporter `htmlextra` globalmente (caso não tenha):

```powershell
npm install -g newman
npm install -g newman-reporter-htmlextra
```
## Como executar os testes
Executar a coleção com o ambiente padrão:

```powershell
newman run .\Lista2.postman_collection.json -e .\CRUDCRUD.postman_environment.json
```

Gerar relatório HTML com o `htmlextra` (arquivo de saída será `relatorio.html`):

```powershell
newman run .\Lista2.postman_collection.json -r htmlextra --reporter-htmlextra-export -e .\CRUDCRUD.postman_environment.json
```

---

### **Exercício 2:** Para todos os testes desenvolvidos anteriormente, responda e justifique.

#### 1. Quantas suítes de testes você desenvolveu?

Desenvolvi **1 suíte de testes**, composta por **6 casos de teste**.
A coleção do Postman funciona como uma suíte, agrupando todos os cenários referentes à API CRUDCRUD.

#### 2. Os testes desenvolvidos são manuais ou automatizados?
Os testes são automatizados. Cada requisição possui scripts na aba Tests, escritos em JavaScript, que validam automaticamente status, corpo da resposta, mensagens de erro e armazenam variáveis para uso em requisições seguintes.

#### 3. Onde os testes se localizam na pirâmide apresentada?
Os testes se enquadram no nível de Testes de API, localizado no meio da Pirâmide de Testes (Service Layer).
Eles validam regras e funcionamento dos endpoints, sem envolver camada de UI ou lógica interna isolada.

#### 4. Os testes desenvolvidos são funcionais ou não-funcionais?
Os testes são funcionais, pois validam se a API funciona conforme o esperado, verificando comportamento, retorno, status e regras corretas.

#### 5. Alguns dos testes desenvolvidos são testes Fim-a-Fim (End-To-End)?
Não, nenhum dos testes é End-to-End. Isso porque os testes não envolvem interface e não percorrem fluxo completo do usuário. Apenas verificam endpoints isolados de forma direta.

#### 6. O que se deve fazer para que os testes desenvolvidos funcionem em modo regressão?
Para que os testes funcionem como **regressão**, é necessário:

* **Execução automática e repetível** (Postman Runner, Newman ou Pipeline CI/CD)
* **Uso de variáveis dinâmicas** (ex.: salvar IDs retornados no POST)
* **Isolamento entre execuções** (cada run cria e usa seus próprios objetos)
* **Ordem controlada dos testes** (criar → consultar → atualizar → deletar → validar erros)
* **Automação no pipeline** com um comando como:

    ```bash
    newman run Lista2.postman_collection.json
    ```

###### Bruna Soares Magalhães - Lista 2