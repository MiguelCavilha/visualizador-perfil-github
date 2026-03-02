# 🔍 Visualizador de Perfil GitHub

<div align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/GitHub_API-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub API">
</div>

<br>

<p align="center">
  Aplicação web moderna para buscar e visualizar perfis de usuários do GitHub com seus repositórios mais recentes.
</p>

---

## 📋 Sobre o Projeto

O **Visualizador de Perfil GitHub** é uma aplicação web que consome a API REST do GitHub para exibir informações detalhadas de usuários e seus repositórios. Desenvolvida com JavaScript moderno (ES6+), a aplicação segue princípios de arquitetura limpa com separação clara de responsabilidades.

### ✨ Destaques

- 🎨 Interface moderna e responsiva
- ⚡ Carregamento assíncrono de dados
- 🔄 Estados de loading e tratamento de erros
- 📱 Totalmente responsivo (mobile-first)
- 🎭 Animações suaves e transições
- 🏗️ Arquitetura modular e escalável
- 🧩 Código limpo e manutenível

---

## 🚀 Funcionalidades

✅ **Busca de Usuários**
- Busca por nome de usuário do GitHub
- Validação de entrada
- Suporte a Enter e clique

✅ **Exibição de Perfil**
- Avatar do usuário
- Nome completo ou username
- Biografia
- Número de seguidores
- Número de pessoas seguindo

✅ **Listagem de Repositórios**
- 10 repositórios mais recentes
- Nome do repositório
- Quantidade de stars ⭐
- Quantidade de forks 🔱
- Quantidade de watchers 👁️
- Linguagem principal

✅ **Tratamento de Estados**
- Loading durante requisições
- Erro 404 (usuário não encontrado)
- Erro de conexão
- Usuário sem repositórios

---

## 🛠️ Tecnologias Utilizadas

### Front-end
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna
  - Custom Properties (variáveis CSS)
  - Flexbox e Grid Layout
  - Animações e transições
  - Design responsivo
- **JavaScript ES6+** - Lógica da aplicação
  - Módulos ES6 (import/export)
  - Async/Await
  - Fetch API
  - Arrow Functions
  - Template Literals

### API
- **GitHub REST API v3** - Fonte de dados

---

## 📁 Estrutura do Projeto

```
visualizador-perfil-github/
├── index.html                   # Página principal
├── README.md                    # Documentação
├── .gitignore                   # Arquivos ignorados pelo Git
│
├── src/
│   ├── css/
│   │   ├── reset.css           # Reset de estilos padrão
│   │   ├── styles.css          # Estilos globais
│   │   ├── components.css      # Estilos dos componentes dinâmicos
│   │   ├── animations.css      # Animações
│   │   └── responsive.css      # Media queries
│   │
│   └── js/
│       ├── main.js             # Inicialização da aplicação
│       │
│       ├── services/
│       │   └── githubAPI.js    # Comunicação com API do GitHub
│       │
│       ├── controllers/
│       │   └── searchController.js  # Orquestração da lógica
│       │
│       ├── views/
│       │   └── profileView.js  # Manipulação de DOM
│       │
│       └── utils/
│           └── validators.js   # Funções de validação
```

---

## 🏗️ Arquitetura

O projeto segue uma arquitetura em camadas com separação clara de responsabilidades:

### 📊 Diagrama de Fluxo

```
Usuário → View → Controller → Service → API GitHub
                    ↓              ↓
                Validators     Tratamento
                    ↓              ↓
                View ← ← ← ← ← Resposta
```

### 🔷 Camadas

**1. Services (Camada de Dados)**
- Comunicação exclusiva com APIs externas
- Retorna dados estruturados
- Não manipula DOM
- Trata erros de rede

**2. Controllers (Camada de Lógica)**
- Orquestra o fluxo da aplicação
- Processa e valida dados
- Gerencia estados da aplicação
- Conecta Services e Views

**3. Views (Camada de Apresentação)**
- Manipula DOM exclusivamente
- Renderiza dados na interface
- Gerencia eventos de UI
- Atualiza estados visuais

**4. Utils (Utilitários)**
- Funções auxiliares reutilizáveis
- Validações
- Helpers

---

## 📖 Como Usar

### Pré-requisitos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Conexão com internet

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/visualizador-perfil-github.git
```

2. Navegue até a pasta:
```bash
cd visualizador-perfil-github
```

3. Abra o arquivo `index.html` no navegador:
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

Ou use uma extensão como **Live Server** no VS Code.

### Uso

1. Digite um nome de usuário do GitHub no campo de busca
2. Clique em "Buscar" ou pressione Enter
3. Visualize o perfil e os repositórios do usuário

---

## 🧪 Exemplos de Usuários para Testar

| Username | Nome | Descrição |
|----------|------|----------|
| `torvalds` | Linus Torvalds | Criador do Linux |
| `gaearon` | Dan Abramov | Co-criador do Redux |
| `tj` | TJ Holowaychuk | Criador do Express.js |
| `sindresorhus` | Sindre Sorhus | Desenvolvedor open source |
| `addyosmani` | Addy Osmani | Engenheiro do Google Chrome |

---

## 🎨 Demonstração

### Estados da Aplicação

**Estado Inicial**
- Campo de busca vazio
- Botão habilitado

**Estado de Loading**
- Mensagem "Carregando..."
- Botão desabilitado
- Animação de pulse

**Estado de Sucesso**
- Perfil do usuário exibido
- Lista de repositórios
- Animação de fade-in

**Estado de Erro**
- Mensagem de erro específica
- Botão habilitado para nova tentativa

---

## 🔧 Detalhes Técnicos

### API Endpoints Utilizados

```javascript
// Buscar usuário
GET https://api.github.com/users/{username}

// Buscar repositórios
GET https://api.github.com/users/{username}/repos?sort=updated&per_page=10
```

### Tratamento de Erros

- **404** - Usuário não encontrado
- **Network Error** - Erro de conexão
- **Rate Limit** - Limite de requisições excedido
- **Timeout** - Tempo de resposta excedido

### Responsividade

Breakpoints:
- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px

---

## 🚀 Melhorias Futuras

- [ ] Implementar cache de requisições
- [ ] Adicionar paginação de repositórios
- [ ] Exibir mais informações (issues, PRs, contribuições)
- [ ] Modo escuro/claro
- [ ] Histórico de buscas
- [ ] Comparação entre usuários
- [ ] Gráficos de atividade
- [ ] Export de dados (PDF, JSON)
- [ ] Testes unitários e E2E
- [ ] PWA (Progressive Web App)

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👤 Autor

Desenvolvido com 💜 por **Bruna**

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

---

## ⭐ Mostre seu apoio

Dê uma ⭐ se este projeto te ajudou!

---

<div align="center">
  <p>Feito com ❤️ e JavaScript</p>
</div>
