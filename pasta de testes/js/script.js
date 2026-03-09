document.addEventListener("DOMContentLoaded", () => {
    const userIcon = document.getElementById("user-icon");
    const dropdownMenu = document.getElementById("dropdown-menu");

    // Função para alternar o menu
    const toggleMenu = (event) => {
        event.stopPropagation(); // Impede que o clique se propague
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    };

    // Fecha o menu ao clicar fora dele
    const closeMenu = () => {
        dropdownMenu.style.display = "none";
    };

    // Adiciona os eventos
    userIcon.addEventListener("click", toggleMenu);
    document.addEventListener("click", closeMenu);

    // Impede que o clique dentro do menu feche ele
    dropdownMenu.addEventListener("click", (event) => {
        event.stopPropagation();
    });
});