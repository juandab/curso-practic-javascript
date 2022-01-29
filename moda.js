const lista = [
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    6
];

var listaModa = [
    1,
    2,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
];
    


function encontraModa(lista){
    const lista1Count = {};

    lista.map(
        function(elemento){
            if (lista1Count[elemento]){
            lista1Count[elemento]  += 1;   
            } else {
            lista1Count[elemento] = 1;
            }
        }
    );

    const lista1Array = Object.entries(lista1Count).sort(
    function (a,b){
        return a[1] - b[1] ;
    }
    );

    const moda = lista1Array[lista1Array.length - 1];
    return moda
}
console.log(encontraModa(listaModa))


