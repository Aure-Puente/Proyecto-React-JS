import "../styles/Navbar.css" //importamos la hoja de estilos de esa manera, sin nombre solo la ruta

export const Navbar = ()=>{
    return (//se usa className ahora para dar nombres a las clases
        <div className="container">
            <h2>Navbar</h2>
            <ul>
                <li>Inicio</li>
                <li>Productos</li>
                <li>Contactos</li>
            </ul>
        </div>
    )
}