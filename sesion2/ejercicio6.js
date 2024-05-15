let personas = [

    { nombre: "Sergio", edad: 33, genero: "hombre" },
    { nombre: "David", edad: 35, genero: "hombre" },
    { nombre: "Sergio", edad: 33, genero: "hombre" }

];

function buscarNombre(arrayPesona, nombre) {
    return arrayPesona.find(person => person.nombre === nombre)
}
let personaBuscada = buscarNombre(personas, "Sergio");
console.log(personaBuscada)