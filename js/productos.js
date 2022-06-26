
let carrito=[]


const listaDeProductos = document.getElementById("listaDeProductos")

mostrarProductos(productos)

function mostrarProductos(array){

array.forEach(el=>{
    let div = document.createElement("div")
      div.innerHTML = `
        <div class="card border-0 text-center" class="col-sm-12" >
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
    <button type="button" id="eliminar${productoAgregar.id}" class="btn btn-warning">Eliminar del carrito</button>
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
    precioTotal.innerHTML = (carrito.reduce((acc,el)=> acc + el.importeFinal, 0)).toFixed(2)
}












