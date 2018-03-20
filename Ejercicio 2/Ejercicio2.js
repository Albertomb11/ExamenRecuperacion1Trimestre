class Herramienta {
    constructor(nombre, descripcion, veces_reparado, garantia) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.veces_reparado = veces_reparado;
        this.garantia = garantia;
    }

    getHerramienta() {
        return `Se llama ${this.nombre}, la descripcion es ${this.descripcion} y con ${this.garantia} años de garantia.`;
    }

    getEsBuena() {
        return this.garantia > 5, this.veces_reparado = 0 ? // Me falta solo cambiar la "," por lo que sea(Que no se cual es) para que funcione
            `Es buena` : `Es mala`;
    }
}

function funcionEjecutar() {
    //Así creamos la herramienta
    let martillo = new Herramienta("Martillo", "Sirve para clavar algo", "0", 3);
    console.log(martillo);

    //Así recibimos el nombre, descripcion y garantia del y lo imprimimos por consola
    console.log(martillo.getHerramienta());

    //Asi vemos si el martillo va a ser bueno o no.
    console.log(martillo.getEsBuena());

}