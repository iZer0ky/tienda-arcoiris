
const paginaHandler = (setPagina, pagina, cambio, totalArticulos, articulosPorPag) => {
    if((pagina+cambio > 0) && (pagina+cambio < (totalArticulos/articulosPorPag) + 1) ) {
        setPagina(pagina+cambio);
    }
}

export default paginaHandler