import { productos } from '../../mock/producto'
import React,{useState,useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'





const ItemListContainer = () => {
  
  const [producto,setProducto]=useState([])

useEffect(()=>{
    
    const getProduct=new Promise((res,rej) =>{
        setTimeout(() => {
          res(productos);
        }, 2000);
      
        
          })
          getProduct.then((data)=>{
            setProducto(data);

          })
        

}






)

console.log(producto);

    return(
      <div>
        
       <ItemList producto={producto}/>
       <ItemDetailContainer/>
       
       </div>
      

      
        
    )

    

  
    
  
}

export default ItemListContainer
