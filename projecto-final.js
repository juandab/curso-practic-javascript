// calculadora de trabajos informales con costo de vida
const payMonth = casualWork.map(
    function(element){
        return element.pay;
    }
);


// const pagoTotal = pagoMensual(payMonth); 



const time = casualWork.map(
    function(element){
        return element.time;
    }
);


function gananciasMensualesTrabajoIndirecto(pagoDiario){
    const diasLaborales = 30 - 24;
    const horasLaborales = diasLaborales * 24;
}


const timeWorking = time * 30;
const timeInMonth = 30 * 24;




// Calculadora trabajo formales con costo de vida
const costoMensual = costoDiario.map(
    function(elementos){
        return elementos.costo * 30;
    }
)
const descripcion = costoDiario.map(
    function(elemento){
        return elemento.descripcion;
    }
);
const serviciosMensual = serviciosMes.map(
    function (elemento){
        return elemento.costo;
    }
);

const sumaDeCostoMensual = costoMensual.reduce(
    function(sum = 0, newval){
        return sum + newval
    }
);

const sueldo = personasGanancias.map(
    function (elemento){
        return elemento.sueldo;
    }
);



function gastoMensual(){
    const inputCost = document.getElementById("sueldo");
    const salary = inputCost.value;
    const valorMensualTotal = serviciosMensual[0] + sumaDeCostoMensual;
    const valorTotal = salary - valorMensualTotal;
    
    
    const resultP = document.getElementById("ResulP");
    resultP.innerText = `Tu salario es ${salary}COP, El costo de vida en colombia solo con bienes basicos es ${valorMensualTotal}, Te alcanza tu sueldo? Si sale en negativo no ${valorTotal} `;
   
}
function capacidadDeAhorro(){
    const inputCost = document.getElementById("sueldo");
    const salary = inputCost.value;
    const inputAhorro = document.getElementById("ahorro");
    const valorMensualTotal = serviciosMensual[0] + sumaDeCostoMensual;
    const capacidadDeAhorro1 = salary - valorMensualTotal;
    if(capacidadDeAhorro1 >= 0){
        inputAhorro.innerText = `Puedes ahorrar y es de ${capacidadDeAhorro1}`;
    }else {
        inputAhorro.innerText = `No puedes ahorrar`;
        }
}



function pagoMensual(pagoDiario){
    for (let index = 0; index < pagoDiario.length; index++) {
        const element = pagoDiario[index];
        console.log(`Este es el pago ${element * 24}`);
        console.log(`Capaciadad de ahorro ${element * 24 - valorMensualTotal }`);
        console.log(`Capacida de Endeudamiento ${valorMensualTotal - element * 24}`);
   }
}

pagoMensual(payMonth);



