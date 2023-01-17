//import { servicioAlbumsTop } from "..services/servicioAlbums"
//import { useState,useEffect } from "react"


//export function Albums(){

    //const[albums,setAlbums]=useState(null)
    //const[estadoCarga,setEstadoCarga]=useState(true)

    //useEffect (function(){
        //servicioAlbumsTop().then(function(respuesta){
            //setAlbums(respuesta)
            //setEstadoCarga(false)
        //})
    //},[])

    //if (estadoCarga == true){
        //return(
           // <>
                //<h2>Estamos cargando los Albums</h2>
            //</>
       // )
    //}else{
        //return(
            //<>
                //<h2>Albums de la banda:</h2>
                //<div className="container">
                   // <div className="row row-cols-1 row-cols-md-5 g-4">
                       // {
                           // albums.tracks.map(function(album,id){
                               // return(
                                    
                                   // <div key={id}>
                                       // <div className="col">
                                            //<div className="card h-100 shadow">

                                       //     </div>
                                       // </div>
                                    //</div>
                               // )
                            //})
                       // }
                   // </div>
                //</div>
            //</>
 //      // )
  //  }
//}