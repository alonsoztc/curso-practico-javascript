// const precioOriginal = 120;
// const descuento = 18;

// function calcularPrecioConDescuento(precio,descuento) {
//     const porcentajePrecioConDescuento = 100 - descuento;
//     const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

//     return precioConDescuento;
// }

// function onClickButtonPriceDiscount() {
//     const inputPrice = document.getElementById("InputPrice");
//     const priceValue = inputPrice.value;

//     const inputDiscount = document.getElementById("InputDiscount");
//     const discountValue = inputDiscount.value;

//     const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

//     const resultP = document.getElementById("ResultP");
//     resultP.innerText = "El precio con descuento son: " + precioConDescuento + "$";
// }

// Intentando resolver el desafio

// function calcularPrecioConDescuento(precio,descuento) {
//     const porcentajePrecioConDescuento = 100 - descuento;
//     const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

//     return precioConDescuento;
// }

// const coupons = [
//     {
//         name: "coupon10",
//         discount: 10,
//     };
//     {
//         name: "coupon20",
//         discount: 20,
//     };
//     {
//         name: "coupon30",
//         discount: 30,
//     }
// ];

// function onClickButtonPriceDiscount() {
//     const inputCoupon = document.getElementById("InputCoupon");
//     const couponValue = inputCoupon.value;

//     const isCouponValueValid = function(coupons) {
//         return coupons.name === couponValue;
//     }

//     const userCoupon = coupons.find(isCouponValueValid)

//     if(!userCoupon) {
//         alert("El cupón " + couponValue + " no es válido");
//     }
//     else {
//         const descuento = userCoupon.discount;
//         const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

//         const resultP = document.getElementById("ResultP");
//         resultP.innerText = "El precio con descuento son: " + precioConDescuento + "$";
//     }
// }
// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// })

// Resolucion de ejemplo
function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

const coupons = [
    "Cupon10",
    "Cupon20",
    "Cupon30"
];

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    // switch(couponValue) {
    //     case coupons[0]: descuento = 10;
    //     break;
    //     case coupons[1]: descuento = 20;
    //     break;
    //     case coupons[2]: descuento = 30;
    //     break;
    // }

    if (!coupons.includes(couponValue)) {
        alert("El cupón " + couponValue + " no es válido");
     } else if (couponValue === "Cupon10") {
        descuento = 15;
     } else if (couponValue === "Cupon20") {
        descuento = 30;
     } else if (couponValue === "Cupon30") {
        descuento = 25;
     }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}