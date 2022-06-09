
alert("Vamos a comprar una tv juntos.")


console.log(tv1.stock)
tv1.vender = confirm(`Desea comprar la tv ${tv1.marca} ${tv1.modelo} por ${tv1.precioFinal()}?`)
tv1.unidades = parseInt(prompt("cuantas unidades?"))
tv1.descuentoStock(tv1.unidades)
console.log(tv1.stock)
