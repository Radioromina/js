const inputNombre = document.querySelector("#inputNombre")
const inputApellido = document.querySelector("#inputApellido")
const inputEmail = document.querySelector("#inputEmail")
const inputTele = document.querySelector("#inputTele")
const cargarForm = document.querySelector("#cargarForm")
const mostrarCompra = document.querySelector("#mostrarCompra")
const total= document.querySelector("#total")

function guardarDatosUser(){
    let datosUsuarios = {nombre: inputNombre.value,
                        apellido: inputApellido.value,
                        email: inputEmail.value,
                        telefono: inputTele.value
                    }
    let datoU = JSON.stringify(datosUsuarios)
    localStorage.setItem("datosUsuarios", datoU)
}

function guardarCompra() {
    carrito = JSON.stringify(carrito)
    localStorage.setItem("carrito", carrito)
}
cargarForm.addEventListener("click", (e)=>{
    e.preventDefault()
    inputNombre.value, inputApellido.value, inputEmail.value, inputTele.value === "" ? swal.fire({
        icon: 'error',
        title: '¡Completa tus datos!',
        confirmButtonText: 'Aceptar'
    }) : (guardarDatosUser(), guardarCompra(), swal.fire({
        icon: 'success',
        title: '¡Enviado!',
        confirmButtonText: 'Aceptar'
      })) 
    
    
})


mostrarCompra.addEventListener("click", (e)=>{
    e.preventDefault()
    carrito.length === 0 ? 
    swal.fire({
        title: '¡Tu carrito se encuentra vacío!',
        icon: 'error',
        confirmButtonText: 'Aceptar'
}):recuperarCompra()
})

function recuperarCompra(){
    
    let carrito = JSON.parse(localStorage.getItem("carrito")) || []
    let item =""
    
    for (el of carrito){
        item += `<h4>${el.marca}, Modelo:${el.modelo} $${el.importeFinal}</h4>
        <h4>Cantidad:${el.cantidad}</h4>`  
    }
    miCarrito.innerHTML = item 
    
    let precioTotal = carrito.reduce((acc, el) => acc + el.importeFinal * el.cantidad, 0)
    let div =document.createElement("div")
    div.innerHTML=`<h4>Precio Total: $${precioTotal}</h4>`
    total.appendChild(div)
}