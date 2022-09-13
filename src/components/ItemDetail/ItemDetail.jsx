import React from 'react'
import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({Item}) => {
  
  const[cantidad,setcantidad]=useState(0)
  const {addToCart} =useContext(CartContext);
  

  
  
  const onAdd=(cantidad)=>{
    setcantidad(cantidad);
    addToCart(Item, cantidad);
  }
  

  return (<div className='detalle'>
    <img src={Item.Imagen} alt={Item.Title} />
    <div>
        <h3> {Item.Title} </h3>
        <p> Precio: {Item.Price}</p>
        <p>marca: {Item.Marca}</p>
        <p>categoria:{Item.Category}</p>
        {
          cantidad===0
          ? <ItemCount stock={10} initial={1} onAdd={onAdd}/>
          :<Link to="/cart"> ir al carrito </Link>


        }
       
        
        
        
    </div>
</div>
  )
}

export default ItemDetail



//<h2>la cantidad es 0 </h2>
//<h2> la cantidad es {cantidad}</h2>