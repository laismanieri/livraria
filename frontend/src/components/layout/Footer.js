import {FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaUber} from 'react-icons/fa'
import styles from './Footer.module.css'


function Footer() {
    return(
        <footer className={styles.footer}>
            <a className={styles.faleConosco} href="#faleConosco"><h1>Fale Conosco</h1></a>
            
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