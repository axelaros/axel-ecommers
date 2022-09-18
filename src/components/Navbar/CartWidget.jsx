import React from "react"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"



export const CartWidget = () =>{
     const {totalUnCarrito}=useContext(CartContext)
     
    return(
     <div style={{display:"flex",alignItems:"center"}}>
         
          <span className="material-symbols-outlined">shopping_cart</span>
          <span>{totalUnCarrito() ===0? "": totalUnCarrito()}</span>
         </div>
    )
    
    }