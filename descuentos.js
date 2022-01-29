// const precioOriginal = 100;
// const descuento = 18;

var cupones = ["Soy Batman", "Perro", "Popeye"];

function calculaPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}


function onClickButtonPriceDiscount(precio, descuento){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("InputDiscount");
    const discountvalue = inputDiscount.value;
    const precioConDescuento = calculaPrecioConDescuento(priceValue, discountvalue);
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son :$" + precioConDescuento;
   
}
function onClickButtonCoupon(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputCount = document.getElementById("inputCoupon");
    const couponValue = inputCount.value;
    var descuento ;
    switch (couponValue) {
        case cupones[0]:
            descuento = 20;
            break;
        case cupones[1]:
            descuento = 30;
            break;
        case cupones[2]:
            descuento = 40;
            break;
        default:
            break;
    }
    const precioConDescuento = calculaPrecioConDescuento(priceValue, descuento);
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son :$" + precioConDescuento;
}




// con cupones




