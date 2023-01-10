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
                                    headers:{Authorization:"Bearer BQDZaXu0eRLNOhmrNDVC7e_kBm6QEHax5VrClzHh2Pzm61S3KD0lzHMHHiUVf8xg62CYsjCyKF3bXwiO7xhFH9kOCYg_jPGLdi9P7_ZI23mvENQD9rFvIMMOIxoyOlx8_JrxjvbFMffdqvb5MRGzOeK2-XqqdoLaEZ4eabZmDqKZQGqlGrxdHcDjzTuUY-cJyIo"}
                  }

                  //3. NOS VAMOS PAL RESTAURANTE
                  //CONSUMIMOS EL API
                  let respuesta=await fetch(URL,PETICION)
                  let canciones=await respuesta.json()

                  console.log(canciones)



}