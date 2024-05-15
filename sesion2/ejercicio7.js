//Ordenar por edad

let personas = [


    { nombre: "Juan", edad: 2 },
    { nombre: "Maria", edad: 1 },
    { nombre: "Mario", edad: 4 },
    { nombre: "Ester", edad: 5 },
]

let personasOrdenadas = personas.sort((a, b) => a.edad - b.edad)
console.log(personasOrdenadas);