class Producto {
    constructor(marca, stock, precio, modelo, pulgadas, iva) {
        this.marca = marca
        this.stock = stock
        this.precio = parseInt(precio)
        this.modelo = modelo
        this.pulgadas = pulgadas
        this.iva = iva
        this.vender = false
        this.unidades = 0
    }
        precioFinal(){
            return parseFloat((this.precio * this.iva).toFixed(2))
        }
        descuentoStock(unidades) {
            this.stock = this.stock - this.unidades 
        }
        
        
    }


