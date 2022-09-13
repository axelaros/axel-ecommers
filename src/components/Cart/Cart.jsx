import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const Cart = () => {
  const {cart,clearCart,eliminarProd,TotalPrice,} = useContext(CartContext)
  console.log(cart);
  return (
    <div className='carritoDetalle'>
     
      {
        cart.map((prod)=>(
          <div className='detalleCarro' key={prod.id}>
            <h2>{prod.Title}</h2>
            <h3>precio $ {prod.Price}</h3>
            <h3>cantidad {prod.cantidad}</h3>
            <button onClick={() => eliminarProd(prod.id)}>Eliminar producto</button>
          </div>
        ))
      }
      <button onClick={clearCart}>Clear Cart</button>
      <p>Total: ${TotalPrice()} </p>
    </div>
  )
}

export default Cart