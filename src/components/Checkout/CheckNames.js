const CheckNames = (list) => {

    let newList = []

    list.forEach(cell => {

        if (cell === 'firstname') { newList.push('Nombre') }
        if (cell === 'lastname') { newList.push('Apellido') }
        if (cell === 'email') { newList.push('Correo electrónico') }
        if (cell === 'tel') { newList.push('Teléfono') }
        if (cell === 'wsp') { newList.push('Celular/Whatsapp') }
        if (cell === 'address') { newList.push('Dirección') }
        if (cell === 'city') { newList.push('Ciudad') }
        if (cell === 'type') { newList.push('Tipo de hogar(ingrese un valor válido)') }
        if (cell === 'cp') { newList.push('Código postal') }
        if (cell === 'paymethod') { newList.push('Forma de pago (ingrese un valor válido') }
        if (cell === 'cardnumber') { newList.push('Numero de tarjeta de crédito') }
        if (cell === 'expiredate') { newList.push('Mes de vencimiento') }
        if (cell === 'cvv') { newList.push('CVV') }
        if (cell === 'mpago') { newList.push('cuenta de Mercado Pago') }
        if (cell === 'key') { newList.push('su key es inexistente') }
    })

    return newList

}

export default CheckNames