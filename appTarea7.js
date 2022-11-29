let compras = [];
let opcion;
let objeto;


do {

    objeto = prompt("Escribe un nuevo objeto para agregar: ");
    compras.push(objeto);
    
    opcion = confirm("¿Deseas ingresar un producto?");

} while (opcion == true);

for (var i = 0; i < compras.length; i++) {

     console.log(i,compras[i]);

    }

console.log("Fin de la lista");