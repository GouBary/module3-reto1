export function AñadirG (Contenido,data){ 
  Contenido.innerHTML=''
  data.forEach((element) => {
      const {id,miniatura,Category,Todos,precio} = element
       Contenido.innerHTML +=`   
        <div id="Menu">
        <img src="${miniatura}" alt="">
       <h3 class="Producto"> Producto ${id}</h3> <p class="Precio">$ ${precio} pesos</p> 
       <p class="Categoria">${Todos}</p> <p class="Genero">${Category}</p>
        </div> 
        `
  });
}