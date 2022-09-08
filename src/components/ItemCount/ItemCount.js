import React ,{useState} from 'react'

const ItemCount = ({stock,initial,onAdd}) => {
  
    
    const [count ,setcount]=useState(0)


    const sumar = ()=>{
        if (count < stock) {
            setcount(count +1)
        } else {
            alert("maximo stock")
            
        }
    }

    const restar = ()=>{
        setcount(count -1)
        if (count=== initial) {
            setcount(initial)
        } 
            
        
    }



   
    return (
    <div >
        <button onClick={sumar}> + </button>
        <button onClick={restar}> - </button>
        <p>count {count}</p>
        <button onClick={()=>onAdd(count)}> agregar al carrito </button>
        
    </div>
  )
}

export default ItemCount