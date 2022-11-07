function createGame(player1, hour, player2){ /*Criando função para deixar editavel os times e a hora do jogo */
    return `
    <li>
        <img src="./img/icon-${player1}.svg" alt="Bandeira do ${player1}">
        <strong>${hour}</strong>
        <img src="./img/icon-${player2}.svg" alt="Bandeira da ${player2}">
    </li>
    `
}

let delay = -0.4; /* Valor inicial do delay */
function createdCard(date, day, games){ /* Fazendo funcionalidade para a página usando parâmetros. */ /* */
    delay = delay + 0.4; /*Cada vez que passar aqui, vai ir somando a duração */
    return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2> 
            <ul>
            ${games}
            </ul>
    </div>
    `
}


document.querySelector("#cards").innerHTML = 

    createdCard("24/11","quinta", createGame('brazil','16:00','serbia'))  
    +
    createdCard("28/11","segunda", createGame('brazil','13:00','switzerland'))
    +
    createdCard("02/12","sexta", createGame('brazil','16:00','cameroon'))

