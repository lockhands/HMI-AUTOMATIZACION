


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
    
    tipo1.className="yogurt";
    tipo1.innerHTML="1";


    setTimeout(function(){
        tipo1.className="desactivado";  
        tipo1.innerHTML=""; 
        tipo2.className="yogurt";  
    }, 2000);
    setTimeout(function(){
        
    }, 5000);
    setTimeout(function(){
        tipo2.className="desaparecido";
        tipo3.className="yogurt";
        tipo3.innerHTML="1";
    },7500);
    setTimeout(function(){
        tipo3.innerHTML="";
        tipo3.className="desaparecido";
        
    },9000)
})