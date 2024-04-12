import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        const logged = localStorage.getItem("isLogged");
        setIsLogged(logged);
    }, 
    []);

    const handlerLogOut = () => {
        localStorage.setItem("isLogged", false);
        setIsLogged(false);
    }
    
    return(
    <div className="menu-wrapper">
        <nav>
            <h1>El Bazar Arcoíris</h1>
            <h2>En donde siempre encontrarás el producto que buscas.</h2>
            <div className="link-wrapper">
                <Link to="/">Página Principal</Link>
                { (isLogged) ? <button onClick={handlerLogOut}>Cerrar Sesión</button> : 
                <> 
                <Link to="/registro">Registrarse</Link>
                <Link to="/login">Iniciar Sesión</Link> 
                </> }
            </div>
        </nav>
    </div>
    )
}

export default Menu;