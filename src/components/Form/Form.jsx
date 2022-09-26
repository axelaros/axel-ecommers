import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React from 'react'
import { useState } from 'react'
import { db } from '../../firebaseConfig';

const Form = ({cart,total,clearCart,handleId}) => {
  const [nombre,setNombre] = useState("");
  const [apellido,setApellido] = useState("");
  const [email,setEmail] = useState("")
  const [telefono,setTelefono] =useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    const order = {
        buyer:{nombre:nombre, apellido:apellido, email:email, telefono:telefono},
        items: cart,
        total: total,
        date: serverTimestamp()
    };
  
    const ordersCollection = collection(db,"orders")

   addDoc(ordersCollection,order).then((res) =>{
    handleId(res.id);
    clearCart()
   })
}

  

  const handleChangeNombre = (event) => {
    setNombre(event.target.value);
  }

  const handleChangeApellido = (event) => {
    setApellido(event.target.value);
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleChangeTelefono = (event) => {
    setTelefono(event.target.value)
  }
  
  
  
  return (
    <div style={{marginTop: "15px"}}>
<form action='' onSubmit={handleSubmit}>
    <input type="text" placeholder="Nombre" value={nombre} onChange={handleChangeNombre}/>
    <input type="text" placeholder='Apellido' value={apellido} onChange={handleChangeApellido}/>
    <input type="email" placeholder="email" value={email} onChange={handleChangeEmail}/>
    <input type="number" placeholder="telefono" value={telefono} onChange={handleChangeTelefono}/>
    <button>Enviar</button>
     
     </form> 
</div>
  )
}

export default Form