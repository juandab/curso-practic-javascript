// Codigo del cuadrado
console.group("Cuadrados")

// const ladoCuadrado = 5;
// console.log("los lados del cuadrado " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
};


// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm^2");

function areaCuadrado(lado){
    return lado * lado;
}

// console.log("EL area del cuadrado es: " + areaCuadrado + "cm");

console.groupEnd();

// Codigo del triagulo
console.group("Triangulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log("los lados del triangulo miden: "
//     + ladoTriangulo1 + "cm, "
//     + ladoTriangulo2 + "cm, "
//     + baseTriangulo +"cm, "
// );

// const alturaTriagulo = 5.5;
// console.log("la altura del Triagulo es: " + alturaTriagulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura){
    return (base * altura) / 2;
} 
// console.log("El area del triangulo es: "+ areaTriangulo + "cm^2");

console.groupEnd();

// Codigo del Circulo
console.group("Circulos");

// const radioCirculo = 4; 
// console.log("Radio Circulo es: " + radioCirculo + "cm")

function diametroCirculo(radio){
    return radio * 2;
} 
// console.log("EL diamentro del Circulo es: "+ diametroCirculo + "cm")

const PI = Math.PI;
// console.log("El valor de PI es " + PI);

function perimentroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}


function areaCirculo(radio){
    return (radio * radio) * PI;
} 
// console.log("EL valor de area :" + areaCirculo + "cm");

console.groupEnd();


// Aqui interactuamos con el html
function calcularPerimentroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = areaCuadrado(value);
    alert(perimetro);

} 
// Terminar mañana lo que falta de calculas la altura de un triangulo ya son las 10 de la mañana
    

function alturaTriangulo(ayacente, opuesto, base){
    if(ayacente != opuesto){
        alert("Los lados a y b no son iguales");
        }else {
            const Input = document.getElementById("InputTriangulo1");
            const Input2 = document.getElementById("InputTriangulo2");
            const base1 = document.getElementById("InputBase");
            const opuesto1 = Input.value;
            const  ayacente1 = Input2.value;
            const base2 = base1.value;
            const a = ayacente1 * opuesto1;
            const b = base2 * base2;
            const resultado = a - (b /4);
            var altura = Math.sqrt(resultado);
            alert("La altura del Triangulo es: " + altura);
        }
    
}



