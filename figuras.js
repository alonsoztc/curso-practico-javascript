// Codigo del cuadrado
console.group("Cuadrados")
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
} 
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
   return lado * lado;
}
// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// Codigo del triangulo
console.group("Triangulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//     "Los lados del triangulo miden : " 
//     + ladoTriangulo1 
//     + "cm, " 
//     + ladoTriangulo2 
//     + "cm"
//     );

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return Number(lado1) + Number(lado2) + Number(base);
}
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
// console.log("El area del triangulo es: " + areaTriangulo + "cm^2")

console.groupEnd();

// Codigo del circulo
console.group("Circulo");

// Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

// Diametro
function diametroCirculo(radio) {
    return radio * 2;
}
// console.log("El diametro del circulo es: " + diametroCirculo + "cm");

// Pi
const PI = Math.PI;
console.log("Pi es: " + PI);


//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;   
}
// console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

// Area
function areaCirculo(radio) {
    return (radio * radio) * PI;
}
// console.log("El area del circulo es: " + areaCirculo + "cm^2");

console.groupEnd();

// Aqui interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const inputLado1 = document.getElementById("InputLado1");
    const valueLado1 = inputLado1.value;

    const inputLado2 = document.getElementById("InputLado2");
    const valueLado2 = inputLado2.value;

    const inputBase = document.getElementById("InputBase");
    const valueBase = inputBase.value;

    // const inputAltura = document.getElementById("InputAltura");
    // const valueAltura = inputAltura.value;

    const perimetro2 = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    alert(perimetro2);
}

function calcularAreaTriangulo() {
    const inputLado1 = document.getElementById("InputLado1");
    const valueLado1 = inputLado1.value;

    const inputLado2 = document.getElementById("InputLado2");
    const valueLado2 = inputLado2.value;

    const inputBase = document.getElementById("InputBase");
    const valueBase = inputBase.value;

    const inputAltura = document.getElementById("InputAltura");
    const valueAltura = inputAltura.value;

    const area2 = areaTriangulo(valueBase, valueAltura);
    alert(area2);
}

function calcularPerimetroCirculo() {
    const inputRadio = document.getElementById("InputCirculo");
    const valueRadio = inputRadio.value;

    //const diametroC = diametroCirculo(valueRadio);
    const perimetro3 = perimetroCirculo(valueRadio);
    alert(perimetro3);
}

function calcularAreaCirculo() {
    const inputRadio = document.getElementById("InputCirculo");
    const valueRadio = inputRadio.value;

    //const diametroC = diametroCirculo(valueRadio);
    const area3 = areaCirculo(valueRadio);
    alert(area3);
}

// Calculando la altura de un triangulo isosceles

function alturaTrianguloIso(ladoa, ladob, basec) {
    if (ladoa == ladob) {
        return Math.sqrt((ladoa * ladoa) - (basec * basec) / 4);
    }
    else {
        return "No es un triángulo Isósceles, por favor revisa los valores y vuelve a ingresarlos :)";
    }
}

function calcularAreaTrianguloIso() {
    const inputLadoa = document.getElementById("InputLadoa");
    const valueLadoa = inputLadoa.value;

    const inputLadob = document.getElementById("InputLadob");
    const valueLadob = inputLadob.value;

    const inputBasec = document.getElementById("InputBasec");
    const valueBasec = inputBasec.value;

    const areaIso = alturaTrianguloIso(valueLadoa, valueLadob, valueBasec);
    alert(areaIso);
}