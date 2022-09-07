import { productos } from '../../mock/producto'
import React,{useState,useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'






const ItemListContainer = () => {
  
  const [producto,setProducto]=useState([])
  
const {CategoryName} = useParams()

useEffect(()=>{
    
    const getProduct=new Promise((res,rej) =>{
      const prodFiltrados=productos.filter(
        (prod)=> prod.Category===CategoryName
      );
        setTimeout(() => {
          res(CategoryName ? prodFiltrados:productos);
        }, 2000);
      
        
          })
          getProduct.then((data)=>{
            setProducto(data);

          })
        

}






)

  

    return(
      <div>
        
       <ItemList producto={producto}/>
       
       
       </div>
      

      
        
    )

    

  
    
  
}

export default ItemListContainer
