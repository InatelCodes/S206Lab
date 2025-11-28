# Prova LAB — Teste de API

Uma coleção Postman para validação das rotas e comportamento da API. Este repositório contém a coleção, o ambiente e exemplos de execução com o `newman` (CLI do Postman).

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

> Dica: em sistemas com permissões restritas, rode o PowerShell como administrador ou use `--location=global` conforme sua configuração do npm.

## Como executar os testes
Executar a coleção com o ambiente padrão:

```powershell
newman run .\ProvaLAB.postman_collection.json -e .\ServeRest.postman_environment.json
```

Gerar relatório HTML com o `htmlextra` (arquivo de saída será `relatorio.html`):

```powershell
newman run .\ProvaLAB.postman_collection.json -r htmlextra --reporter-htmlextra-export relatorio.html -e .\ServeRest.postman_environment.json
```

O arquivo gerado ficará na raiz do projeto — abra no navegador para visualizar o relatório.

## Estrutura do repositório
- `ProvaLAB.postman_collection.json` — coleção Postman com os testes.
- `ServeRest.postman_environment.json` — ambiente usado pela coleção.
- `newman/` — pasta com relatórios gerados (ex.: `Prova LAB-2025-11-28-11-31-15-326-0.html`).


###### Bruna Soares Magalhães - Prova LAB