const BoxText= document.querySelector('.box-text')
const iconBoxTxt = document.querySelector('.icon-box-txt')

const Podcast = document.querySelector('#podcast');
const TxtPodcast = document.querySelector('.txt.podcast')
const btnPodcast = document.querySelector('.btn-pod')

const Gravaçoes = document.querySelector('#gravaçoes');
const TxtGravaçoes = document.querySelector('.txt.gravaçoes')
const btnGravacoes = document.querySelector('.btn-grav')

const Entrevistas = document.querySelector('#entrevistas');
const TxtEntrevistas = document.querySelector('.txt.entrevistas')
const btnEntrevistas = document.querySelector('.btn-entr')

const Personalizado = document.querySelector('#perso');
const TxtPerso = document.querySelector('.txt.perso')
const btnPerso = document.querySelector('.btn-perso')

const form = document.querySelector('.formulario')
const icon = document.querySelector('.icon')

const cameras = document.querySelector('#cameras')
const lentes = document.querySelector('#lentes')
const tripe = document.querySelector('#tripes')
const microfones = document.querySelector('#microfones')
const iluminacao = document.querySelector('#iluminacoes')
const cabos = document.querySelector('#cabos')

function itemSelecionado(txt, list){
    for(let i = 0; i < list.options.length; i++){
        
        if(list.options[i].text === txt){
            list.selectedIndex = i;
            break;
        }
    }
}


iconBoxTxt.addEventListener('click', ()=> {
    BoxText.classList.remove('active')
    TxtEntrevistas.classList.remove('active')
    Entrevistas.classList.remove('active')
    TxtPodcast.classList.remove('active')
    TxtGravaçoes.classList.remove('active')
    Podcast.classList.remove('active')
    Gravaçoes.classList.remove('active') 
    TxtPerso.classList.remove('active')
    Personalizado.classList.remove('active')
    form.classList.remove('active')
})

Entrevistas.addEventListener('click', ()=> {
    BoxText.classList.add('active')
    TxtEntrevistas.classList.add('active')
    Entrevistas.classList.add('active')
    TxtPodcast.classList.remove('active')
    TxtGravaçoes.classList.remove('active')
    Podcast.classList.remove('active')
    Gravaçoes.classList.remove('active') 
    TxtPerso.classList.remove('active')
    Personalizado.classList.remove('active')  
});

Gravaçoes.addEventListener('click', ()=> {
    BoxText.classList.add('active')
    TxtGravaçoes.classList.add('active')
    Gravaçoes.classList.add('active')
    TxtPodcast.classList.remove('active')
    TxtEntrevistas.classList.remove('active')
    Podcast.classList.remove('active')
    Entrevistas.classList.remove('active') 
    TxtPerso.classList.remove('active')
    Personalizado.classList.remove('active') 
});

Podcast.addEventListener('click', ()=> {
    BoxText.classList.add('active')
    TxtPodcast.classList.add('active')
    Podcast.classList.add('active')
    TxtGravaçoes.classList.remove('active')
    TxtEntrevistas.classList.remove('active')
    Gravaçoes.classList.remove('active')
    Entrevistas.classList.remove('active')
    TxtPerso.classList.remove('active')
    Personalizado.classList.remove('active')
});

Personalizado.addEventListener('click', ()=> {
    BoxText.classList.add('active')
    TxtPerso.classList.add('active')
    Personalizado.classList.add('active')
    TxtGravaçoes.classList.remove('active')
    TxtEntrevistas.classList.remove('active')
    Gravaçoes.classList.remove('active')
    Entrevistas.classList.remove('active')
    Podcast.classList.remove('active')
    TxtPodcast.classList.remove('active') 
})

btnPodcast.addEventListener('click', ()=> {
    form.classList.add('active')
    itemSelecionado("Boya", microfones)
    itemSelecionado("Outro", cabos)
})

btnGravacoes.addEventListener('click', ()=> {
    form.classList.add('active')
    itemSelecionado("Canon SL3", cameras)
    itemSelecionado("Lente Canon 50mm", lentes)
    itemSelecionado("Tripé", tripe)
    itemSelecionado("Sennheiser", microfones)
    itemSelecionado("Guarda-chuva", iluminacao)
    itemSelecionado("Cabo P10", cabos)
})

btnEntrevistas.addEventListener('click', ()=> {
    form.classList.add('active')
    itemSelecionado("Canon SL3", cameras)
    itemSelecionado("Lente Canon 50mm", lentes)
    itemSelecionado("Tripé", tripe)
    itemSelecionado("Boya", microfones)
    itemSelecionado("Guarda-chuva", iluminacao)
    itemSelecionado('Cabo P10', cabos)
})

btnPerso.addEventListener('click', ()=> {
    form.classList.add('active')
})

icon.addEventListener('click', ()=> {
    form.classList.remove('active')
})


