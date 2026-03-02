// Inicialização da Aplicação

import { handleSearch } from './controllers/searchController.js';
import { setupEventListener } from './views/profileView.js';

// Configurar event listeners quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    setupEventListener(handleSearch);
});
