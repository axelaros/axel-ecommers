import ItemListContainer from "./components/Navbar/ItemListContainer/itemListContainer";
import Navbar from "./components/Navbar/Navbar";

const App = ()=>{
  const saludo="bienvenidos"
  
  return (
<> 
   <Navbar />
   <ItemListContainer saludo={saludo}/>
</>
  );
};

export default App;
