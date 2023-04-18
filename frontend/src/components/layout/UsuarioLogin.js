import styles from "../layout/UsuarioLogin.module.css";
import { Link } from "react-router-dom";

<<<<<<< HEAD

=======
>>>>>>> c4089d587ffdfbf32c146d7a7c335bd439cd0b22
function UsuarioLogin() {
  return (
    <div className={styles.loginUser}>
      <div className={styles.divImgUser}>
        <img
          className={styles.imgUser}
          title="Login"
<<<<<<< HEAD
          src="/img/perfil-de-usuario.png"
=======
          src="./img/perfil-de-usuario.png"
>>>>>>> c4089d587ffdfbf32c146d7a7c335bd439cd0b22
          alt="ícone de usuário"
        />
      </div>

      <div className={styles.login}>
        <h1 className={styles.boasVindas}>Boas-vindas!</h1>
        <Link to="/login" className={styles.loginAcesso}>
          <p className={styles.entre}>Entre ou cadastre-se</p>
        </Link>
      </div>
    </div>
  );
}

export default UsuarioLogin;