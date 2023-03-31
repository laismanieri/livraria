import styles from './NavBar.module.css'
import {Link} from 'react-router-dom'

function Usuario (){

    return (
        <div className={styles.loginUser}>
                        <div>
                            <img className={styles.imgUser} title="Login" src="./img/perfil-de-usuario.png" alt="ícone de usuario"/>
                        </div>
                              
                     <div className={styles.login}>
                        <div className={styles.divLogin}>
                            <h1 className={styles.boasVindas} >Boas-vindas!</h1>
                        </div>
                        <div className={styles.linkLogin}>
                            <Link to="/login" className={styles.loginAcesso}>
                                <h1 className={styles.entre} >Entre ou cadastre-se</h1>
                            </Link>
                        </div>
                    </div>
                </div>
    )
}

export default Usuario