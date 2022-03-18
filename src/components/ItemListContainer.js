import React from 'react';
import ItemCount from './ItemCount';

let centrado = {
    margin: 'auto',
}

let initial = 1
let stock = 6
const addToCart = (count) => { console.log(`${count} productos Agregados`) }


const ItemListContainer = ({ greeting, medida }) => {
    return (
        <>
            <ItemCount stock={stock} initial={initial} onAdd={addToCart} />
            <h2 className="text-center text-8xl antialised font-ptsans m-8">{greeting}</h2>
            <img src="https://scontent.faep14-2.fna.fbcdn.net/v/t31.18172-8/10428201_768787766516549_3764084873927736108_o.jpg?_nc_cat=109&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeGdJKvNcLZ0LEncrO_dy_BY-DtfS__llm74O19L_-WWbvTamyIYjYEQxz-PZhNV6qM&_nc_ohc=0O5Th8lfscAAX-GvMl_&_nc_ht=scontent.faep14-2.fna&oh=00_AT-KMhY-IUlSgXucN8VoAtXPbh-rIDDK7VowLOZ9iRcosA&oe=62509F05" alt="onepiece" width={medida} style={centrado} />
        </>
    )
}

export default ItemListContainer