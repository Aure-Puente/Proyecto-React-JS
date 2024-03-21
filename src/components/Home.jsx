import zapatillas from "../images/asd.avif"

const Home = () => {
    return (
        <> {/*fragment(etiqueta vacia), como solo se puede retornar un solo elemento, para no meter todo en un solo div, se usa el fragment*/}
        <div>
            <h1 style={{color:"peru", fontSize:"1rem",marginTop:"10px"}}>
            Home</h1>
        </div>
        <h2>subtitulo</h2>
        {/*Tres maneras de usar imagenes en el proyecto. la ultima manera usa la importacion arriba del todo*/}
        
        {/*<img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/c142072a75bb4a7fa357ae9b0104b4ec_9366/Zapatillas_Response_Super_3.0_Negro_GW1371_01_standard.jpg" alt="" />*/}
        {/*<img src="/public/asd.avif" alt="" />*/}
        <img src={zapatillas} alt="" />
        </>
    )
}
/*Esta manera de usar css se llama "estilo en linea" y se considera mala practica, solo se
usa si es demasiado poco el estilo que vamos a usar, para no generar una hoja de estilos
con tan poco codigo */
export default Home