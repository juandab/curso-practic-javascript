// HELPERS
function calculaMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista =  sumaLista / lista.length;
    return promedioLista;
    }
// CALCULADORA DE MEDIANA SALARIOS
    function medianaSalarios(lista) {
        const mitad = parseInt(lista.length / 2 )
    
        if(esPar(lista.length)){
            const  personaMitad1 = lista[mitad - 1];
            const  personaMitad2 = lista[mitad];
            const  mediana = calculaMediaAritmetica([personaMitad1,personaMitad2])
            return mediana;
        }else {
            const  personaMitad = lista [mitad];
            return personaMitad;
        }
    }
    

// MEDIANA GENERAL
const salarioCol = colombia.map(
    function(persona){
        return persona.salary;
    }
);



const salariosColSorted = salarioCol.sort(
    function(salaryA,salaryB){
        return salaryA - salaryB;
    }
);

function esPar(numerito){
    return (numerito % 2 === 0);
}



const medianaGeneralCol = medianaSalarios(salariosColSorted)

// Mediana del top 10%



const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart,spliceCount);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log(
    medianaGeneralCol,
    medianaTop10Col,
    medianaSalarios(salariosColSorted)
)