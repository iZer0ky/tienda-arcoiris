import { useEffect, useState } from "react";
import { getById } from "../Services/ItemServices";
import { useParams } from "react-router-dom";

const DetalleProducto = () => {
    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [articulo, setArticulo] = useState(null);
    const [imagen, setImagen] = useState([
        {
            url: ""
        }
    ]);

    useEffect(() => {
        getById(id)
        .then(res => {
            setArticulo(res.data);
            setIsLoading(false);
        })
    },
    [])

    useEffect(() => {
        if(articulo === null) return
        setImagen(articulo.pictures);
        
    },
    [articulo])

    if (isLoading === true) {
        return (
            <p>Cargando...</p>
        )
    }else {

        const aceptaMercado = articulo.accepts_mercadopago === true ? "Sí" : "No";

        return (
            <div className="detallesArticulo">
                <img src={imagen[0].url}></img>
                <div className="display-wrapper">
                    <h1>{articulo.title}</h1>
                    <p className="precio">${articulo.price}</p>
                    
                    <p>SKU: {articulo.id}</p>
                    <p>¿Acepta Mercado Pago?: {aceptaMercado} </p>
                    <button>Comprar</button>

                </div>
            </div>
        );
    }
}
export default DetalleProducto;