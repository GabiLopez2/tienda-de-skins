//alert()

let dinero = 10000


function menu(){
    let nombre = prompt("tienda de skins, ingresar su nombre");
    console.log(nombre.toUpperCase())
    ingresePassword(nombre);
}

menu();

function ingresePassword(nombre){
    if(nombre){
        let password = prompt("ingresar clave");
        let edadUsuario = 0;
    do{
        edadUsuario = Number(prompt("Ingrese su edad, dede ser mayor de 18"))
        console.log(edadUsuario)
    }   while (edadUsuario < 18)
        confirmarPassword(password);
    } else{
        alert("ingrese su contraseña para comprar");
    }
}

function confirmarPassword(password){
    if(password === "55555"){
        listaDeEskins()
    }else{
        alert("clave incorrecta")
    }
}

function listaDeEskins(){
    console.log("-////////////////////////-")
    console.log("1- AWP Dragonlore")
    console.log("2- USP Neo nir")
    console.log("3- P250 Asimov")
    console.log("4- AK47 Case Hardened")
    console.log("5- Consultar Saldo")
    console.log("6- Salir")
 
let productos = prompt("Ingrese el producto a comprar")
switch(productos){
    case "1":
    let  awp = 500
        dragonLore(awp)
        break
    case "2":
    let usp = 300
        uspNeoNIR(usp)
        break
    case "3":
    let p250 = 800
         p250Asimov(asimov)
        break
    case "4":
    let ak47 = 1000
        caseHardened(ak47)
        break
    case "5":
     consultarSaldo()
        break
    case "6":
    salir()
        break  
    default:
        alert("Has cancelado")
    }
}

function dragonLore (awp) {
    if(awp > dinero){
        alert("No tienes suficiente credito")
    }else{
        document.write("AwpDrganlore <br>")
        alert("Compraste una DragonLore")
        dinero -= awp
    }
    listaDeEskins()
}

function uspNeoNIR (usp) {
    if(usp > dinero){
        alert("No tienes suficiente credito")
    }else{
        document.write("uspNeoNIR <br>")
        alert("Compraste una uspNeoNIR")
        dinero -= usp
    }
    listaDeEskins()
}

function p250Asimov (asimov) {
    if(asimov > dinero){
        alert("No tienes suficiente credito")
    }else{
        document.write("p250Asimov <br>")
        alert("Compraste una p250Asimov")
        dinero -= asimov
    }
    listaDeEskins()
}

function caseHardened (ak47) {
    if(ak47 > dinero){
        alert("No tienes suficiente credito")
    }else{
        document.write("caseHardened <br>")
        alert("Compraste una caseHardened")
        dinero -= ak47
    }
    listaDeEskins()
}

function consultarSaldo (){
    alert("Su sueldo es "+ dinero)
    listaDeEskins()
}

function salir(){
    alert("Gracias por comprar")
}
