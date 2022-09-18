import { productos } from '../../mock/producto'
import React,{useState,useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import PacmanLoader from "react-spinners/PacmanLoader"







const ItemListContainer = () => {
  
  const [producto, setProducto] = useState([])
  const [isLoading, setisLoading] = useState(true)
  
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
            setisLoading(false)

          })
          return ()=>{
           setisLoading(true)
          }

        

},[CategoryName]);

  

    return(

      <div>
        {
          isLoading
          ? <PacmanLoader color="#36d7b7" size={100} margin="5px"/>
          : <ItemList producto={producto}/>
        }
        
      
       </div>
      

      
        
    )

    

  
    
  
}

export default ItemListContainer
