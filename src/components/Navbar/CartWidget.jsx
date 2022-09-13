import { Link } from "react-router-dom"
export const CartWidget = () =>{
    return(
     <div>
          <Link to="/cart"> <span className="material-symbols-outlined">shopping_cart</span></Link>
          
         </div>
    )
    
    }