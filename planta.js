


let boton = document.getElementById("boton");
let envase1= document.getElementById("envase1");
let envase2= document.getElementById("envase2");
let envase3=document.getElementById("envase3");
let tipo1=document.getElementById("tipo1");
let tipo2=document.getElementById("tipo2");
let contenedor1=document.getElementById("contenedor1");
let contenedor2=document.getElementById("contendor2");
let reloj= document.getElementById("reloj");
let tipo3=document.getElementById("tipo3");
let spinnerproceso=document.getElementById("spinner-proceso");

//Tablero y fases

let fase1=document.getElementById("fase-1");
let fase2=document.getElementById("fase-2");
let fase3=document.getElementById("fase-3");
let fasemelao=document.getElementById("fase-melao");
let faseyogurt=document.getElementById("fase-yogurt");
let spinner=document.getElementById("spinner");
let aviso=document.getElementById("aviso");
/*if(tipo1.getBoundingClientRect().x > 11){
    console.log("hola");
}*/

const flag = 0;
while(flag==1){
    if(tipo1.getBoundingClientRect().x > 11){
        console.log("hola");
    }
}


boton.addEventListener('click', (event) => {
    
    if(aviso.className === "fase-2"){
        aviso.className="fase-2-0";
    }
    tipo1.className="yogurt";
    tipo1.innerHTML="1";

    fase1.className="fase-1";

    setTimeout(function(){
        fase1.className="fase-0";
        fase2.className="fase-1";
        fasemelao.className="fase-melao-1";
        faseyogurt.className="fase-yogurt-1";
        tipo1.className="desactivado";  
        tipo1.innerHTML=""; 
        tipo2.className="yogurt";  

    }, 2000);
    setTimeout(function(){
        spinner.innerText="5g";
        spinner.className="spinner-2";
        spinnerproceso.inerText="5g";
        spinnerproceso.className="spinner-2";
        fasemelao.className="fase-0";
        
    }, 4500);
    setTimeout(function(){
        spinner.innerText="7.5g";
        spinner.className="spinner-3";
        spinnerproceso.innerText="7.5g";
        spinnerproceso.className="spinner-3";
        
    },7000)
    setTimeout(function(){
        spinner.innerHTML="15g";
        spinner.className="spinner-4"
        spinnerproceso.innerText="15g";
        spinnerproceso.className="spinner-4";
        faseyogurt.className="fase-0";
    },9500)

    setTimeout(function(){
        spinner.innerText="0g";
        spinner.className="spinner-1";
        spinnerproceso.innerText="0g";
        spinnerproceso.className="spinner-1";
        fase2.className="fase-0";
        fase3.className="fase-1";
        tipo2.className="desaparecido";
        tipo3.className="yogurt";
        tipo3.innerHTML="1";
    },11000);
    setTimeout(function(){
        fase3.className="fase-0";
        tipo3.innerHTML="";
        tipo3.className="desaparecido";
        aviso.className="fase-2";
    },11500)
})