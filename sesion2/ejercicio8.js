function validarObjeto(objeto) {
    const propiedades = ['nombre', 'direccion', 'telefono'];
    for (let propiedad of propiedades) {
        if (objeto.hasOwnProperty(propiedad)) {

            let mjs = "Objeto Aprobado"
            return mjs
        }
        else {
            mjs = "Objeto no valido"
            return mjs
        }
    }


}
let cliente = {

    nombre: "william", direccion: "san miguel", telefono: 485648831
}
let cliente1 = {

    direccion: "san miguel", telefono: 485648831
}

console.log(validarObjeto(cliente));
console.log(validarObjeto(cliente1));