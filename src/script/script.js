var enemyReact;

// Játék lehetséges nyerteseinek a nyert körök száma
var playerStats = 0;
var drawStats = 0;
var enemyStats = 0;


//Az eredményeket vissza állítja 0-ra
function resetScore()
{
    playerStats = 0;
    drawStats = 0;
    enemyStats = 0;
    document.getElementById("player").innerHTML = "Player win: " + playerStats;
    document.getElementById("draw").innerHTML = "Draw: " + drawStats;
    document.getElementById("enemy").innerHTML = "Enemy win: " + enemyStats;
    document.getElementById("text").innerHTML = "Play the game! ";
}

//Ha kőt játszol
function rockPlayed()
{
    document.getElementById("nextbutton").disabled = false;
    var rockbutton = document.getElementsByClassName("button");
    for (var i = 0; i < rockbutton.length; i++)
    {
        rockbutton[i].disabled = true;
    }

    enemyReact = Math.floor(Math.random() * 3);

    if(enemyReact == 0)
    {
        document.getElementById("text").innerHTML = "Rock, it's a draw!";
        drawStats++;
        document.getElementById("draw").innerHTML = "Draw: " + drawStats;
    }

    if(enemyReact == 1)
    {
        document.getElementById("text").innerHTML = "Scissors, you won!";
        playerStats++;
        document.getElementById("player").innerHTML = "Player win: " + playerStats;
    }

    if(enemyReact == 2)
    {
        document.getElementById("text").innerHTML = "Paper, you lose!";
        enemyStats++;
        document.getElementById("enemy").innerHTML = "Enemy win: " + enemyStats;
    }
}

//Ha ollót játszol
function paperPlayed()
{
    document.getElementById("nextbutton").disabled = false;
    var rockbutton = document.getElementsByClassName("button");
    for (var i = 0; i < rockbutton.length; i++)
    {
        rockbutton[i].disabled = true;
    }

    enemyReact = Math.floor(Math.random() * 3);

    if(enemyReact == 0)
    {
        document.getElementById("text").innerHTML = "Rock, you won!";
        playerStats++;
        document.getElementById("player").innerHTML = "Player win: " + playerStats;
    }

    if(enemyReact == 1)
    {
        document.getElementById("text").innerHTML = "Scissors, you lose!";
        enemyStats++;
        document.getElementById("enemy").innerHTML = "Enemy win: " + enemyStats;
    }

    if(enemyReact == 2)
    {
        document.getElementById("text").innerHTML = "Paper, it's a draw!";
        drawStats++;
        document.getElementById("draw").innerHTML = "Draw: " + drawStats;
    }
}

//Ha ollót játszol
function scissorsPlayed()
{
    document.getElementById("nextbutton").disabled = false;
    var rockbutton = document.getElementsByClassName("button");
    for (var i = 0; i < rockbutton.length; i++)
    {
        rockbutton[i].disabled = true;
    }

    enemyReact = Math.floor(Math.random() * 3);

    if(enemyReact == 0)
    {
        document.getElementById("text").innerHTML = "Rock, you lose!";
        enemyStats++;
        document.getElementById("enemy").innerHTML = "Enemy win: " + drawStats;
    }

    if(enemyReact == 1)
    {
        document.getElementById("text").innerHTML = "Scissors, it's a draw";
        drawStats++;
        document.getElementById("draw").innerHTML = "Draw: " + playerStats;
    }

    if(enemyReact == 2)
    {
        document.getElementById("text").innerHTML = "Paper, you won!";
        playerStats++;
        document.getElementById("player").innerHTML = "Player win: " + enemyStats;
    }
}

function nextButton()
{
    document.getElementById("nextbutton").disabled = true;
    var buttons = document.getElementsByClassName("button");
    for (var i = 0; i < buttons.length; i++) { 
        buttons[i].disabled = false;
    }
    document.getElementById("text").innerHTML = ""; 
}