import { servicioCancionesTop } from "../services/servicioCanciones"
import { useState,useEffect } from "react"

export function Music(){

    //Usando el hook usestate para almacenar la
    //respuesta del api de forma global
    const[canciones,setCanciones]=useState(null)
    const[estadoCarga,setEstadoCarga]=useState(true)

    //Usando el hook usesffect para limitar el 
    //consumo del api a una sola vez
    useEffect(function(){

        servicioCancionesTop().then(function(respuesta){
            setCanciones(respuesta)
            setEstadoCarga(false)
        })

    },[])

    //Render del componente:
    if(estadoCarga==true){
        return(
            <>
                <h2>Estamos cargando las canciones</h2>
            </>
        )

    }else{
        return(
            <>
                <h2>canciones de la banda: </h2>
                {
                    canciones.tracks.map(function(cancion){
                        //{console.log(cancion)}
                        return(
                            <div>
                                <h1>{cancion.name}</h1>
                                <audio controls src={cancion.preview_url}></audio>
                                <img src={cancion.album.images[0].url}></img>
                            </div>
                            
                        )
                    })
                }
            </>
        )

    }


}