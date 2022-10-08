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

