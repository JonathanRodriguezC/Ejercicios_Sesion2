let personas = [

    { nombre: "Sergio", edad: 33, ciudad: "san salvador" },
    { nombre: "David", edad: 35, ciudad: "san salvador" },
    { nombre: "Sergio", edad: 33, ciudad: "santa tecla" }

];
function filtrarPer(personaObje, ciudad) {
    return personaObje.filter(person => person.edad > 30 && person.ciudad === ciudad)
}
let personasFiltradas = filtrarPer(personas, "san salvador")
console.log(personasFiltradas);