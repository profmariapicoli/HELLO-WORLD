document.addEventListener("DOMContentLoaded", function() {
    const nomeUsuario = document.getElementById("nome-usuário");
    const nome = prompt("Por favor, insira seu nome:");
    if (nome) {
        nomeUsuario.textContent = nome;
    }
});
