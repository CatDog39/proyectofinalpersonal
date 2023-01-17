import { generarToken } from "./servicioToken"

//RECETA PARA CONSUMIR UN API CON REACT

export async function servicioCancionesTop(){

    let token=await generarToken()

    //1. PA ONDE VAS Y A QUE VAS
    //ESCRBIR LA URL DEL SERVICIO DEL API
    const URL="https://api.spotify.com/v1/artists/3qAPxVwIQRBuz5ImPUxpZT/top-tracks?market=US"

    //2. QUE OPERACION VAS A HACER EN LA BASE DE DATOS
    //CONFIGURAR LA PETICION DE ENVIO HACIA EL SERVIDOR
    //PETICION ES LO MISMO QUE REQUEST
    const PETICION={
        method:"GET",
        headers:{Authorization:token}
    }

    //3. NOS VAMOS PAL RESTAURANTE
    //CONSUMIMOS EL API
    let respuesta=await fetch(URL,PETICION)
    let canciones=await respuesta.json()

    return canciones
    


}