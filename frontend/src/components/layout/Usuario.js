import styles from './NavBar.module.css'
import {Link} from 'react-router-dom'

function Usuario (){

    return (
        <div className={styles.loginUser}>
                    <li>                    
                        <img title="Login" src="./img/perfil-de-usuario.png" alt="ícone de usuario"/>
                     </li>
                     <div className={styles.login}>
                        <li>
                            <h1>Boas-vindas!</h1>
                        </li>
                        <li>
                        <Link to="/login" className={styles.loginAcesso}>
                          <h1>Entre ou cadastre-se</h1>
                        </Link>
                        </li>
                    </div>
                </div>
    )
}

export default Usuario