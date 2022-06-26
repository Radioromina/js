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
productos.push (new Producto("../../public/img/notebook-noblex.webp","Noblex",5,"56999","intel Celeron","14.1" ,IVA))
productos.push (new Producto("../../public/img/notebook-exo.jpg","Exo",3,"75999","SMART P37","14.1", IVA))
productos.push (new Producto("../../public/img/NOTEBOOK-LENOVO.webp","Lenovo",4,"61900","ideaPad","14.1", IVA))
productos.push (new Producto("../../public/img/NOTEBOOK-LENOVO.webp","Lenovo",2,"83999","ideaPad","15.6", IVA))
productos.push (new Producto("../../public/img/notebook-acer.webp","acer",2,"94999","Aspire","15.6", IVA))
productos.push (new Producto("../../public/img/notebook-lenovo-think.webp","Lenovo",2,"167325","ThinkPad","15.6", IVA))
productos.push (new Producto("../../public/img/xiaomi--pocophone-pro.jpg","Xiaomi",5,"100970","POCOPHONE PRO","6.53", IVA))
productos.push (new Producto("../../public/img/samsung-galaxys21.jpg","Samsung Galaxy", 12,"104999","S21","6.4", IVA))
productos.push (new Producto("../../public/img/samsung-galaxyA23.jpg","Samsung Galaxy",9,"48999","A23","6.6", IVA))
productos.push (new Producto("../../public/img/motorola-EDGE20LITE.jpg","Motorola",5,"69999","6.7","EDGE20 LITE", IVA))
productos.push (new Producto("../../public/img/xiaomi-redmi-note10.jpg","xiaomi",14,"61400","REDMI NOTE10","6.5", IVA))
productos.push (new Producto("../../public/img/motorolaG60S.jpg","Motorola",13,"54999","G60S","6.8", IVA))
productos.push (new Producto("../../public/img/xiaomi-mi11.jpg","Xiaomi",3,"108159","MI11","6.67", IVA))
productos.push (new Producto("../../public/img/LG-K50.jpg","LG",7,"48999","K50","6.26", IVA))
productos.push (new Producto("../../public/img/LG-VELVET.jpg","LG",8,"199899","VELVET","6.8", IVA))
productos.push (new Producto("../../public/img/LGK51S.jpg","LG",4,"48351","K1S", "6.55",IVA))

}
                         
function generadorID(){
    return parseInt(Math.random() * 10000)
}
 