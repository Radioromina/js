/*   */
const carrito=[]

const listaDeProductos= document.getElementById ("listaDeProductos")
const listCarrito= document.querySelector("#listCarrito")

const cargarProductos = (elemento)=> { 
    
    listaDeProductos.innerHTML = ""
    for (elemento of productos) {
        const liProductos = document.createElement("li")
        liProductos.innerHTML = `
        <img src="${elemento.img}" width="20%"></img>
        <h3> ${elemento.marca}, ${elemento.pulgadas}</h3>
        <p>Precio Final: $${elemento.importeFinal}</p>
        <button type="button" class="btn btn-warning">Agregar al Carrito</button>`
        liProductos.addEventListener("click", ()=> {
            agregarAlCarrito(`${liProductos.innerText}`)
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
        debugger
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


