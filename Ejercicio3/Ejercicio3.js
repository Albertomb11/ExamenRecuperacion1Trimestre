let herramienta1 = {nombre:"Martillo",descripcion:"Sirve para clavar",reparado:1,garantia:1};
let herramienta2 = {nombre:"Destornillador",descripcion:"Sirve para desatornillar",reparado:4,garantia:4};
let herramienta3 = {nombre:"Llave inglesa",descripcion:"Sirve para aflojar algo",reparado:0,garantia:3};
let herramienta4 = {nombre:"Clavos",descripcion:"Sirve para sujetar algo",reparado:10,garantia:2};
let herramienta5 = {nombre:"Alambres",descripcion:"Sirve para agarrar algo",reparado:2,garantia:0};
let herramienta6 = {nombre:"Pico",descripcion:"Sirve para picar algo",reparado:4,garantia:1};
let herramienta7 = {nombre:"Radial",descripcion:"Sirve para cortar algo",reparado:7,garantia:7};
let herramienta8 = {nombre:"Alicates",descripcion:"Sirve para coger algo",reparado:1,garantia:0};
let herramienta9 = {nombre:"Bridas",descripcion:"Sirve para coger algo",reparado:1,garantia:4};
let herramienta10 = {nombre:"Cutter",descripcion:"Sirve para cortar algo",reparado:9,garantia:5};

let listadoHerramientas = [
    herramienta1,
    herramienta2,
    herramienta3,
    herramienta4,
    herramienta5,
    herramienta6,
    herramienta7,
    herramienta8,
    herramienta9,
    herramienta10
];

function ejercicio3() {

    listadoHerramientas.
    filter(x => x.garantia < 3)
        .sort( x => x.reparado.descent)
        .filter(x => x.reparado)
        .map( x => x.nombre.toUpperCase()+"-"+x.descripcion.toUpperCase() );

    console.log(listadoHerramientas);
}