function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagemGame = gameClicado = document.querySelector('.dashboard__item__img');
    let botaoGame = gameClicado = document.querySelector('.dashboard__item__button');

    if (imagemGame.classList.contains('dashboard__item__img--rented')) {
        imagemGame.classList.remove('dashboard__item__img--rented')
        botaoGame.classList.remove('dashboard__item__button--return')
        botaoGame.innerText='Alugar'
    } else {
        imagemGame.classList.add('dashboard__item__img--rented')
        botaoGame.classList.add('dashboard__item__button--return')
        botaoGame.innerText='Devolver'
    }
}