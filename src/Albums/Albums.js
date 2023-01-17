import { servicioAlbumsTop } from "../services/servicioAlbums"
import { useState,useEffect } from "react"
import "./Albums.css"
 

export function Albums(){

    const[albums,setAlbums]=useState(null)
    const[estadoCarga,setEstadoCarga]=useState(true)

    useEffect (function(){
        servicioAlbumsTop().then(function(respuesta){
            setAlbums(respuesta)
            setEstadoCarga(false)
        })
    },[])

    console.log(albums);

    if (estadoCarga == true){
        return(
            <>
                <h2>Estamos cargando los Albums</h2>
            </>
        )
    }else{
        return(
            <>
                <h2>Albums de la banda:</h2>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-5 g-4">
                        {
                            albums.items.map(function(album,id){
                                return(  
                                    <div key={id}>
                                        <div className="col">
                                            <div className="card carta shadow">
                                                <img src={album.images[0].url}/>
                                                <p className="titulo">{album.name}</p>
                                                <p className="popular">{album.release_date}</p>
                                                <p><span className="totalCanciones">Total Canciones :</span>{album.total_tracks}</p>
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