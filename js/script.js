var basket = document.getElementById('basket'),
    container = document.getElementsByClassName('container')
    hen = document.getElementsByClassName('hen'),
    eggs = document.getElementsByClassName('egg'),
    egg1 = document.getElementById('egg1'),
    egg2 = document.getElementById('egg2'),
    egg3 = document.getElementById('egg3'),
    restart = document.getElementById('restart'),
    scoreSpan = document.getElementById('score'),
    score1 = document.getElementById('score1'),
    lifeSpan = document.getElementById('life'),
    floor = document.getElementById('floor'),
    splashEgg=document.getElementsByClassName('splash')
    basketHeight = basket.offsetHeight,
    containerHeight = container.offsetHeight,
    eggHeight = eggs.offsetHeight,
    eggInitPos = eggs.offsetTop,
    score = 0,
    life = 5,
    s = 2,
    maxS = 20,
    c = 0,
    scoreUpdate = false,
    game = 0,
    anim = 0,
    eggCurrPos = 0,
    eggTop = 0,
    basketTop = containerHeight-basketHeight,
    splash = 0;
lifeSpan.textContent=life;

function start() {
    document.addEventListener('keydown', moveSelection);
    function moveSelection(event) {
        if (event.keyCode==37) {
            basket.style.left = parseInt(basket.style.left) - 20 + 'px';
        }
        else if(event.keyCode==39) {
            basket.style.left = parseInt(basket.style.left) + 20 + 'px';
        }
    }
}

function egg_drop(egg){
    eggCurrPos = parseInt(egg.style.top);
    eggCurrPos += speed;
    egg.style.top = eggCurrPos;
}
