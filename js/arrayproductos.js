//ARRAYS DE OBJETOS 
class Producto {
    constructor(cantidad,img,tipo,marca, stock, precio, modelo, pulgadas,id,  iva, importeFinal) {
        
        this.cantidad = cantidad
        this.img = img 
        this.tipo= tipo
        this.marca = marca
        this.stock = stock
        this.precio = parseInt(precio)
        this.modelo = modelo
        this.pulgadas = pulgadas
        this.iva = IVA
        this.vender = false
        this.importeFinal = this.precioFinal()
        this.id = generadorID() 
    }
        precioFinal(){
            return parseFloat((this.precio * IVA).toFixed(2))
        }
        descuentoStock(cantidad) {
            this.stock = this.stock - this.cantidad
        } 
}

const IVA = 1.21

function obtengoProductos(){
    fetch("js/productos.json")
    .then(response=> response.json())
    .then(data=>{
        data.forEach(el => {
            productos.push(new Producto(el.cantidad, el.img, el.tipo, el.marca, el.stock, el.precio, el.modelo, el.pulgadas))
            
        });
        mostrarProductos(productos)
    })
    .catch(err => console.log(err));
}
obtengoProductos()






function generadorID(){
    return parseInt(Math.random() * 10000)
}
 