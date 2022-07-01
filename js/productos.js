
let carrito=[]

const listCarrito = document.getElementById("listCarrito")
const listaDeProductos = document.getElementById("listaDeProductos")
const vaciarCarrito = document.getElementById("vaciar-carrito")
const precioTotal = document.getElementById("precioTotal")




mostrarProductos(productos)

function mostrarProductos(array){
    
    array.forEach(el=>{
        const {img, marca, pulgadas, importeFinal, id} = el
        let div = document.createElement("div")
        div.innerHTML = `
        <div class="card border-0 text-center" class="col-sm-12" >
        <img src="${img}" class="card-img-top">
        <div class="card-body">
        <h5> ${marca}, ${pulgadas}</h5>
        <p>Precio Final:$${importeFinal}</p>
        <button type="button" id="boton${id}" class=" btn btn-warning">Agregar al Carrito</button>
        </div>
        </div>
        `
        listaDeProductos.appendChild(div)
        const btn = document.getElementById(`boton${el.id}`)
        btn.addEventListener("click", ()=>{
            agregarAlCarrito(el.id)
        })
        
    })
}

const agregarAlCarrito = (elId) => {
    const productoRepetido = carrito.some(prod => prod.id === elId)
    if (productoRepetido) {
        const producto = carrito.map (prod =>{
            if (prod.id === elId){
                prod.cantidad++
            }
        })
    }else {
        const item = productos.find ((prod) => prod.id === elId)
        carrito.push(item)
        console.log(carrito)
    }
    actualizarCarrito()
}

const actualizarCarrito =() =>{
    listCarrito.innerHTML=""
    carrito.forEach((prod)=>{
        const div = document.createElement("div")
        div.innerHTML=`
        <p>${prod.marca}</p>
        <p>${prod.modelo}</p>
        <p>Importe Final: $${prod.importeFinal}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</p>
        <button onclick = "eliminarDelCarrito(${prod.id})" class="btn-primary">borrar </button>
        `
        listCarrito.appendChild(div)
        localStorage.setItem("carrito", JSON.stringify("carrito"))
    })
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.importeFinal * prod.cantidad, 0)
}

const eliminarDelCarrito = (elId) =>{
    const item = carrito.find ((prod)=> prod.id === elId)
    const index = carrito.indexOf(item)
    carrito.splice(index, 1)
    actualizarCarrito()
}
vaciarCarrito.addEventListener("click",()=>{
    carrito.length = 0
    actualizarCarrito()
})