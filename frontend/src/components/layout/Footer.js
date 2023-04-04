import {FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp} from 'react-icons/fa'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'


function Footer() {
    return(
        <footer className={styles.footer}>
            <Link to="/Contact"><h1>Fale Conosco</h1></Link>
            
            <ul className={styles.socialList}>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaLinkedin />
                </li>
                <li>
                    <FaWhatsapp />
                </li>
            </ul>
            <p>
                <span>Universo dos Livros </span>
                &copy; 2023
            </p>
        </footer>
    )
}

export default Footer