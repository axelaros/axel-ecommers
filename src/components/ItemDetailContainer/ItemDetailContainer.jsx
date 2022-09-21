import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import {db} from "../../firebaseConfig"
import {getDoc,doc,collection} from "firebase/firestore"






const ItemDetailContainer= ()=>{
    const [Item, setItem]= useState({})
    const {id}= useParams()
    

    useEffect(()=>{
       const itemCollection = collection(db,"productos")
       const ref = doc(itemCollection,id)
       getDoc(ref).then((res)=>{
setItem({
    id:res.id,
    ...res.data()
})
       })

    },[id]);
   

return <ItemDetail Item={Item} />
}

        

export default ItemDetailContainer;

//const getProduct=()=> new Promise((res, rej) => {
  //  const unicaCard=productos.find((prod)=> prod.id===idNumerico);
    
    //setTimeout(()=>{
      //  res(unicaCard);

    //},2000);
//});

//getProduct()
//.then((data)=>{
  //  setItem(data);
//})
//.catch((error)=>{
  //  console.log(error)
//})
