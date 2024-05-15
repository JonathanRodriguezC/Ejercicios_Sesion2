let estudiantes = [
    { nombre: "Grecia", edad: 20 },
    { nombre: "Luis", edad: 21 },
    { nombre: "Anderson", edad: 23 },

]
let profesores = [
    { nombre: "Juan", materia: "Matematicas" },
    { nombre: "medrano", materia: "Ciencias" },
    { nombre: "Julio", materia: "Lenguaje" },
]

function combinaObjetos(a, b) {
    let ComnunidadEducativa = [...a, ...b];
    return ComnunidadEducativa;
}
let comunidad = combinaObjetos(estudiantes, profesores)
console.log(comunidad);