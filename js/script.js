/* Muda a cor da navbar */

window.onscroll = function(){

    scroll = document.documentElement.scrollTop;
    header = document.getElementById("header");

    if (scroll > 20){
        header.classList.add('nav_mod');
    }else if (scroll < 20){
        header.classList.remove('nav_mod');
    }
};

/* Atualiza o ano do copyright */

let date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();

/* Mostra a sidebar */

btnMenu = document.getElementById("btn_menu");
nav = document.getElementById("nav");
containerAll = document.getElementById("container__all");

btnMenu.addEventListener("click", ()=>{
    nav.classList.toggle('move_nav');
    containerAll.style.filter = 'blur(1px)';
});

/* Fecha a sidebar */

btnClose = document.getElementById("btn_close");
link = document.getElementById("nav__li");

btnClose.addEventListener("click", ()=>{
    nav.classList.toggle('move_nav');
    containerAll.style.filter = 'blur(0px)';
});

containerAll.addEventListener("click", ()=>{
    nav.classList.remove('move_nav');
    containerAll.style.filter = 'blur(0px)';
});

link.addEventListener("click", ()=>{
    nav.classList.remove('move_nav');
    containerAll.style.filter = 'blur(0px)';
});

/* Fecha sidebar automático conforme a tela aumenta */

window.addEventListener("resize", function(){

    if (window.innerWidth > 760)  {
        nav.classList.remove('move_nav');
        containerAll.style.filter = 'blur(0px)';
    }

});

const firebaseConfig = {
    apiKey: "AIzaSyASKRHLO-o3vQM008NWk7WEX9jupbmuqLw",
    authDomain: "decorii.firebaseapp.com",
    projectId: "decorii",
    storageBucket: "decorii.appspot.com",
    messagingSenderId: "140711445626",
    appId: "1:140711445626:web:0de335560c4cd1e9a827c3"
  };