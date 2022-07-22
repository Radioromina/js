
let carrito=[]
const productos = []

const listCarrito = document.getElementById("listCarrito")
const listaDeProductos = document.getElementById("listaDeProductos")
const vaciarCarrito = document.getElementById("vaciar-carrito")
const precioTotal = document.getElementById("precioTotal")
const guardarProductos = document.getElementById("guardarProductos")



function mostrarProductos(array){
    document.getElementById('listaDeProductos').innerHTML = "";   
    array.forEach(el=>{
        const {img, tipo, marca, pulgadas, importeFinal, id} = el
        let div = document.createElement("div")
        div.className = "w-25 d-flex flex-wrap"
        div.innerHTML = `
        <div class="card border-1 border-warning text-center">
        <img src="${img}" class="card-img-top"></img>
        <div class="card-body">
        <h5> ${tipo},${marca}, ${pulgadas}</h5>
        <p class="h6">Precio:$${importeFinal}</p>
        <button type="button" id="boton${id}" class="liveToastBtn btn btn-warning border-black">Agregar al Carrito</button>
        </div>
        </div>
        `
        listaDeProductos.appendChild(div)
        const btn = document.getElementById(`boton${el.id}`)
        btn.addEventListener("click", ()=>{
            const toastLiveExample = document.getElementById('liveToast')
            const toast = new bootstrap.Toast(toastLiveExample)
            toast.show()
        
            agregarAlCarrito(el.id)
            carroJson()
        })
        
    })
    const tiposElectro=['SMART','NOTEBOOK','CELULAR', 'TODOS']

    tiposElectro.forEach(tipo => {

        const btnProdu = document.createElement('button');
        btnProdu.innerHTML = tipo;
        btnProdu.classList.add('btn','btn-warning','m-4','fst-italic');

        btnProdu.addEventListener('click', ()=>{

            if(tipo=== 'TODOS'){
                document.getElementById('listaDeProductos').innerHTML = "";

                productos.forEach(el =>{
                    
                    let div = document.createElement("div")
                        div.className = "w-25 d-flex flex-wrap"
                        div.innerHTML = `
                        <div class="card border-1 border-warning text-center">
                            <img src="${el.img}" class="card-img-top"></img>
                        <div class="card-body">
                            
                            <h5> ${el.tipo},${el.marca}, ${el.pulgadas}</h5>
                            <p class="h6">Precio:$${el.importeFinal}</p>
                            <button type="button" id="boton${el.id}" class=" btn btn-warning border border-black">Agregar al Carrito</button>
                        </div>
                        </div>
                        `
                        listaDeProductos.appendChild(div)
                        const btn = document.getElementById(`boton${el.id}`)
                        btn.addEventListener("click", ()=>{
                        agregarAlCarrito(el.id)
                        carroJson()
                        })

                })


            }else{

                const productosFiltrados = productos.filter( pro => pro.tipo === tipo);
                console.log(productosFiltrados);
    
                document.querySelector('#listaDeProductos').innerHTML = "";

                productosFiltrados.forEach(el =>{
                    let div = document.createElement("div")
                        div.className = "w-25 d-flex flex-wrap"
                        div.innerHTML = `
                        <div class="card border-1 border-warning text-center">
                            <img src="${el.img}" class="card-img-top"></img>
                        <div class="card-body">
                            
                            <h5> ${el.tipo},${el.marca}, ${el.pulgadas}</h5>
                            <p class="h6">Precio:$${el.importeFinal}</p>
                            <button type="button" id="boton${el.id}" class=" btn btn-warning">Agregar al Carrito</button>
                        </div>
                        </div>
                        `
                        listaDeProductos.appendChild(div)
                        const btn = document.getElementById(`boton${el.id}`)
                        btn.addEventListener("click", ()=>{
                        agregarAlCarrito(el.id)
                        carroJson()
                        })

                })
            }

        })

        document.querySelector('#tipos').appendChild(btnProdu);
    })

}

function carroJson () {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

function removeJson (){
    localStorage.removeItem("carrito")
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
        const {img} = prod
        const div = document.createElement("div")
        div.innerHTML=`
        <img src="${img}" class="card-img-top w-25"></img>
        <p>${prod.marca}</p>
        <p>${prod.modelo}</p>
        <p>Importe Final: $${prod.importeFinal}</p>
        <button type="button" id="${prod.id}" class="btn btn-warning restarProd">-</button>
        <span id="cantidad">${prod.cantidad}
        <button type="button" id="${prod.id}" class="btn btn-warning sumarProd">+</button>
        
        `
        listCarrito.appendChild(div)
    })
    precioTotal.innerText = (carrito.reduce((acc, prod) => acc + prod.importeFinal * prod.cantidad, 0)).toFixed(2)



}

listCarrito.addEventListener("click", (e)=>{

    const restarProd = e.target.classList.contains("restarProd")
    const sumarProd= e.target.classList.contains("sumarProd")
    if (sumarProd || restarProd) {
        for (let i = 0; i < carrito.length; i++) {
            if (carrito[i].id == e.target.id) {
                if (sumarProd) {
                    carrito[i].cantidad +=1
                }else if (restarProd) {
                    carrito[i].cantidad -=1
                }
                carroJson()
            }
            if (carrito[i].cantidad <= 0) {
                carrito.splice (i, 1)
                removeJson()
            }
        }
        actualizarCarrito()
    } 
})


vaciarCarrito.addEventListener("click",()=>{
    carrito.length = 0
    precioTotal.innerText= 0
    removeJson()
    actualizarCarrito()
})

function recuperarCarrito (){
    if (localStorage.length > 0){
        recupero = JSON.parse(localStorage.getItem("carrito"))
        recupero.forEach(el => {
            carrito.push(new Producto(el.cantidad, el.img, el.tipo, el.marca, el.stock, el.precio, el.modelo, el.pulgadas))
           
            actualizarCarrito()
        })
        
    }
}

recuperarCarrito()