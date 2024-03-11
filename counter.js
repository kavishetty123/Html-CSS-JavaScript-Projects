const increaseButton = document.getElementById("increaser1");
const decreaseButton = document.getElementById("decreaser1");
const resetButton = document.getElementById("reset");
const counterLabel = document.getElementById("counterLabel");
let count = 0;
increaseButton.onclick = function(){
    count++;
    counterLabel.textContent = count;
}
decreaseButton.onclick = function(){
    count--;
    counterLabel.textContent = count;
}
resetButton.onclick = function(){
    count = 0;
    counterLabel.textContent = count;
}

