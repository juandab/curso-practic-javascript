const poderados = [
    {nota: 5.0, value: 10},
    {nota: 3.8, value: 10},
    {nota: 4.0, value: 10},
    {nota: 4.0, value: 10},
    {nota: 5.0, value: 50}
];




function encontrarPonderado(lista){
    const valor = poderados.map(
        function(element){
            return element.nota * element.value;
        }
    );
    const sumOfNotesWithCredit = valor.reduce(
        function(sum = 0, newVal) {
            return sum + newVal;
        }
    );
    
    
    const credits = poderados.map(function(elementos){
        return elementos.value;
    });
    
    const sumOfCredits = credits.reduce(
        function(sum = 0, newVal){
            return sum + newVal;
        }
    );
    
    const promedioPonderado = sumOfNotesWithCredit / sumOfCredits;
    return promedioPonderado;
};

