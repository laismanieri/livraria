
import './Header.css';

const Header = () =>{


    return(
              
                <div className="header">
                    <nav>
                        <ul>  
                            <li> 
                                <a href="#" aria-label="Menu" > 
                                <img  id="menu" src="images/opcao.png" alt="ícone de opção"/>
                                </a>
                                <ul class="servicos">
                                    <li><a href="#">Página Inicial </a></li>
                                    <li><a href="#">Página Inicial</a></li>
                                    <li><a href="#">Página Inicial</a></li>
                                    <li><a href="#">Página Inicial</a></li>
                                    <li><a href="#">Página Inicial</a></li>
                                    <li><a href="#">Página Inicial</a></li>
                                </ul> 
                            </li>                     
                            <li className="logo">
                                    <img src="images/logo.png" alt="ícone menu lateral" />
                            </li>
                            <li className="search-icon" >
                                <input type="search" placeholder="O que você quer ler?"/> 
                                <img className="icon" aria-label="Menu" id="lupa" src="images/lupa.png" alt="ícone menu lateral"/>
                            </li>
                            <div className="login-usuario">
                                <li>                    <img title="Login"      id="login" src="images/perfil-de-usuario.png" alt="ícone de usuario"/>
                                </li>
                                <div className="login">
                                    <li>
                                        <h1>Boas-vindas!</h1>
                                    </li>
                                    <li>
                                        <a href="#">Entre ou cadastre-se</a>
                                    </li>
                                </div>
                            </div>

                            <div className="items">
                                <li>
                                    <a href="#">
                                    <img src="images/compra.png" alt="ícone sacola" />
                                    </a>
                                </li>
                            </div>
                        </ul>
                    </nav>
                </div>  
    )
}


export default Header;