// Camada de Dados - Comunicação com API do GitHub

const API_BASE_URL = 'https://api.github.com';

export async function fetchUser(username) {
    try {
        const response = await fetch(`${API_BASE_URL}/users/${username}`);
        
        if (response.status === 404) {
            return { success: false, error: 'Usuário não encontrado' };
        }
        
        if (!response.ok) {
            return { success: false, error: 'Erro ao buscar usuário' };
        }
        
        const data = await response.json();
        return { success: true, data };
        
    } catch (error) {
        return { success: false, error: 'Erro de conexão. Verifique sua internet' };
    }
}

export async function fetchRepositories(username) {
    try {
        const response = await fetch(`${API_BASE_URL}/users/${username}/repos?sort=updated&per_page=10`);
        
        if (!response.ok) {
            return { success: false, error: 'Erro ao buscar repositórios' };
        }
        
        const data = await response.json();
        return { success: true, data };
        
    } catch (error) {
        return { success: false, error: 'Erro ao carregar repositórios' };
    }
}
