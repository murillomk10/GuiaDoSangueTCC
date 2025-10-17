import logo from '../assets/LogoGuiaDoSangue.png'
import './cabecalho.scss'
import { Link } from 'react-router';

export default function () {
    return(
        <header className='main-header'>
            <nav>
                <img src={logo} alt="LogoGuiaDoSangue" />
                <ol>
                    <li><Link to="/">Quem Somos</Link></li>
                    <li><Link to="">Requisitos Para a Doação de Sangue</Link></li>
                    <li><Link to="">Onde Doar</Link></li>
                    <li><Link to="">Contato</Link></li>
                </ol>
                <button>Fazer Login</button>
            </nav>
        </header>
    )
}