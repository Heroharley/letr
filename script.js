
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Infinite Wordle Chain</title>
<style>
  body { 
    font-family: Arial, sans-serif;
    background: #f0f0f0;
  }
  .game-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 10px;
    padding: 20px;
  }
  .game-box {
    background: white;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  .game-header {
    font-size: 1.2em;
    margin-bottom: 10px;
    color: #333;
  }
  input {
    width: 100%;
    padding: 5px;
    margin-bottom: 5px;
    text-transform: uppercase;
    text-align: center;
  }
  button {
    background: #6aaa64;
    color: white;
    border: none;
    padding: 8px;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
  }
  #nextButton {
    display: none;
    margin: 20px auto;
    padding: 15px 30px;
    font-size: 1.2em;
    background: #3a7afe;
  }
  .completed {
    background: #d3e3d3;
  }
</style>
</head>
<body>
<h1 style="text-align: center; color: #2c3e50;">DO YOU LIKE THIS GAME</h1>
<div class="game-grid" id="gameContainer"></div>
<button id="nextButton" onclick="handleNext()">NEXT ▶</button>

<script>
  const targetPhrase = "DOYOULIKETHISGAME".split('');
  let currentGameIndex = 0;
  let completedGames = 0;

  function createGame() {
    const gameDiv = document.createElement('div');
    gameDiv.className = 'game-box';
    gameDiv.innerHTML = `
      <div class="game-header">Game ${currentGameIndex + 1}</div>
      <input type="text" maxlength="1" 
             id="input-${currentGameIndex}" 
             placeholder="${String.fromCharCode(65 + currentGameIndex)}">
      <button onclick="checkGuess(${currentGameIndex})">CHECK</button>
      <div id="result-${currentGameIndex}" style="margin-top: 5px;"></div>
    `;
    document.getElementById('gameContainer').appendChild(gameDiv);
    currentGameIndex++;
  }

  function checkGuess(index) {
    const input = document.getElementById(`input-${index}`);
    const resultDiv = document.getElementById(`result-${index}`);
    const guess = input.value.toUpperCase();
    
    if (!guess) return;

    if (guess === targetPhrase[index]) {
      resultDiv.textContent = "✓ Correct!";
      resultDiv.style.color = "#2ecc71";
      input.disabled = true;
      input.parentElement.classList.add('completed');
      completedGames++;
      
      if (index === targetPhrase.length - 1) {
        document.getElementById('nextButton').style.display = 'block';
      } else if (index === currentGameIndex - 1) {
        createGame();
      }
    } else {
      resultDiv.textContent = "✗ Try Again";
      resultDiv.style.color = "#e74c3c";
    }
  }

  function handleNext() {
    alert("Congratulations! You've completed the sequence!");
    // Add your next action here
  }

  // Initialize first game
  createGame();
</script>
</body>
</html>
                                                                                                                                                                  
