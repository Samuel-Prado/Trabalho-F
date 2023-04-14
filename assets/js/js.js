
var btnMob = document.querySelector(".btnMub");

btnMob.addEventListener('click', function() {

    var btnMob1 = document.querySelector(".linha1");
    var btnMob2 = document.querySelector(".linha2");
    var btnMob3 = document.querySelector(".linha3");
    btnMob1.classList.toggle("ativo");
    btnMob2.classList.toggle("ativo");
    btnMob3.classList.toggle("ativo");
});
