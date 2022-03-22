export let figures = [
    {
        id: 1,
        name: 'Saint Seiya Myth Cloth EX',
        details: 'Alberich Delta',
        price: 219,
        url: 'https://i0.wp.com/animejapangeek.com/wp-content/uploads/2021/07/61m87J9oCiS._AC_SL1200_.jpg',
        img: [
            'https://i0.wp.com/animejapangeek.com/wp-content/uploads/2021/07/61m87J9oCiS._AC_SL1200_.jpg',
            'https://ae01.alicdn.com/kf/HTB1RBMELpXXXXaoXFXXq6xXFXXX0/CS-speeding-modelo-Saint-Seiya-myth-cloth-Asgard-Dios-megrez-Delta-Alberich-figura-de-acci-n.jpg',
            'https://animejapangeek.com/wp-content/uploads/2021/07/61hi-Lem2PS._AC_SL1200_.jpg',
            'https://ae01.alicdn.com/kf/HTB1b0LdLFXXXXbZaXXXq6xXFXXXL/Velocidad-CS-Saint-Seiya-de-mito-Asgard-Dios-guerrero-Megrez-Alberich-de-tela.jpg',
        ],
        logo: 'https://static.wikia.nocookie.net/logopedia/images/c/c1/Saint_seiya_logo_by_poderheavy-d3gl8te.png',
        mark: 'Bandai',
        year: 2022,
        version: 'Japan',
        condition: 0,
        stock: 3,
        description: 'Tamashii Nations dentro de la línea Saint Cloth Myth EX nos ofrece la figura de Delta Megrez Alberich, Se trata de una figura de 16 cm completamente articulada y con su apariencia de comic o anime.Incluye 4x expresiones faciales, 1x flequillo de pelo opcional, 1x espada de fuego Y 1x efecto de llama de espada ',
    },
    {
        id: 2,
        name: 'One Piece POP DX',
        details: 'Borsalino Kizaru',
        price: 300,
        url: 'https://dhdzy64m58a2i.cloudfront.net/otakusquare-com/product/MEHO825781/0.jpg',
    },
    {
        id: 3,
        name: 'Marvel Diamond Select',
        details: 'Mephisto',
        price: 350,
        url: 'https://i.pinimg.com/originals/21/11/df/2111df5dd341d779bca9801008987f70.jpg',
    },
    {
        id: 4,
        name: 'Megaman D-Arts',
        details: 'Megaman',
        price: 200,
        url: 'https://m.media-amazon.com/images/I/71HlvWvDD+L._AC_SX679_.jpg',
    },
    {
        id: 5,
        name: 'Mc Farlane Dragons Series 8',
        details: 'Berserker Dragon',
        price: 80,
        url: 'https://m.media-amazon.com/images/I/61RZlErMM7L._AC_SX679_.jpg',
    },
    {
        id: 6,
        name: 'DC Designer Series Greg Capullo',
        details: 'The Riddler',
        price: 50,
        url: 'https://i.pinimg.com/564x/88/d1/59/88d159f7c1dc91163fcb691a677476f2.jpg',
    },
]

// Preparando la promesa

export let getItem = (array) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            array !== null ? resolve(console.log('DB con datos! ')) : reject(console.log('DB vacio'))
        }, 2000)
    })
}

