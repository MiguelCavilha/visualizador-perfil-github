// Camada de Apresentação - Manipulação de DOM

const elements = {
    input: document.getElementById('input-search'),
    button: document.getElementById('btn-search'),
    results: document.querySelector('.profile-results')
};

export function showLoading() {
    elements.button.disabled = true;
    elements.results.innerHTML = '<div class="loading">Carregando...</div>';
}

export function hideLoading() {
    elements.button.disabled = false;
}

export function showError(message) {
    elements.results.innerHTML = `<div class="error">${message}</div>`;
}

export function clearResults() {
    elements.results.innerHTML = '';
}

export function renderProfile(userData) {
    const profileHTML = `
        <div class="profile">
            <img src="${userData.avatar_url}" alt="${userData.name || userData.login}" class="profile-avatar">
            <div class="profile-info">
                <h2>${userData.name || userData.login}</h2>
                <p class="bio">${userData.bio || 'Sem bio disponível'}</p>
                <div class="stats">
                    <div class="stat">
                        <span class="stat-number">${userData.followers}</span>
                        <span class="stat-label">Seguidores</span>
                    </div>
                    <div class="stat">
                        <span class="stat-number">${userData.following}</span>
                        <span class="stat-label">Seguindo</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    elements.results.innerHTML = profileHTML;
}

export function renderRepositories(repositories) {
    if (repositories.length === 0) {
        elements.results.innerHTML += '<div class="no-repos">Nenhum repositório encontrado</div>';
        return;
    }
    
    const reposHTML = repositories.map(repo => `
        <div class="repo">
            <h3 class="repo-name">${repo.name}</h3>
            <div class="repo-stats">
                <span>⭐ ${repo.stargazers_count}</span>
                <span>🔱 ${repo.forks_count}</span>
                <span>👁️ ${repo.watchers_count}</span>
                <span class="repo-language">${repo.language || 'Não especificada'}</span>
            </div>
        </div>
    `).join('');
    
    elements.results.innerHTML += `<div class="repositories">${reposHTML}</div>`;
}

export function getInputValue() {
    return elements.input.value.trim();
}

export function setupEventListener(handler) {
    elements.button.addEventListener('click', handler);
    elements.input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handler();
    });
}
