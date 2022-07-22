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


cargarForm.addEventListener("click", (e)=>{
    e.preventDefault()
    inputNombre.value, inputApellido.value, inputEmail.value, inputTele.value === "" ? swal.fire({
        icon: 'error',
        title: '¡Completa tus datos!',
        confirmButtonText: 'Aceptar'
    }) : (guardarDatosUser(),  swal.fire({
        icon: 'success',
        title: '¡Enviado!',
        confirmButtonText: 'Aceptar'
      }), removerStorage(), setTimeout(()=>{
        window.scroll(top)
      }, 500)
       ,setTimeout(()=>{
          location.reload()
      }, 800)) 
    
    
})

function removerStorage () {
    localStorage.clear()
}

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

    let carro = JSON.parse(localStorage.getItem("carrito")) || []
    
    let item =""
    carro.forEach(el => {
        item += `
        <h4>${el.marca}, Modelo:${el.modelo} $${el.importeFinal}</h4>
        <h4>Cantidad:${el.cantidad}</h4>`
    
    });
    miCarrito.innerHTML = ""
    miCarrito.innerHTML += item
    let precioTotal = carro.reduce((acc, el) => acc + el.importeFinal * el.cantidad, 0)
    let div = document.createElement("div")
    div.innerHTML=`<h4>Precio Total: $${precioTotal}</h4>`
    total.innerHTML = ""
    total.appendChild(div)

} 