let secretCandy = Math.floor(Math.random() * 20);
const board = document.getElementById('game-board');
 for (let i = 0; i < 20; i ++) {
    const candy = document.createElement("button");
    candy.textContent = (i + 1) + '🍬';
    candy.dataset.id = i;
    candy.addEventListener("Click", function() {
        
    })
    board.appendChild(candy);
 }