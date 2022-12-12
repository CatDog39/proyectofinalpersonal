import { useLocation } from "react-router-dom"   //recibe lo que le manden los datos mientras que el otro navega entre componentes a traves de la logica como eventos use navegate
export function AmpliarInfo(){

    let datosRecibidos=useLocation()


    let producto=datosRecibidos.state.productoSeleccionado
    console.log(producto)

    return(
        <>
            <h1>{producto.nombre}</h1> 
        </>
    )
}