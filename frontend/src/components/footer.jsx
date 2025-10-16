import logo from '../assets/Wsd.png'
import './footer.scss'

/*   <img src={logo} alt="LogoGuiaDoSangue" />  */

export default function Footer () {
    return(
        <div>
            <div className='cabecalho'>
                <img src={ logo } alt="Wsd" />
            </div>
            <div className='icons'>
                <img src={ logo } alt="Facebook" />
                <img src={ logo } alt="insragram" />
                <img src={ logo } alt="bribriefcase" />
                <img src={ logo } alt="youtube" />
            </div>
        </div>
    )
}