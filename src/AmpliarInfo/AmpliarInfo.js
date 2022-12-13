import './AmpliarInfo.css'
import { useLocation } from "react-router-dom"   //recibe lo que le manden los datos mientras que el otro navega entre componentes a traves de la logica como eventos use navegate
export function AmpliarInfo(){

    let datosRecibidos=useLocation()


    let producto=datosRecibidos.state.productoSeleccionado
    console.log(producto)

    return(
        <>
            <div className="container">

                <div className="row my-5">
                    <div className="col-12 col-md-5">
                        <img src={producto.foto} alt="foto" className="img-fluid w-100"/>
                        
                    </div>
                    <div className="col-12 col-md-4 border p-3">
                        <h2 className="fw-bold">{producto.nombre}</h2>
                        <p className='mt-5'>{producto.descripcion}</p>
                        <h1 className="mt-3 display-1">${producto.precio}<span className="descuento">35% off</span></h1>
                        <br/>
                        <span className="badge text-bg-primary">Descuento del dia</span>
                        <p>Hasta 48 cuotas</p>
                        <img src='https://firebasestorage.googleapis.com/v0/b/spotyabc-41b7d.appspot.com/o/american-express.png?alt=media&token=2d52af79-2090-4675-a74d-4bbf6e70e902' alt='foto tarjeta' className='img-fluid'/>
                        <img src='https://firebasestorage.googleapis.com/v0/b/spotyabc-41b7d.appspot.com/o/visa.png?alt=media&token=a6233ca5-a2d3-4957-8dc2-c315b65aeb25' alt='foto tarjeta' className='img-fluid ms-3'/>
                        
                        <br/>
                        
                        
                        <div className='row '>
                            <i class="bi bi-truck fs-1 text-success col-2"></i> 
                            <p className='text-success fw-bold col-10 mt-4'>Envio gratis a nivel nacional</p>
                        </div>
                        <p>Conoce los tiempos y las formas de envío.</p>

                        <div className='row '>
                            <i class="bi bi-arrow-clockwise fs-1 text-success col-2"></i>
                            <p className='text-success fw-bold mt-4 col-10'>Debolución gratis</p>
                        </div>                    
                        <p>30 días para reembolsos.</p>
                    </div>
                    
                </div>

            </div>
        </>
    )
}