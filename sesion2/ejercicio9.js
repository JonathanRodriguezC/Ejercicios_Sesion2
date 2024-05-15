let listaCompras = {
    "Manzanas": 5,
    "Platanos": 5,
    "Elotes": 5,
    "pan": 5,

}

function generarListaCompras(listaCompras) {
    let listalegible = "Esta es us lista de compras:\n"
    for (let elemento in listaCompras) {
        listalegible += `${elemento}: ${listaCompras[elemento]} `
    }
    return listalegible
}



let listalegibleFinal = generarListaCompras(listaCompras);
console.log(listalegibleFinal)