import React from 'react'

const ItemDetail = ({Item}) => {
    
  return (<div className='detalle'>
    <img src={Item.Imagen} alt={Item.Title} />
    <div>
        <h3> {Item.Title} </h3>
        <p> Precio: {Item.Price}</p>
        <p>marca: {Item.Marca}</p>
        
    </div>
</div>
  )
}

export default ItemDetail



