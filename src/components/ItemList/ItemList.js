import React from 'react'
import Item from '../Item/Item'

const ItemList = ({producto}) => {
  
  return(
<div className='cardContainer'>
  {
  producto.map((producto)=>
    
    <Item key={producto.id} title={producto.Title} category={producto.Category} marca={producto.Marca} price={producto.Price} imagen={producto.Imagen} stock={producto.stock} />
    )
  
  } </div>
 
 )
  }
 
 
export default ItemList