
var scores, currentScore, activePlayer, gamePlay;

startGame();

document.querySelector('.btn__roll').addEventListener('click', function(){
    if(gamePlay){
         // Generate Random Number
        dice = Math.floor(Math.random() * 6) + 1;

        // Display Random Dice
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'img/dice-'+dice+'.png';

        // Update score if the dice number is not 1
        if(dice !== 1){
            //Add score
            currentScore += dice;
            document.querySelector('#current-'+activePlayer).textContent = currentScore;

        }else{
            //Switch Player
            switchPlayer();
            
        }
    }
   
});

document.querySelector('.btn__hold').addEventListener('click', function(){
    if(gamePlay){
        //Add current score to the global score of the player
        scores[activePlayer] += currentScore;

        //Update UI
        document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];

        //Check if the game has been won
        if(scores[activePlayer]>=10){
            document.querySelector('#name-'+activePlayer).textContent = 'YOU WON!';
            document.querySelector('#name-'+activePlayer).classList.add('victory');
            document.querySelector('.player-'+activePlayer+'-box').classList.remove('active');

            document.querySelector('.dice').style.display = 'none';
            gamePlay = false;
        }else{
            //Switch Player
            switchPlayer();
        }
    }
    
    
});

document.querySelector('.btn__new').addEventListener('click', startGame);

function startGame(){
    
    scores = [0,0];
    currentScore = 0;
    activePlayer = 0;
    gamePlay = true;

    //Hide the Dice
    document.querySelector('.dice').style.display = 'none';

    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 1';
    document.querySelector('#name-0').classList.remove('victory');
    document.querySelector('#name-1').classList.remove('victory');
    document.querySelector('.player-0-box').classList.remove('active');
    document.querySelector('.player-1-box').classList.remove('active');
    document.querySelector('.player-0-box').classList.add('active');

}


function switchPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    currentScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-box').classList.toggle('active');
    document.querySelector('.player-1-box').classList.toggle('active');
}