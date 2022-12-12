import { Footer } from "../shared/Footer/Footer"
import { useNavigate } from "react-router-dom"

export function Mercancias(){

    //activamos la navegacion entre componentes 
    //cuando se de un evento
    let navegacion=useNavigate()


    //  que hago cuando se de el evento...
    function detectarEvento(productoSeleccionado){
        
        navegacion('/tienda',{
            state:{productoSeleccionado}
        })

    }

    let titulo="Productos para los fans..."

    let productos=[
        {
            nombre:"Buzo negro original HdS",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyabc-41b7d.appspot.com/o/buzohds.jpg?alt=media&token=4561f963-f4b5-48d0-9460-51925ef41d24",
            precio:75
        },
        {
            nombre:"Camiseta negra original HdS",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyabc-41b7d.appspot.com/o/camisetahds.jpg?alt=media&token=b9b87085-f38e-4706-8d0d-e8eeb34668b7",
            precio:35
        },
        {
            nombre:"Camisilla negra dama original HdS",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyabc-41b7d.appspot.com/o/camisillahds.jpg?alt=media&token=7f6e6264-33d7-48d1-ace4-ab9a20f1ebe2",
            precio:30
        },
        {
            nombre:"Figuras coleccionable original album 1980 HdS",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyabc-41b7d.appspot.com/o/figurahds.jpg?alt=media&token=7385d261-9788-47b0-8049-a33166e7fa56",
            precio:45
        },
        {
            nombre:"LP album con Mejores exitos HdS",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyabc-41b7d.appspot.com/o/vinilohds.webp?alt=media&token=98dc6f6e-8b77-4e16-9fe8-dfa411d64229",
            precio:85
        },
        {
            nombre:"Llavero carro HdS",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyabc-41b7d.appspot.com/o/hdsllaveros.jpg?alt=media&token=6e487c56-dbda-4b2c-90af-aed92a162de1",
            precio:25
        },
    ]

    return(
        <>
            <h1>{titulo}</h1>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-5">

                    {
                        productos.map(function(producto,id){
                            return(
                                <div key={id}>
                                    <div className="col">
                                        <div className="card h-100 shadow">

                                        <h2>{producto.nombre}</h2>
                                            <img src={producto.foto} alt="" className="h-100 img-fluid w-100"/>
                                            
                                            <h4>${producto.precio}</h4>
                                            <h5>Algo mas</h5>
                                            <button className='btn btn-primary mx-3 mb-3 my-3' onClick={
                                                function(){
                                                    detectarEvento(producto)
                                                }
                                            }>Ampliar</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <Footer/>
        </>
    )
}