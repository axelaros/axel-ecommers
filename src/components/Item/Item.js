import React from 'react'
import { Link } from 'react-router-dom'



const Item = ({title,category,marca,price,imagen,stock,id}) => {
 
  return (
    <div className='cardBody'> 
        <img src={imagen} alt="foton" height="150px" width="200px" /> 
        <h3> {title}</h3>
        <p> Precio: {price}</p>
        <p> Categoria: {category}</p>
        <p>Marca: {marca}</p>
        <p>stock: {stock}</p>
        <Link to={`/item/${id}`}>
        <button> Ver detalles  </button>
        </Link>
       
        </div>)
  
}

export default Item