import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";



const App = ()=>{
 
 const onAdd=()=>{
  alert("se ha agregado al carro")
 }
  return (
<BrowserRouter> 
   <Navbar />
   <Routes>
    <Route path="/"
    element={ <ItemListContainer />}
    />

    <Route path="/Category/:CategoryName"
    element={<ItemListContainer/>} 
    />
   
    <Route path="/item/:id" element={<ItemDetailContainer/> }
    />

    <Route path="/count" element={  <ItemCount stock={10} initial={1} onAdd={onAdd}/>}
    />
   
   </Routes>
  
  
</BrowserRouter>
  );
};

export default App;
