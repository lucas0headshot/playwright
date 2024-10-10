# Passo a Passo para Instalação e Uso de Testes com Playwright

## 1. Pré-requisitos

- **Node.js**: Certifique-se de que o Node.js está instalado. Você pode verificar com o comando:
```bash
node -v
```

## 2. Instalar Dependências
```bash
    npm i
```

## 3. Instalar Navegadores
```bash
    npx playwright install
```

## 4. Alterar configuração do teste
- Abra o arquivo **browser.test.js**
- Altere o valor da variável **URL** para o site que você deseja testar

## 5. Rodar os testes
```bash
    npm test:navegador_que_deseja_usar
```