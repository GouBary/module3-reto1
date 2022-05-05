import { AñadirG } from "./Carritoarchivo.js";
import { Juegos }from"./Data.js";

const Mgames=document.querySelector('.Todo');

const Tgames=JSON.parse(localStorage.getItem('SubirGame'));
// console.log(Tvideos)
let Cvacias=[] 
Cvacias.push(Tgames)
AñadirG(Mgames,Cvacias)





