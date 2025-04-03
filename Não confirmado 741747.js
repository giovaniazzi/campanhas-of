// Recupera o estado dos checkboxes do armazenamento local
document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach((checkbox) => {
        checkbox.checked = localStorage.getItem(checkbox.id) === "true";
        checkbox.addEventListener("change", () => {
            localStorage.setItem(checkbox.id, checkbox.checked);
        });
    });

    // Botão para limpar as marcações
    const resetButton = document.getElementById("resetButton");
    resetButton.addEventListener("click", () => {
        checkboxes.forEach((checkbox) => {
            checkbox.checked = false;
            localStorage.removeItem(checkbox.id);
        });
    });
});
