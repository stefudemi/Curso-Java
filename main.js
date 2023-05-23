const productos = [
    { nombre: "Remera", precio: 3500 , },
    { nombre: "Pantalon corto", precio: 2000 },
    { nombre: "Guantes", precio: 2500 },
    { nombre: "Bucal", precio: 4500 },
    { nombre: "Vendas", precio: 3000 },
];




//ACA VA AL PRUEBA//

alert("Bienvenido a Katana - Indumentaria deportiva y de combate");

let comprar = prompt("Desea comprar algo?")

while (comprar.toLowerCase() != "no") {
    let productoElegido = prompt("Ingresa el nombre del equipo que desea comprar: ");
    console.log( productos.find((producto) => producto.nombre === productoElegido ) );
    
    comprar = prompt("Desea comprar algo más?")
 }


 for (let total = 1; total < 1000; total++) {
    alert(`Su numero de orden es ${total}`);
    break;
    }