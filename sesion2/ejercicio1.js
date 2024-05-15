
const readline = require('readline');


rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//ejemplo de entrada de datos
//hola como estas, muy bien y tu, tu eres mi hermana
rl.question(`ingrese una cadena de texto separados por comas: `, (cadena) => {
    textos = cadena.split(',');
    contar(textos);



})

contador = {}
function contar(textos) {


    textos.forEach(texto => {
        palabras = texto.split(' ');
        palabras.forEach(palabra => {
            if (contador[palabra]) {
                contador[palabra] = contador[palabra] + 1;


            } else if (palabra != '') {
                contador[palabra] = 1;
            }
        })

    });
    console.log(contador);
    rl.close();
}