document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll(".cell");
    const statusText = document.getElementById("status");
    const resetBtn = document.getElementById("resetBtn");

    let currentPlayer = "X";
    let board = ["", "", "", "", "", "", "", "", ""];
    let gameActive = true;

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function checkWinner() {
        for (const combination of winningCombinations) {
            const [a, b, c] = combination;

            if (
                board[a] !== "" &&
                board[a] === board[b] &&
                board[a] === board[c]
            ) {
                statusText.textContent = `Le joueur ${currentPlayer} a gagné !`;
                gameActive = false;
                return;
            }
        }

        if (!board.includes("")) {
            statusText.textContent = "Match nul !";
            gameActive = false;
            return;
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
        statusText.textContent = `Tour du joueur ${currentPlayer}`;
    }

    cells.forEach((cell, index) => {
        cell.addEventListener("click", () => {
            if (board[index] !== "" || !gameActive) return;

            board[index] = currentPlayer;
            cell.textContent = currentPlayer;

            checkWinner();
        });
    });

    resetBtn.addEventListener("click", () => {
        board = ["", "", "", "", "", "", "", "", ""];
        currentPlayer = "X";
        gameActive = true;
        statusText.textContent = "Tour du joueur X";

        cells.forEach(cell => {
            cell.textContent = "";
        });
    });
});