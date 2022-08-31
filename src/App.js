import ItemCount from "./components/ItemCount/ItemCount";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";

const App = ()=>{
 const saludo="bienvenidos"
 const onAdd=()=>{
  alert("se ha agregado al carro")
 }
  return (
<> 
   <Navbar />
   <ItemListContainer />
   <ItemCount stock={10} initial={1} onAdd={onAdd}/>
   
</>
  );
};

export default App;
