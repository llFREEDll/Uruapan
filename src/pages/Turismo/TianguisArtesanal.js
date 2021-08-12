import React from 'react'
import Footer from '../../components/general/Footer'
import NavBar from '../../components/general/NavBar'
import img from '../../assets/domingoDeRamos.jpg'

const TianguisArtesanal = () =>{

    return(
        <>
            <NavBar/>
            <div className = "text-center container ">
                <h1 className = "my-5">TIANGUIS ARTESANAL DOMINGO DE RAMOS URUAPAN</h1>
                <img src={img} className="rounded mx-auto d-block" alt="..."/>
                <div className = "my-5">
                    <p>El Tianguis Artesanal de Domingo de Ramos se realiza en el centro histórico durante la semana Santa y la semana de Pascua de cada año, mismo que representa la fiesta artesanal y cultural más importante de Michoacán, México y de América Latina. Inicia con un tradicional desfile, en donde los artesanos llenan de colorido y alegría las calles de la ciudad con sus danzas, música y carros alegóricos.</p>
                    <p>La plaza Morelos y la plaza Mártires de Uruapan cada año se convierten en los espacios idóneos para albergar a los más de mil doscientos artesanos de las 4 etnias indígenas que se encuentran en Michoacán (purépecha, otomí, náhuatl y mazahua), donde año con año exhiben y comercializan más de un millón de piezas artesanales elaboradas a base de textiles, barro, madera, cobre, maque, arte plumario, laca, cerámica, fibras vegetales, entre otros materiales.</p>
                    <p>Asimismo en el marco de esta festividad se realiza el Concurso Estatal de Artesanías, en el cual se inscriben alrededor de 3,000 piezas hechas por las manos mágicas de los artesanos michoacanos. De igual manera se lleva a cabo el Concurso de Indumentaria tradicional, donde presentan las mujeres y hombres de las comunidades sus prendas de uso diario, de ceremonia y de danza.</p>
                    <p>No puede faltar la gastronomía en esta importante festividad, año con año se presenta una Muestra de comida P´urépecha, en la cual los visitantes pueden disfrutar de exquisitos platillos realizados por Cocineras Tradicionales, como el churipo, atapakuas, las corundas, atoles de distintos sabores, entre otros suculentos platillos y bebidas. Cabe señalar que la comida P´urépecha fue declarada hace unos años como patrimonio cultural inmaterial de la humanidad por la UNESCO.</p>
                    <p>Otra actividad importantes es el Ritual de las Aguadoras, donde grupos de mujeres de los barrios de Uruapan vestidas con trajes tradicionales p’urhépechas desfilan por las principales calles de la ciudad, llevando un mandil blanco, un cántaro de barro adornado con miniaturas de madera, barro, flores o frutas.</p>
                </div>
                
            </div>
            <Footer/>
        </>
    )
}

export default TianguisArtesanal