import { servicioCancionesTop } from "../services/servicioCanciones"
import { useState,useEffect } from "react"
import "./Music.css"

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
                <h2>Canciones Top de la banda: </h2>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-5 g-4">
                        {
                            canciones.tracks.map(function(cancion,id){
                                return(
                                    <div key={id}>
                                        <div className="col">
                                            <div className="card carta shadow">
                                                <img src={cancion.album.images[0].url} className="img-fluid w-100"></img>
                                                <p className="titulo">{cancion.name}</p>
                                                <audio controls src={cancion.preview_url}></audio>
                                                <p className="popular">Popularidad: {cancion.popularity}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                
            </>
            
        )

    }


}