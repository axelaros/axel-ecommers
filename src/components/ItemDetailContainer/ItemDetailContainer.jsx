import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import { productos } from "../../mock/producto"
import ItemDetail from "../ItemDetail/ItemDetail";






const ItemDetailContainer= ()=>{
    const [Item, setItem]= useState({})
    const {id}= useParams()
    const idNumerico=Number(id)

    useEffect(()=>{
        const getProduct=()=> new Promise((res, rej) => {
            const unicaCard=productos.find((prod)=> prod.id===idNumerico);
            
            setTimeout(()=>{
                res(unicaCard);

            },2000);
        });
        
        getProduct()
        .then((data)=>{
            setItem(data);
        })
        .catch((error)=>{
            console.log(error)
        })
    },);
   

return <ItemDetail Item={Item} />
}

        

export default ItemDetailContainer;

    
