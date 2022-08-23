import { CartWidget } from "./CartWidget";

const Navbar =()=>{
    return(
<header>
    <nav className="navbar">
        <h1 className="titulo">Electro mania</h1>
        <ul className="cabezera">
            <li>
                <a href="https://www.google.com/?hl=es "> Productos</a>
             </li>
            <li>
                <a href="https://www.google.com/?hl=es "> Contacto </a>
            </li>
            <li>
                <a href="https://www.google.com/?hl=es ">  Nosotros </a>
             </li>

        </ul>
       <CartWidget />
            
    </nav>
</header>

    )
}

export default Navbar;