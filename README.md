# Testes de API – ServeRest (Cypress)

Este repositório contém uma suíte de testes automatizados de API utilizando o **Cypress**,
aplicada à API pública **ServeRest**, com foco em **qualidade de software** e **boas práticas de QA**.

---

## Objetivo
Demonstrar conhecimentos em testes de API, organização de suítes de testes e aplicação
dos principais tipos de testes utilizados no dia a dia de QA:
- Smoke
- Funcional
- Regressão

---

## API Utilizada
- https://serverest.dev

---

## Tecnologias e Ferramentas
- Cypress
- JavaScript
- Node.js
- Git
- GitHub

---

## Estrutura do Projeto

cypress/e2e
├── smoke # Testes críticos da aplicação

├── funcional # Testes de validação das funcionalidades

└── regressivo # Testes de regressão


---

## Tipos de Testes Implementados

### Smoke Tests
- Validação rápida dos principais endpoints
- Confirma que a API está disponível e funcional

### Testes Funcionais
- Validação detalhada do login
- Verificação de status code, mensagens e token de autenticação

### Testes de Regressão
- Garantia de que o fluxo de login continua funcionando após alterações
- Execução de testes críticos com validações objetivas

---

## Como Executar o Projeto

```bash
npm install
npx cypress open
---
Ou em modo headless:
npx cypress run