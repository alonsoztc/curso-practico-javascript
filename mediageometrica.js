const lista1 = [];

function calcularMediaGeo(lista1) {
    let multLista1 = 1;

    for(let i = 0; i < lista1.length; i++) {
        multLista1 = multLista1 * lista1[i];
    }
    
    return mediaGeo = multLista1 ** (1 / lista1.length);
}
