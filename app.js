let viewTreino = document.getElementById("treino");
let viewTreinoBtn = document.getElementById("btn-treino");

console.log(viewTreino);
console.log(viewTreinoBtn);

viewTreino.style.display = "none";

viewTreinoBtn.addEventListener("click", function(){
    viewTreino.style.display = "inline";
});