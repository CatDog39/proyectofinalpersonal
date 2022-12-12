import './Footer.css'

export function Footer(){
    return(
        <footer>
            <div className="container-fluid">
                <div className="row p-5 pie">
                    <div className="col-12 col-md-4 align-self-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotyabc-41b7d.appspot.com/o/logofinalhds.png?alt=media&token=653ea3a5-145c-472d-a509-f5af79e3f392" alt="logo banda" className="img-fluid w-100 dimension"/>
                    </div>
                    <div className="col-12 col-md-4 text-center">
                        <h2 className="fw-bold0">SOBRE LA BANDA</h2>
                        <h4>Banda de rock</h4>
                        <br/>
                        <h2 className="fw-bold0">SOBRE LA BANDA</h2>
                        <h4>Banda de rock</h4>
                    </div>
                    <div className="col-12 col-md-4">
                    <i className="bi bi-instagram fuente me-5"></i>
                    <i className="bi bi-tiktok fuente me-5"></i>
                    <i className="bi bi-facebook fuente me-2"></i>
                    </div>
                </div>
            </div>
        </footer>
    )

}