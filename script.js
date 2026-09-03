document.addEventListener("DOMContentLoaded", () => {
    const btnMensagem = document.getElementById("btnMensagem");
    const mensagem = document.getElementById("mensagem");

    const frases = [
        "A verdadeira independência se constrói diariamente com educação, respeito e cidadania.",
        "Celebrar a pátria é reconhecer o valor e a diversidade do povo brasileiro.",
        "Soberania é ter um compromisso constante com o futuro e com os direitos de todos."
    ];

    btnMensagem.addEventListener("click", () => {
        const indiceAleatorio = Math.floor(Math.random() * frases.length);
        mensagem.textContent = frases[indiceAleatorio];
        mensagem.classList.remove("oculto");
    });