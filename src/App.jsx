//Ejemplo de importacion por defecto: import cualquierNombre from "./components/Navbar"
//Ejemplo de importacion nombrada: import {Navbar, array} from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./components/Home"
import { Navbar } from "./components/Navbar"

function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App

//Hay dos maneras de exportar archivos:

/*Por defecto:solo se puede usar una vez y en un componente ya que cuando importamos , solo aclaramos
la ruta, no de donde viene, por eso no podemos tener dos archivos exportados por default*/
// Se ejecuta de la siguient manera:
//export default Navbar

/*Nombrada: se coloca el export antes de cada archivo o elemento que queremos exportar */
// Se ejecuta de la siguiente manera:
// export const array = []
/* export const Navbar = ()=>{
  return <h1>Hola</h1>
}*/

//Autoimportacion:
/*Se puede autoimpoertar un archivo sin necedidas de acalrar el import y luego poner el export, solo hay que empezar a
escribir el nobre del archivo en el div, como arriba el <Navbar /> y nos sugerira la autoimportacion, para que 
funcione debemos tener el archivo que queremos importar abierto en una pestaña */

//Crear componentes:
/*Para crear un componente mas rapido, lo podemos hacer con la ayuda de una extension ya insatalada llamda Simple React Snippets
creamos el archivo .jsx con el nombre correspondiente como por ejemplo Footer.jsx y dentro del archivo tecleamos cualquiera
de estos dos comandos: rafc o rafce */

//Autocompletar:
/*Cuando escribimos algo y nos salen sugerencias para autocompletar , pero por algun motivo al clickear en otro lado ya no
nos aparecen, podemos hacer click al final de la palabra y teclear ctrl + espacio */