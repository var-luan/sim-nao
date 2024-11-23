const tela = document.getElementById('tela0');
const img_max = 20;
const imgURL = './Assets/img/rb_27066.png';

function animation(){

    
    for (let i = 0; i < img_max; i++) {
    const img = document.createElement('img');
    img.src = imgURL;
    img.classList.add('coracao');
    
    const startX = Math.random() *window.innerWidth;
    
    const durancao = Math.random() * 3 + 2;
    const delay = Math.random() * 0.5;

    img.style.left = `${startX}px`;
    img.style.animationDuration = `${durancao}s`;
    img.style.animationDelay = `${delay}s`;
    
    img.addEventListener('animationend', ()=>{
        img.remove();
    })
    
    tela.appendChild(img);

  }
}
function music_tocar(){
  music1.play();
}
setInterval(animation, 1000);

animation();