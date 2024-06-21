let see_missions = document.querySelector('.see-mission');
let tela_inicial = document.querySelector('.inicial');
let img_home = document.querySelector('.img-position');
let main = document.querySelector('main');
let pegar = document.querySelector('.pegar');
let sair = document.querySelector('.sair');
let check = document.querySelector('.check')
let confirmar = document.querySelector('.confirmar')

see_missions.addEventListener('click', function(e) {
    let telaInicialDisplay = getComputedStyle(tela_inicial).display;

    if (telaInicialDisplay === 'flex' || telaInicialDisplay === '') {
        tela_inicial.style.display = 'none';
        img_home.style.display = 'none';
        main.style.display = 'flex';
    } else {
        tela_inicial.style.display = 'flex';
        img_home.style.display = 'block';
        main.style.display = 'none';
    }
});


document.querySelector('.pegar').addEventListener('click', function() {
    let conteudoMissao = document.querySelector('.conteudo');
    conteudoMissao.style.display = 'flex';
});

sair.addEventListener('click', function(){
    let conteudoMissao = document.querySelector('.conteudo');
    conteudoMissao.style.display = 'none';
});

let minhaDiv = document.getElementById('minhaDiv');

confirmar.addEventListener('click', function(){

    checkDisplay = getComputedStyle(check).display

    check.style.display = 'flex'

    if (check.style.display === 'flex'){
        setTimeout(function() {
            minhaDiv.style.display = 'none';
        }, 2200); 
    }
})
