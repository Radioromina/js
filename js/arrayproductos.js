//ARRAYS DE OBJETOS 
class Producto {
    constructor(img,marca, stock, precio, modelo, pulgadas,id, iva, importeFinal) {
        
        this.img = img 
        this.marca = marca
        this.stock = stock
        this.precio = parseInt(precio)
        this.modelo = modelo
        this.pulgadas = pulgadas
        this.iva = IVA
        this.vender = false
        this.unidades = 0
        this.importeFinal = this.precioFinal()
        this.id = generadorID() 
    }
        precioFinal(){
            return parseFloat((this.precio * IVA).toFixed(2))
        }
        descuentoStock(unidades) {
            this.stock = this.stock - this.unidades 
        }
        
        
    }

    const IVA = 1.21



const productos = []

generadorAutomatico()

function generadorAutomatico () {
productos.push (new Producto("../../public/img/samsung50.jpg","Smart tv Samsung", 15, "89000", "UN50", 50, IVA))
productos.push (new Producto("../../public/img/samsung43.jpg", "Smart tv Samsung",12, "45000", "UN32", 32, IVA))
productos.push (new Producto("../../public/img/philips50.jpg","Smart tv Philips", 8, "75000", "50PU", 50, IVA))
productos.push (new Producto("../../public/img/philips43.jpg","Smart tv Philips", 13, "55000", "43PF", 43, IVA))
productos.push (new Producto("../../public/img/LG50.jpg","Smart tv LG", 10, "60000", "43LM", 43, IVA))
productos.push (new Producto("../../public/img/LG43.jpg","Smart tvLG", 15, "120000", "50UN", 50, IVA))
productos.push (new Producto("../../public/img/noblex50.jpg","Smart tv Noblex", 20, "71999", "DM50", 50, IVA))
productos.push (new Producto("../../public/img/noblex43.jpg","Smart tv Noblex", 17, "44999", "DK43", 43, IVA))
}

function generadorID(){
    return parseInt(Math.random() * 10000)
}