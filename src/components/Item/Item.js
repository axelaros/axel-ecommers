import React from 'react'


const Item = ({title,category,marca,price,imagen,stock}) => {
 
  return (
    <div className='cardBody'> 
        <img src={imagen} alt="foton" height="150px" width="200px" /> 
        <h3> {title}</h3>
        <p> Precio: {price}</p>
        <p> Categoria: {category}</p>
        <p>Marca: {marca}</p>
        <p>stock: {stock}</p>
       
        </div>)
  
}

export default Item