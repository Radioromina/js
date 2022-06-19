/*   */
let carrito=[]


const listaDeProductos = document.getElementById("listaDeProductos")

mostrarProductos(productos)

function mostrarProductos(array){

array.forEach(el=>{
    let div = document.createElement("div")
    div.innerHTML = `
    <div class="flex-row justify-content-center">
        <div class="card w-50 flex-wrap" >
          <img src="${el.img}" class="card-img-top">
          <div class="card-body">
            <h5> ${el.marca}, ${el.pulgadas}</h5>
            <p>Precio Final:$${el.importeFinal}</p>
            <button type="button" id="boton${el.id}" class=" btn btn-warning">Agregar al Carrito</button>
          </div>
        </div>
    `
    listaDeProductos.appendChild(div)
    let btnAgregar = document.getElementById(`boton${el.id}`)
    btnAgregar.addEventListener("click",()=>{
        agregarAlCarrito(el.id)
    })
})
}

function agregarAlCarrito(id) {
    let productoAgregar = productos.find(obj=>obj.id === id)
    carrito.push (productoAgregar)
    mostrarCarrito(productoAgregar)
    actualizarCarrito()
}

function mostrarCarrito(productoAgregar){
    let div = document.createElement("div")
    div.innerHTML=`
    <p>${productoAgregar.marca}, ${productoAgregar.modelo}, Precio Final: $${productoAgregar.importeFinal}</p>
    <button type="button" id="eliminar${productoAgregar.id}" class="btn btn-warning">eliminar del carrito</button>
    `
    listCarrito.appendChild(div)
    let btnEliminar = document.getElementById(`eliminar${productoAgregar.id}`)
    btnEliminar.addEventListener("click", ()=>{
        btnEliminar.parentElement.remove()
        carrito = carrito.filter(el=> el.id !== productoAgregar.id)
        actualizarCarrito()
        console.log(carrito)
    })

}

function actualizarCarrito(){
    precioTotal.innerHTML = carrito.length
    precioTotal.innerHTML = carrito.reduce((acc,el)=> acc + el.importeFinal, 0)
}










/* const listaDeProductos= document.getElementById ("listaDeProductos")
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


cargarProductos()

const agregarAlCarrito = (modelo, img, precio)=> { 
    if (productos != "") {
        const item = document.createElement("li")
        item.innerHTML = `<div>
        <h2>${modelo}</h2>
        <img src="${img}" alt="">
        <p>Precio: $${precio}</p>
    </div>`
        item.id = productos + "enCarrito"
        listCarrito.append(item) 
    }
} 

const eliminarDelCarrito = (productoID)=> { 
    if (confirm("¿Desea eliminar el producto del carrito?")) {
        const itemAeliminar = document.getElementById(productoID)
            itemAeliminar.remove()
        return
    }
} */
/* generadorAutomatico() */


