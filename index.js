window.onload=inicio;

let bt;
let veces=0;

function inicio(){
    bt=document.querySelector(".boton");
    bt.onclick=modificar;
fase0();
}

function modificar(){
    veces++;
    if (veces==1){
        document.querySelector(".precio").innerHTML=`5$`;
document.querySelector(".descripcion").innerHTML=`Cafe para llevar`;
document.querySelector(".imagen img").src=`https://www.html6.es/img/cafe2.png`
bt.classList.add("fase1");
}else if (veces==2){
    document.querySelector(".precio").innerHTML=`8$`;
document.querySelector(".descripcion").innerHTML=`Desayuno con muffin`;
document.querySelector("section").insertAdjacentHTML("beforeend",
`<div class="imagen2"><img src=
"https://www.html6.es/img/pasta.png"></div>`); 
bt.classList.add("fase2");
}else {
    bt.classList.remove("fase1");
    bt.classList.remove("fase2");
    fase0();
    veces=0;
}


}

function fase0(){
    bt.innerHTML=`
    <section>
    <div class="precio"></div>
    <div class="imagen"></div>
</section>
<div class="descripcion"></div>`;

document.querySelector(".precio").innerHTML=`2$`;
document.querySelector(".descripcion").innerHTML=`Cafe de Colombia`;
document.querySelector(".imagen").innerHTML=`<img src="https://www.html6.es/img/cafe1.png">`;
bt.classList.add("fase0");}