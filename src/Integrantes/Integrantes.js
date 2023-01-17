import "./Integrantes.css"
import { Footer } from "../shared/Footer/Footer"

export function Integrantes(){

    let titulo="Miembros de la banda"
    let miembros=[
        {
            id:1,
            nombre:"Juan Valdivia (guitarra solista)",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyabc-41b7d.appspot.com/o/integrante1.jpeg?alt=media&token=56a1403c-add7-4252-9560-34dfcb4202ed",
            biografia:"Juan Valdivia Navarro, (Zaragoza, 3 de diciembre de 1965) es un músico español. Se dio a conocer como guitarrista del grupo Héroes del Silencio. Lanzó en 2001 un disco en solitario titulado Trigonometralla. Desde muy pequeño su padre, militar, le enseña a tocar la batería, pero él se decanta por la guitarra, que aprende a tocar con las primeras nociones que le enseñó su hermana Beatriz. Compra su primera guitarra, que cambia por una Stagg Stratocaster eléctrica. El primer grupo donde militó Juan fue en Autoservicio, haciendo versiones de Tequila, Peter Frampton e Ilegales. Más tarde pasó a formar Zumo de Vidrio con su hermano Pedro, grupo precursor de la futura banda Héroes del Silencio ya que Zumo de Vidrio va variando la formación, filosofía y estilo."
        },
        {
            id:2,
            nombre:"Enrique Bunbury (voz y guitarra rítmica)",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyabc-41b7d.appspot.com/o/integrante2.jpg?alt=media&token=7f23c835-7afd-4608-b41f-68b4f42c4a00",
            biografia:"Enrique Ortiz de Landázuri Izarduy (Zaragoza, 11 de agosto de 1967)​ más conocido como Enrique Bunbury o simplemente Bunbury, es un cantante, compositor y músico español. Es reconocido por haber sido el vocalista y líder de la banda de música de rock Héroes del Silencio. Comenzó su actividad musical durante los primeros años de la década de los 80 formando parte de Apocalipsis, Rebel Waltz, Proceso Entrópico y Zumo de Vidrio, aunque su consagración llegó siendo el vocalista y líder de la banda Héroes del Silencio, grupo musical de gran éxito y considerado por muchos una de las mejores bandas de rock en español. Después de la ruptura del grupo en 1996, comenzó su carrera como solista al año siguiente consolidándose como una importante figura en el ámbito musical español e hispanoamericano."
        },
        {
            id:3,
            nombre:"Joaquín Cardiel (bajo)",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyabc-41b7d.appspot.com/o/integrante3.webp?alt=media&token=a5928862-2b83-45d7-aec7-4266f0bc2281",
            biografia:'Joaquín Cardiel Jericó, nacido en Zaragoza el 2 de junio de 1965, es un músico español. Fue bajista del grupo Héroes del Silencio, donde también hacía los coros. Joaquín empezó en la música muy temprano. Sus grupos favoritos son AC/DC, Led Zeppelin, Status Quo, etc. Empezó tocando la guitarra en "Edición Fría" y "Tres de Ellos". En 1985 se une a Héroes del Silencio tocando el bajo. Es el único de los integrantes que no dejó los estudios ya que terminó la carrera de Ciencias Químicas sin perder ningún curso en 1988, justo cuando el grupo empezaba ya a tener cierto éxito.'
        },
        {
            id:4,
            nombre:" Pedro Andreu (batería)",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyabc-41b7d.appspot.com/o/integrante4.jpg?alt=media&token=78ccc3d5-560e-4de2-8ca3-5edbddda0217",
            biografia:"Pedro Andreu Lapiedra (Zaragoza, 15 de abril de 1966) es un músico español conocido por haber sido el baterista del grupo de rock Héroes del Silencio. Llevó a cabo varios proyectos musicales (Puravida, DAb y La ReD). En 1985 se integró a la banda de Héroes del Silencio. Tuvo dos etapas en la banda española, la primera llegó hasta el disco Senderos de traición (1990), donde tiene influencias de Larry Mullen Jr., Stewart Copeland y algunos otros bateristas. En la segunda etapa, Pedro Andreu se mete más en el rock, lo cual se nota en los siguientes discos. Tiene influencias americanas como Grand Funk Railroad, Lynyrd Skynyrd, ZZ Top y Guns N' Roses, entre otros."
        }
    ]

    return(
        <>
            <h1 className="titulo">{titulo}</h1>
            <div className="container">
                <div classNames="row row-cols-1 row-cols-md-2 g-0">
                    {
                        miembros.map(function(miembro){
                            if(miembro.id %2 === 0){
                                return(
                                    <>
                                        <div className="row-col">
                                            <div className="row espacio">
                                                <div className="col">
                                                    <img src={miembro.foto} alt="" className="img-fluid w-100"/>
                                                </div>
                                                <div className="col">
                                                <p className="espacio">{miembro.biografia}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                            else{
                                return(
                                    <>
                                        <div className="row-col">
                                            <div className="row espacio">
                                                <div className="col">
                                                    <p className="espacio">{miembro.biografia}</p>
                                                </div>
                                                <div className="col">
                                                    <img src={miembro.foto} alt="" className="img-fluid w-100"/>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                            
                        })
                    }
                </div>
            </div>
            <Footer/>
        </>
    )
}