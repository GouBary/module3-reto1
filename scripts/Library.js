import { Juegos } from "../scripts/Data.js";
import { Bjuegos }from "../modules/Detalles.js";

const Bjuegos1 =document.getElementById("Menu")
// console.log(Bjuegos)

document.addEventListener('click',({target}) =>{
    if(target.classList.contains('Boton')){
     const Alarma1=target.id
     const Alarma2=Juegos.filter((Alerta1)=> Alerta1.Category === Alarma1);
     if(Alarma1 === 'Todos'){
        Bjuegos(Bjuegos1,Juegos);
     }else{ 
        Bjuegos(Bjuegos1,Alarma2);
     }
    }
})
document.addEventListener("click",({target})=>{
   // console.log(target.id)
   let Idminiatura = target.id
   // .find es para encontrar un patron o secuencia
   let Idobjecto = Juegos.find(items=> items.id == Idminiatura);
   //  es para devuelver el indice que realiza la llamada
   let Items2 = Juegos.indexOf(Idobjecto);
   // console.log(Items2)
   localStorage.setItem('IndiceV',Items2);
   localStorage.setItem('SubirGame',JSON.stringify(Idobjecto));
})
Bjuegos(Bjuegos1,Juegos);
 