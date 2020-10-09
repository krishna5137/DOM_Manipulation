let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p1Display = document.querySelector("#p1Display");
let p2Display = document.querySelector("#p2Display");
let resetBtn = document.getElementById("reset");
let input = document.querySelector("input");
let target = document.getElementById("target");

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

p1.addEventListener("click", function() {
    if (!isGameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            p1Display.classList.add("winner");
            isGameOver = true;
        }
    }
    p1Display.textContent = p1Score;
});

p2.addEventListener("click", function() {
    if (!isGameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            p2Display.classList.add("winner");
            isGameOver = true;
        }
    }
    p2Display.textContent = p2Score;
});

resetBtn.addEventListener("click", function() {
   reset();
});

input.addEventListener("change", function() {
    target.textContent = Number(input.value);
    winningScore = Number(input.value);
    reset();
})

function reset () {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    isGameOver = false;
}