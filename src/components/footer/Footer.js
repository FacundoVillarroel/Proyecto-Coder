import './Footer.css'
import instagram from '../../img/instagram.svg'
import linkedin from '../../img/linkedin.svg'
import facebook from '../../img/facebook.svg'
import copyright from '../../img/copyright.svg'
import arrow from '../../img/arrow.svg'

const Footer = () => {
    return (
        <div>
            <div className="footerContainer">
                <div className="container footerCenter">
                    <div className="row footerAlign">
                        <div className="col footerBrand footerInner">
                        <img className="imgIcon" src={copyright} alt="Copyrigth"/>
                           <p className="footerBrandTxt">2022 Dword</p>
                        </div>
                        <div className="col footerMedia footerInner">
                        <img className="imgRedes" src={instagram} alt="Logo de instagrm"/>
                        <img className="imgRedes" src={linkedin} alt="Logo de instagrm"/>
                        <img className="imgRedes" src={facebook} alt="Logo de instagrm"/>
                        </div>
                        <div className="col footerHome footerInner">
                            <p className="footerArrowTxt">Volver arriba</p>
                            <img className="imgIcon greenArrow" src={arrow} alt="Flecha hacia inicio"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer