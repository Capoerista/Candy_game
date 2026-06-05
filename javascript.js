let coins = 0;
let currentSkin = "🍬";
let gameMode = "bot";
let coins_count = document.getElementById("coins-count")
 
 
coins_count.textContent = coins

let secretCandy1 = null;
let secretCandy2 = null;

 
if (gameMode == "bot") {
    secretCandy1 = Math.floor(Math.random() * 20);
    secretCandy2 = Math.floor(Math.random() * 20);
}

let board = document.getElementById('game-board');

 
function updateBoard() {
    board.innerHTML = "";  
    
    for (let i = 0; i < 20; i++) {
        let candy = document.createElement("button");
        candy.textContent = (i + 1) + " " + currentSkin;
        candy.dataset.id = i;
        
        candy.addEventListener("click", function() {
            let clickedId = i
            
           
            if (gameMode == "friend") {
                if (secretCandy1 == null) {
                    secretCandy1 = clickedId;
                    alert("Player 1 hidden, now Player 2, choose your candy.");
                    return;
                }
                if (secretCandy2 == null) {
                    secretCandy2 = clickedId;
                    alert("Player 2 hidden, both candies are ready. Start the game");
                    return;
                }
            }
   
            if (clickedId == secretCandy1 || clickedId == secretCandy2) {
                 document.getElementById("game-over-screen").style.display = "flex";
            } else {
               
                candy.style.visibility = "hidden";
         
                coins = coins + 1;
               coins_count.textContent = coins
            }
        });  
        
        board.appendChild(candy);
    }
}
 
updateBoard();
 
document.getElementById("restart-btn").addEventListener("click", function() {
   document.getElementById("game-over-screen").style.display = "none";
    
    if (gameMode == "bot") {
        secretCandy1 = Math.floor(Math.random() * 20);
        secretCandy2 = Math.floor(Math.random() * 20);
    } else {
        secretCandy1 = null;
        secretCandy2 = null;
    }
    
    updateBoard();
});

let shopBtn = document.getElementById("shop-btn");
let shopModal = document.getElementById("shop");
let closeShop = document.querySelector(".close-shop");

shopBtn.addEventListener("click", function() {
    shopModal.style.display = "block";
});

closeShop.addEventListener("click", function() {
    shopModal.style.display = "none";
});

 
let fruitBtn = document.getElementById("skin-fruit");
fruitBtn.addEventListener("click", function() {
   if (coins >= 15) {
      alert("Success!");
      coins = coins - 15;
      coins_count.textContent = coins
      
      currentSkin = "🍓"; 
      updateBoard();       
      shopModal.style.display = "none";  
   } else {
      alert("Not enough coins!");
   }
});

 
let crystalBtn = document.getElementById("skin-crystal");
crystalBtn.addEventListener("click", function() {
   if (coins >= 30) {
      alert("Success!");
      coins = coins - 30;
      coins_count.textContent = coins
      
      currentSkin = "💎"; 
      updateBoard();       
      shopModal.style.display = "none";  
   } else {
      alert("Not enough coins!");
   }
});

 
let candyBtn = document.getElementById("skin-candy");
candyBtn.addEventListener("click", function(){
   currentSkin = "🍬";
   updateBoard();
   shopModal.style.display = "none";
});

 
let modeBotBtn = document.getElementById("mode-bot");
let modeFriendBtn = document.getElementById("mode-friend");  

modeBotBtn.addEventListener("click", function() {
    gameMode = "bot";
    secretCandy1 = Math.floor(Math.random() * 20);
    secretCandy2 = Math.floor(Math.random() * 20);
    alert("Bot hidden 2 candies!");
    updateBoard();
});

modeFriendBtn.addEventListener("click", function() {
    gameMode = "friend";
    secretCandy1 = null;
    secretCandy2 = null;
    alert("Play with Friend, Player 1, choose a secret candy.");
    updateBoard();
});