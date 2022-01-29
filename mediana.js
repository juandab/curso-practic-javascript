function calculaMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista =  sumaLista / lista.length;
    return promedioLista;
    }

var arr = [500, 250, 300, 100];

arr.sort(function(a,b){return a - b;});


function encontraMediana(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const mitadLista = parseInt(lista.length / 2);
    
    function esPar(numerito) {
        if (numerito % 2 === 0) {
            return true;
        }else {
            return false;
        }
    }
    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];
    
        const promedioElemento1y2 = calculaMediaAritmetica([
            elemento1,
            elemento2,
        ]);
    
        lista = promedioElemento1y2;
        
    }else {
        lista = lista[mitadLista];
    };
    return lista;
}
console.log(encontraMediana(arr));

// Para ordenar un array



