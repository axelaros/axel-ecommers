
import React,{useState,useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import PacmanLoader from "react-spinners/PacmanLoader"
import {collection, getDocs, query, where} from "firebase/firestore"
import{db} from "../../firebaseConfig"





const ItemListContainer = () => {
  
  const [producto, setProducto] = useState([])
  const [isLoading, setisLoading] = useState(true)
  
const {CategoryName} = useParams()

useEffect(()=>{ 
  
  const itemCollection = collection(db, "productos")
  
  const referencia = CategoryName
  ? query(itemCollection,where("Category","==",CategoryName))
  :itemCollection;
 
 
  getDocs(referencia)
  .then((res)=>{
    const products = res.docs.map((prod)=>{
     return{
      id: prod.id,
      ...prod.data(),
      
     };
  
     });
  setProducto(products);
  })
  .catch((error)=>{
    console.log(error);
  })
  .finally(()=>{
    setisLoading(false)
  })
  
 
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

