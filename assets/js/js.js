
function test(){
    var btnMob1 = document.querySelector(".btnMub");
    btnMob1.classList.toggle("ativo");
    
    var btnMob2 = document.querySelector(".itens");
    btnMob2.classList.toggle("ativo");
};

function btnNo(){
    if(window.innerWidth < 600){
        test();
    }
};
