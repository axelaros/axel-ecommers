import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";



const App = ()=>{
 

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

    <Route path="/cart" element={<Cart/>}
    />
   
   </Routes>
  
  
</BrowserRouter>
  );
};

export default App;
