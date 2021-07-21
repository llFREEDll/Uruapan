import React from 'react'

import facebookIcon from '../../assets/facebookIcon.png'
import twitterIcon from '../../assets/twitterIcon.png'
import youtubeIcon from '../../assets/youtubeIcon.png'
import phoneIcon from '../../assets/phoneIcon.png'
import locationIcon from '../../assets/locationIcon.png'
import '../../styles/NavBar.css'

//pie de pagina de la aplicacion
//contiene un iframe con la ubicacion del ayuntamiento
//asi como los diferentes links de contacto
//telefono, facebook,twitter y youtube

const Footer = () =>(
    <div className = "bd-footer pt-5 mt-0 color2 text-white">
        <div className = "mx-5">
            <div className = "row row-cols-1 row-cols-md-2">
                <div className = "col mb-3 " >
                    <h3>Ubicación</h3>
                    <iframe className = "rounded-3 border border-warning w-100" title = "location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.7851688152327!2d-102.04987898561808!3d19.42168604606349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842de273b985fd51%3A0xb5cf2ec858e4693f!2sH.%20Ayuntamiento%20de%20Uruapan!5e0!3m2!1ses-419!2smx!4v1624731806553!5m2!1ses-419!2smx"  height="450" style={{border:"0" }}allowFullScreen="" loading="lazy"></iframe>
                </div>
                <div className = "col mb-3">
                    <h3 className = "pb-4">Contactanos</h3>
                    <div className = " h-75 mt-5">
                        <a className = "link text-white text-decoration-none" target = "_blank" rel="noreferrer" href = 'https://goo.gl/maps/2h5kkEWNvFzAMPgE7'>
                            <img alt = "" src = {locationIcon} width = "40" height ="40" />
                            &emsp;AV CHIAPAS 514 COL. RAMON FARIAS, C.P. 60000 URUAPAN, MICHOACÁN
                        </a>
                        <br/>
                        <br/>
                        <a className = "link text-white text-decoration-none" href = 'tel:4525240092'>
                            <img alt = "" width = "40" height = "40" src = {phoneIcon} />
                            &emsp;452-524-0092
                        </a>
                        <br/>
                        <br/>
                        <a target = "_blank" rel="noreferrer" className = "link text-white text-decoration-none" href = 'https://www.facebook.com/UruapanGobiernoMunicipal/?epa=SEARCH_BOX'>
                            <img width = "40" height = "40" alt="" src = {facebookIcon} />
                            &emsp;@UruapanGobiernoMunicipal
                        </a>
                        <br/>
                        <br/>
                        <a target = "_blank" rel="noreferrer" className = "link text-white text-decoration-none" href = 'https://twitter.com/GobiernoUruapan'>
                            <img width = "40" height = "40" alt="" src = {twitterIcon} />
                            &emsp;@GobiernoUruapan
                        </a>
                        <br/>
                        <br/>
                        <a target = "_blank" rel="noreferrer" className = "link text-white text-decoration-none" href = 'https://www.youtube.com/channel/UC5EZpOMngQLwqtfwSIbVIXg'>
                            <img width = "40" height = "40" alt="" src = {youtubeIcon} />
                            &emsp;Uruapan Gobierno Municipal
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className = "py-4 backgroundColor"></div>    
    </div>
    
)

export default Footer