import { generarToken } from "./servicioToken"

export async function servicioAlbumsTop(){

    let token=await generarToken()

    const URL="https://api.spotify.com/v1/artists/3qAPxVwIQRBuz5ImPUxpZT/albums?market=us&limit=10&offset=5"

    const PETICION={
        method:"GET",
        headers:{Authorization:token}

    }

    let respuesta=await fetch(URL,PETICION)
    let albums=await respuesta.json()

    return albums
}