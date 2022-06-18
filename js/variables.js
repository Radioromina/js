/*   */
const carrito=[]

const listaDeProductos= document.getElementById ("listaDeProductos")
const listCarrito= document.querySelector("#listCarrito")

const cargarProductos = (elemento)=> { 
    
    listaDeProductos.innerHTML = ""
    for (elemento of productos) {
        const liProductos = document.createElement("li")
        liProductos.innerHTML =
        `<div class="flex-row justify-content-center">
        <div class="card w-50" >
          <img src="${elemento.img}" class="card-img-top">
          <div class="card-body">
            <h5> ${elemento.marca}, ${elemento.pulgadas}</h5>
            <p>Precio Final:$${elemento.importeFinal}</p>
            <button type="button" id="boton" class=" btn btn-warning">Agregar al Carrito</button>
          </div>
        </div>`
        const boton = liProductos.querySelector("#boton")
        boton.addEventListener("click", ()=> {
            console.log("Click en boton")
            agregarAlCarrito(elemento.modelo, elemento.img, elemento.precio)
        })
        listaDeProductos.append(liProductos)
    }
}

let boton = document.getElementById("btnPrincipal")
boton.addEventListener("click", respuestaClick)
function respuestaClick() {
    console.log("Respuesta evento");
}

cargarProductos()

const agregarAlCarrito = (productos)=> { 
    if (productos > "") {
      
        const id = productos + "enCarrito" 
        const liCarrito = document.createElement("li")
        liCarrito.innerText = productos
        liCarrito.id = id
        liCarrito.addEventListener("dblclick", ()=> {
            eliminarDelCarrito(`${id}`)
        })
        listCarrito.append(liCarrito)
    }
}
const eliminarDelCarrito = (productoID)=> { 
    if (confirm("¿Desea eliminar el producto del carrito?")) {
        const itemAeliminar = document.getElementById(productoID)
              itemAeliminar.remove()
              return
    }
}
/* generadorAutomatico() */


