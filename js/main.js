let numero = parseInt(prompt("Hola, ingrese un numero del 1 al 50... yo voy a ir sumando vos no te preocupes"));


for (let i = 1; i <= 50; i++){
    let resultado = numero + i;
    console.log("Este es nuestro resultado:",resultado)
    if (resultado === 25){
        console.log("estas en la mitad del recorrido")
    }else if(resultado === 40){
        console.warn("tene cuidado estas terminando")
    }else if(resultado === 50){
        console.error("llegaste al final!!!")
        break;
    }else if(numero >= 50){
        alert("es mayor a 50! recarga la página")
        break;
    }
}