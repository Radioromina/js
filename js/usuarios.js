const inputNombre = document.querySelector("#inputNombre")
const inputApellido = document.querySelector("#inputApellido")
const inputEmail = document.querySelector("#inputEmail")
const inputTele = document.querySelector("#inputTele")
const cargarForm = document.querySelector("#cargarForm")
const mostrarCompra = document.querySelector("#mostrarCompra")

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
        title: '¡Completa tus datos!',
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
        item += `<h2>${el.marca}, Modelo:${el.modelo} $${el.importeFinal}</h2>`
    }
    miCarrito.innerHTML = item    
}