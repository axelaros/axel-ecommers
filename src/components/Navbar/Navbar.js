import { CartWidget } from "./CartWidget";
import { Link } from "react-router-dom";

const Navbar =()=>{
    return(
<header>
    <nav className="navbar">
       <Link to="/">Electro mania</Link>
        <ul className="cabezera">
         
              <Link to="/Category/Electro">Electro </Link>
              <Link to="/Category/Tecnoytv">TecnoyTv</Link>
            
      

        </ul>
        <Link to="/cart"> 
       <CartWidget />
       </Link>
    </nav>
</header>

    )
}

export default Navbar;

