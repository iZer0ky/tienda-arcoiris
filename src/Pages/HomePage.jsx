import { useEffect, useState } from "react";
import Producto from "../components/Producto";
import { getByQuery } from "../Services/ItemServices";
import paginaHandler from "../Services/paginaHandler";

const HomePage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [articles, setArticles] = useState([]);
    const [pagina, setPagina] = useState(1);
    const numArticulos = 4;

    useEffect(() => {
        getByQuery("Caramelos Ácidos")
        .then(res => {
            setIsLoading(false)
            setArticles(res.data.results);
        })
    },
    []);

    if (isLoading) {
        return(
            <div>
                Cargando...
            </div>
        );
    }
    else {
        return(
            <div>
                <div className="listado-wrapper">
                    {articles.slice((pagina*numArticulos) - numArticulos, (pagina*numArticulos))
                    .map(article => <div className="producto-info" key={article.id}> <Producto articulo={article} /> </div>)}
                </div>

                <div>
                <button 
                onClick={() => 
                    paginaHandler(setPagina,pagina,-1,(articles.length),numArticulos)
                }>
                    Página Anterior
                </button>

                <span>&nbsp;{pagina}/{Math.round(articles.length/numArticulos)}&nbsp;</span>

                <button 
                onClick={() => 
                    paginaHandler(setPagina,pagina,1,(articles.length),numArticulos)
                }>
                    Página Siguiente
                </button>
                </div>
            </div>
        );
    }
}

export default HomePage;