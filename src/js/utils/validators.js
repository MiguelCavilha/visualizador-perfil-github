// Utilitários - Validações

export function validateUsername(username) {
    if (!username) {
        return { valid: false, error: 'Digite um nome de usuário' };
    }
    
    if (username.length < 1) {
        return { valid: false, error: 'Nome de usuário muito curto' };
    }
    
    return { valid: true };
}
