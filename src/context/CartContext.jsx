import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'


export const CartContext= createContext()

const CartProvider = ({children}) => {
    const [cart,setcart]= useState([])
    
    const addToCart = (Item ,cantidad)=>{
     if (isInCart(Item.id)) {
       sumarCantidad(Item,cantidad)
          
     }else
       setcart([...cart,{...Item,cantidad}])
    }

    
const isInCart = (id) =>{
   return cart.some((prod)=>prod.id===id)
}   

const sumarCantidad = (Item,cantidad)=>{
    const carritoActualizado=cart.map((prod)=>{
        if (prod.id===Item.id) {
            const productoActualizado={
                ...prod,
                cantidad:prod.cantidad + cantidad
            }
            return productoActualizado
        } else {
            return prod
        }
    })
    setcart(carritoActualizado)
}

console.log(cart);

const TotalPrice = ()=>{
    let count=0
    cart.forEach((prod)=>{
        count = count + (prod.Price * prod.cantidad)
    })
    return count
};

const eliminarProd = (id)=>{
console.log(`eliminarProducto ${id}`);
const carritofiltrado=cart.filter((prod)=>prod.id!==id)
setcart(carritofiltrado)
}


    const clearCart=()=>{
        setcart([]);
    }
  return (<CartContext.Provider value={{cart, addToCart, clearCart, eliminarProd, TotalPrice }}>
    {children}
  </CartContext.Provider>
   
  )
}

export default CartProvider;