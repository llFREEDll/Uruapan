import React from 'react'
import Footer from '../../components/general/Footer'
import NavBar from '../../components/general/NavBar'
import img from '../../assets/festivalDeVelas.jpg'

const FestivalDeVelas = () =>{

    return(
        <>
            <NavBar/>
            <div className = "text-center container ">
                <h1 className = "my-5">FESTIVAL DE VELAS EN NOCHE DE MUERTOS</h1>
                <img src={img} className="rounded mx-auto d-block" alt="..."/>
                <div className = "my-5">
                    <p>Se realiza en el marco de las festividades de Día de Muertos, los días 1 y 2 de noviembre. En México es una tradición honrar a los fieles difuntos a través de diversas actividades culturales, tradicionales y religiosas.</p>
                    <p>Es una tradición la colocación de altares y ofrendas en honor a los seres queridos, las cuales están compuestas por flores de cempasúchil, calaveritas de azúcar, pan de muerto, papel picado, agua, retrato del difunto, incienso o copal, veladoras, dulces mexicanos, frutos y platillos y bebidas preferidas del difunto</p>
                    <p>En Uruapan además de los rituales tradicionales, desde hace varios años se lleva a cabo el encendido de miles de velas en el centro histórico y principales calles del primer cuadro de la ciudad, logrando conmover a los espectadores con la iluminación y el colorido de las plazas, decoradas también con gigantes figuras en tapetes de aserrín y otros materiales, además de adornos de flores de cempasúchil. Lo que incita a que los visitantes se involucren encendiendo y conservando prendidas las velas en un ambiente de fiesta y comunión.</p>
                    <p>Este festival de velas también va acompañado de otras actividades culturales, artísticas y gastronómicas, entre los que destacan los concursos y exposiciones de catrinas, la degustación de pan de muerto, obras de teatro, callejoneadas así como concursos de Altares.</p>
                    <p>Sin duda, el “Festival de Velas en Noche de Muertos” ya es un atractivo principal para los turistas que visitan Uruapan y el estado de Michoacán.</p>
                    </div>
                
            </div>
            <Footer/>
        </>
    )
}

export default FestivalDeVelas