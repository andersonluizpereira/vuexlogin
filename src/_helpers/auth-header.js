/*
Cabeçalho de Auth é uma função auxiliar que retorna um cabeçalho de Autorização HTTP contendo o JSON Web Token (JWT) do usuário conectado no momento a partir do armazenamento local. 
Se o usuário não estiver logado, um objeto vazio será retornado.
O cabeçalho auth é usado para fazer solicitações HTTP autenticadas para a API do servidor usando a autenticação JWT.
*/

export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}