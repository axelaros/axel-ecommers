import React, { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import Form from '../Form/Form'




const Cart = () => {
  const [idCompra,setIdCompra] = useState("")
  const {cart,clearCart,eliminarProd,TotalPrice,} = useContext(CartContext)
  console.log(cart);
  const total=TotalPrice()

  const handleId=(id)=>{
    setIdCompra(id)

  }

if(idCompra){
  return <h2>Gracias por tu compra tu id de compra es {idCompra}</h2>
}

  if (cart.length === 0){
    return <div className='carritoCompra'>    
               <h1> ! El carrito esta vacio </h1>
               <Link to="/"> <button className='buttonCarrito'> Ir a comprar </button> </Link>
            </div>
            }
 
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
      <p>Total: ${total} </p>
      <Form cart={cart} total={total} clearCart={clearCart} handleId={handleId}/>
    </div>
  )
}

export default Cart