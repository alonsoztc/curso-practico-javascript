// Cosas que necesito para empezar a hacer el codigo
// Vamos a calcular el interes compuesto y simple de tu proyecto
// Primero definimos las variables
// Creamos el codigo para valores predeterminados
// Transformamos el codigo en funciones que se pueden aplicar a cualquier valor
// Arreglamos el diseño y colocamos los detalles en html y css

// Definiendo variables

const inversion = 0;
const tiempo = 0;
const tasa = 0;


function interesSimple(inversion, tiempo, tasa) {
    
    return (inversion * tiempo * tasa) / 100;

}

function interesCompuesto(inversion , tiempo, tasa) {

    return inversion * ((1 + tasa / 100 ) ** tiempo - 1);   
}

function calcularInteresSimple () {
    const inputInversion = document.getElementById("InputInversion");
    const valueInversion = inputInversion.value;

    const inputTasa = document.getElementById("InputTasa");
    const valueTasa = inputTasa.value;

    const inputTiempo = document.getElementById("InputTiempo");
    const valueTiempo = inputTiempo.value;

    const intSimple = interesSimple(valueInversion, valueTiempo, valueTasa);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El Interes Simple de tu Inversión es: $ " + intSimple;
}

function calcularInteresCompuesto () {
    const inputInversion = document.getElementById("InputInversion");
    const valueInversion = inputInversion.value;

    const inputTasa = document.getElementById("InputTasa");
    const valueTasa = inputTasa.value;

    const inputTiempo = document.getElementById("InputTiempo");
    const valueTiempo = inputTiempo.value;

    const intCompuesto = interesCompuesto(valueInversion, valueTiempo, valueTasa);

    const result2 = document.getElementById("Result2");
    result2.innerText = "El Interes Compuesto de tu Inversion es: $ " + intCompuesto;
}