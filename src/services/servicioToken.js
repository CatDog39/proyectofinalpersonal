export async function generarToken(){

    const client_id="client_id=a70793d5d6c2479a937e6a62392e70a4"
    const client_secret="client_secret=856f62d83bbd46afa6a02a5023696ee6"
    const grant_type="grant_type=client_credentials"

    let dataEnvio=grant_type+"&"+client_secret+"&"+client_id

    const URL="https://accounts.spotify.com/api/token"

    const PETICION={
        method:"POST",
        headers:{"Content-type":"application/x-www-form-urlencoded"},
        body:dataEnvio
    }

    let respuesta=await fetch(URL,PETICION)

    let token=await respuesta.json()

    //Armamos el token
    let tokenDefinitivo=token.token_type+" "+token.access_token

    return(tokenDefinitivo)

}