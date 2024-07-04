const get = (id) => {
    return document.querySelector(id);
}



get("#form").addEventListener('submit', (e) => {
    e.preventDefault()

    const monto = get("#monto").value;
    const plazo = get("#plazo").value;
    const tasa = get("#tasa").value;

    let valid = true;

    if (monto == 0 && !isNaN(monto)) {
        get("#small-monto").innerText = "Debe ingresar el monto de la hipoteca"
        get("#input-uno").classList.add("item-uno-alert")
        valid = false
    } else {
        get("#small-plazo").innerText = " "
    }

    if (plazo == 0 && !isNaN(plazo)) {
        get("#small-plazo").innerText = "Debe ingresar el plazo"        
        get("#input-dos").classList.add("item-uno-alert")
        valid = false
    } else {
        get("#small-plazo").innerText = " "
    }

    if (tasa == 0 && !isNaN(tasa)) {
        get("#small-tasa").innerText = "Debe ingresar la tasa"      
        get("#input-tres").classList.add("item-uno-alert")
        valid = false
    } else {
        get("#small-plazo").innerText = " "
    }

    if (!valid) {
        const tasa_interes_mensual = tasa / 12 / 100
        const numero_pagos = plazo * 12

        const pago = monto * (tasa_interes_mensual * (1 + tasa_interes_mensual) ** numero_pagos) / ((1 + tasa_interes_mensual) ** numero_pagos - 1)
    }



})    