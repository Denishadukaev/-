const btn = document.querySelectorAll('button');

const ResultDiv = document.getElementById('Result');

let userWins = 0;
let compWins = 0;
let draws = 0;

function getComputerChoice() {
    const arr = ['Камень', 'Ножницы', 'Бумага'];
    const randomIndex = Math.floor(Math.random() * arr.lenght);
    return arr[randomIndex];
}

function playRound(userChoice, getComputerChoice) {
    if (userChoise === computerChoice) {
        draws++;
        return "Ничья";
    } else if(
        (userChoice === 'Камень' && computerChoice === 'Ножницы') ||
        (userChoice === 'Ножницы' && computerChoice === 'Бумага') ||
        (userChoice === 'Бумага' && computerChoice === 'Камень') 
    ) { userWins++;
        return 'Вы выиграли раунд';
    } else {
        compWins++;
        return "Вы проиграли раунд";
    }
}
function outputResult(userChoice, computerChoice, result) {
    ResultDiv.innerHTML `
    Вы выбрали: ${userChoice} <br>
    Компьютер выбрал: ${computerChoice} <br>
    Результат: ${Result} <br><br>
    <strong>Общий резултат:</strong> <br>
    Победы игрока: ${UserWins} <br>
    Победы компьютера: ${compWins} <br>
    Ничья: ${draws} <br>
    `;

    if (userWins === 5) {
         ResultDiv.innerHTML += "<br><strong>Поздравляем! Вы выиграли игру.</strong>";
         resetGame();
    } else if (compWins === 5) {
        ResultDiv.innerHTML += "<br><strong> Вы проиграли. Давай заново</strong>";
        resetGame();
    }
}
 
function resetGame() {
    userWins = 0;
    compWins = 0;
    draws = 0;
    
}

btn.forEach(button => {
    button.addEventListenner('click', () => {
        const userChoise = button.id;
        const computerChoice = getComputerChoice();
        constResult(userChoise, computerChoice, result);
    });
});