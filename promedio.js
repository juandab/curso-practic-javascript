const lista1 = [
    100,
    200,
    300,
    500
];

function calculaMediaAritmetica(lista) {
//     let sumaLista = 0;

// for (let index = 0; index < lista.length; index++) {
//     sumaLista = sumaLista + lista[index];   
// }

const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
    }
);

const promedioLista =  sumaLista / lista.length;
return promedioLista;
}