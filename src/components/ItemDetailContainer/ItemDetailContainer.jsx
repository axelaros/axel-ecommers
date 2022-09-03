import { useEffect, useState } from "react"
import { productos } from "../../mock/producto"
import ItemDetail from "../ItemDetail/ItemDetail";




const ItemDetailContainer= ()=>{
    const [Item, setItem]= useState({})

    useEffect(()=>{
        const getProduct=()=> new Promise((res, rej) => {
            const unicaCard=productos.find((prod)=> prod.id===1);
            
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
    },[]);

return <ItemDetail Item={Item} />
}

        

export default ItemDetailContainer;

    
