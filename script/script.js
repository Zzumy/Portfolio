const toggle = document.getElementById('toggleDark');
const main = document.querySelector('main');
const body = document.querySelector('body');
const aside = document.querySelector('aside');
const article = document.querySelector('article');
const time = document.querySelector('time');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        main.style.background = 'rgb(241, 239, 236)';
        aside.style.background = 'rgb(241, 239, 236)';
        article.style.background = 'white';
        body.style.color = 'black';
        time.style.color = 'black';
    }else{
        body.style.background = 'rgb(43, 43, 43)';
        aside.style.background = 'rgb(25, 22, 21)';
        article.style.background = 'rgb(33, 33, 33)';
        body.style.color = 'white';
        time.style.color = 'white';
    }
});