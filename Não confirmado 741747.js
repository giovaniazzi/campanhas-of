// Alternar entre seções
function showSection(section) {
    document.querySelectorAll('.section').forEach(el => el.classList.add('hidden'));
    document.getElementById(section).classList.remove('hidden');
}

// Cronômetro decrescente
let timer;
let timeLeft = 600;

function startTimer() {
    clearInterval(timer);
    timer = setInterval(updateTimer, 1000);
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 600;
    updateTimer();
}

function updateTimer() {
    if (timeLeft <= 0) {
        clearInterval(timer);
        alert("⏰ Tempo esgotado!");
    } else {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
        const seconds = (timeLeft % 60).toString().padStart(2, '0');
        document.getElementById("countdown").textContent = `${minutes}:${seconds}`;
    }
}

// Salvando anotações
const notesArea = document.getElementById("notesArea");
const saveNotesButton = document.getElementById("saveNotes");

saveNotesButton.addEventListener("click", () => {
    localStorage.setItem("anotacoes", notesArea.value);
});

document.addEventListener("DOMContentLoaded", () => {
    notesArea.value = localStorage.getItem("anotacoes") || "";
});

// Armazenamento das marcações
document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach((checkbox) => {
        checkbox.checked = localStorage.getItem(checkbox.id) === "true";
        checkbox.addEventListener("change", () => {
            localStorage.setItem(checkbox.id, checkbox.checked);
        });
    });

    const resetButton = document.getElementById("resetButton");
    resetButton.addEventListener("click", () => {
        checkboxes.forEach((checkbox) => {
            checkbox.checked = false;
            localStorage.removeItem(checkbox.id);
        });
    });
});
