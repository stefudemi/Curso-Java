//EJEMPLO PARA DESCUENTO

/* 
function descuento(resultado)
if (resultado > 10000 ){
    resultado = resultado - (resultado*0.2);
    alert(resultado);
    return;
}
else if (resultado > 5000){
    resultado = resultado - (resultado*0.1);
    alert(resultado);
    return;
}
else if (resultado < 5000){
    resultado = resultado - (resultado*0.0);
    alert(resultado);
    return;
}

let costoFinal = descuento(resultado)
alert(`El total con descuento es de ${costoFinal}.`); */





alert("Bienvenido a Katana - Indumentaria deportiva y de combate");



function total(item, unidades) {
if (item === "" || unidades === "") {
    return "Por favor, complete todos los campos"; 
} else if (item === "AA") {
    let item = 3000;
    return item * unidades; 
} else if (item === "AB") {
    let item = 5000;
    return item * unidades;
} else if (item === "AC") {
    let item = 7000;
    return item * unidades;
} else {
    alert("Por favor, revise el codigo ingresado");
}
}

let item = prompt("Por favor ,ingrese el codigo de prenda").toUpperCase();
let unidades = parseInt(prompt("Por favor, ingrese el número de unidades"));


let resultado = total(item, unidades);
alert(`El total es de ${resultado}.`);



for (let total = 1; total < 1000; total++) {
alert(`Su numero de orden es ${total}`);
break;
}


