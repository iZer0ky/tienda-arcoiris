import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Producto = ({articulo}) => {
    const [compraMsg, setCompraMsg] = useState("");
    return(
        <>
            <Link className="producto" to={`/${articulo.id}`}>
                <div>
                    <p>{articulo.title}</p>
                    <img src={articulo.thumbnail} className="producto-thumbnail" />
                    <p>SKU: {articulo.id}</p>
                    <p>Stock Restante: {articulo.available_quantity}</p>
                    <p>Precio: ARS{articulo.price}</p>
                </div>
            </Link>
                <br />
            <p>{compraMsg}</p>
        </>
    )
}

export default Producto;