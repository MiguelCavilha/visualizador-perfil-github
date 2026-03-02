// Camada de Lógica - Orquestração

import { fetchUser, fetchRepositories } from '../services/githubAPI.js';
import { validateUsername } from '../utils/validators.js';
import * as view from '../views/profileView.js';

export async function handleSearch() {
    const username = view.getInputValue();
    
    // Validação
    const validation = validateUsername(username);
    if (!validation.valid) {
        view.showError(validation.error);
        return;
    }
    
    // Preparação UI
    view.clearResults();
    view.showLoading();
    
    // Buscar usuário
    const userResult = await fetchUser(username);
    
    if (!userResult.success) {
        view.hideLoading();
        view.showError(userResult.error);
        return;
    }
    
    // Renderizar perfil
    view.renderProfile(userResult.data);
    
    // Buscar repositórios
    const reposResult = await fetchRepositories(username);
    
    view.hideLoading();
    
    if (reposResult.success) {
        view.renderRepositories(reposResult.data);
    } else {
        // Perfil continua visível mesmo se repos falharem
        console.warn('Não foi possível carregar repositórios');
    }
}
