//RECETA PARA CONSUMIR UN API CON REACT

export async function servicioCancionesTop(){

    //1. PA ONDE VAS Y A QUE VAS
    //ESCRBIR LA URL DEL SERVICIO DEL API
    const URL="https://api.spotify.com/v1/artists/3qAPxVwIQRBuz5ImPUxpZT/top-tracks?market=US"

    //2. QUE OPERACION VAS A HACER EN LA BASE DE DATOS
    //CONFIGURAR LA PETICION DE ENVIO HACIA EL SERVIDOR
    //PETICION ES LO MISMO QUE REQUEST
    const PETICION={
        method:"GET",
        headers:{Authorization:"Bearer BQAUwASi4pzOOIZ4U55j0syjxpGbsX490HrZNTEu6z_njBLSKUre6J6rPIYVZRw-J5MF8r6-PSj3ABJmSnbK-BzGYBIdV7SYopiQZic3Qngl644tOS-O3aLtDy4GpeF_TY5kjNgzOYcknWQTU4HQy4ABUoWq1skLUsm95wQvjV-SkerWKQFbuZ3A-OJV7YG-Uhg"}
    }

    //3. NOS VAMOS PAL RESTAURANTE
    //CONSUMIMOS EL API
    let respuesta=await fetch(URL,PETICION)
    let canciones=await respuesta.json()

    return canciones



}