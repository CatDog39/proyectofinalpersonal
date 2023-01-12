import { Footer } from "../shared/Footer/Footer"
import { useNavigate } from "react-router-dom"
import "./Mercancias.css"
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
            nombre:"Buzo negro original",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyabc-41b7d.appspot.com/o/buzohds.jpg?alt=media&token=4561f963-f4b5-48d0-9460-51925ef41d24",
            precio:75,
            descripcion:"Buzos sin capucha fija y bolsillo cangurero. Para niños y adultos. Su estilo moderno cuenta con capucha removible de cordón ajustable. Buzos hechos en algodón perchado mónaco importado. Tallas disponibles: Niños: 2 - 4 - 6 - 8 - 10 - 12 - 14 - 16 Adultos: S - M - L - XL"
        },
        {
            nombre:"Camiseta negra original",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyabc-41b7d.appspot.com/o/camisetahds.jpg?alt=media&token=b9b87085-f38e-4706-8d0d-e8eeb34668b7",
            precio:35,
            descripcion:"Camiseta de corte estándar en punto suave de algodón con cuello redondo con ribete acanalado y bajo recto."
        },
        {
            nombre:"Camisilla negra dama original",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyabc-41b7d.appspot.com/o/camisillahds.jpg?alt=media&token=7f6e6264-33d7-48d1-ace4-ab9a20f1ebe2",
            precio:30,
            descripcion:"Infaltable en el closet de todo hombre.  La actividad antibacterial de este producto elimina el 99.9% de las bacterias causantes del mal olor probadas (Staphylococcus Aureus y Klebseilla Pneumoniae) al entrar en contacto con la tela. Sus propiedades se conservan hasta por 50 lavadas."
        },
        {
            nombre:"Figuras coleccionable album 1980 ",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyabc-41b7d.appspot.com/o/figurahds.jpg?alt=media&token=7385d261-9788-47b0-8049-a33166e7fa56",
            precio:45,
            descripcion:"Figura de colección de la banda,  pintada a mano. Todos los integrantes con sus instrumentos. Unidades limitadas 100% originales"
        },
        {
            nombre:"LP album con Mejores exitos",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyabc-41b7d.appspot.com/o/vinilohds.webp?alt=media&token=98dc6f6e-8b77-4e16-9fe8-dfa411d64229",
            precio:85,
            descripcion:"Primer album re editado en LP con los mejores exitos, caratula con foto del primer concierto de la banda. Incluye 50 fotografías autografidas  por todos los miembros en los principales  concientos al  rededor del  mundo"
        },
        {
            nombre:"Llavero carro HdS",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyabc-41b7d.appspot.com/o/hdsllaveros.jpg?alt=media&token=6e487c56-dbda-4b2c-90af-aed92a162de1",
            precio:25,
            descripcion:"Moderno  llavero  en plata fina,  30 gramos de peso con el  logo  de la banda. 5 cm de tama{o"
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
                                        <div className="card h-100 shadow ">

                                            <h5>{producto.nombre}</h5>
                                            <img src={producto.foto} alt="" className="img-fluid dimension"/>
                                            
                                            <p>${producto.precio}</p>
                                            <p>Algo mas</p>
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