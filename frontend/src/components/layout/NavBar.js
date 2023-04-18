import styles from "./NavBar.module.css";
import Container from "./Container";
import Search from "./Search";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import UsuarioLogin from "./UsuarioLogin";
=======
import Usuario from "./UsuarioLogin";
>>>>>>> c4089d587ffdfbf32c146d7a7c335bd439cd0b22


function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src="/img/logo.png" alt="Logo" className={styles.navbarLogo} />
        </Link>
        <Search />
<<<<<<< HEAD
        <UsuarioLogin />
=======
        <Usuario />
>>>>>>> c4089d587ffdfbf32c146d7a7c335bd439cd0b22
        <button className={styles.navbarButton}>
          <img src="/img/cesta-de-compras.png" alt="cesta" className={styles.navbarCesta}/>
        </button>
      </Container>
    </nav>
  );
}

export default Navbar;
