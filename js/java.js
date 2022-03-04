let musicas = [
    {titulo:'Saudades do Tempo', artista:'Maneva', src:'conteudo/maneva.mp3',
img:'/conteudo/Maneva_Tudo Vira Reggae.jpg'}
];

let musica = document.querySelector('audio')
let indexMusica = 0;


let duracaoMusica = document.querySelector('.fim')


let imagem = document.querySelector('.img');
let nomeMusica = document.querySelector('.descricao h2')
let nomeArtista = document.querySelector('.descricao i')

duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

//Eventos
document.querySelector('.btn-play').addEventListener('click', tocarMusica);
document.querySelector('.btn-pause').addEventListener('click', pausarMusica);
musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('btn-voltar').addEventListener('click',()=>{
    indexMusica--;
    renderizarMusica(indexMusica);
});
document.querySelector('btn-avancar').addEventListener('click',()=>{
    indexMusica++;
    renderizarMusica(indexMusica);
});

//funções

function renderizarMusica (index){
    musica.setAttribute('src',musicas[index].src);
    musica.addEventListener('loadeddata',() => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index.img];
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

    });
        
};

function tocarMusica(){
    musica.play();
    document.querySelector('.btn-pause').style.display = 'block';
    document.querySelector('.btn-play').style.display = 'none';
};



function pausarMusica(){
    musica.pause();
    document.querySelector('.btn-pause').style.display = 'none';
    document.querySelector('.btn-play').style.display = 'block';
};

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
};



function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor (segundos/60);
    let campoSegundos = segundos % 60;
    if(campoSegundos < 10 ){
        campoSegundos = '0' + campoSegundos;
    };
    return campoMinutos + ':'+campoSegundos;
};
 




