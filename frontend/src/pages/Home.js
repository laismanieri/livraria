import { useState } from "react";
import {NavLink, Outlet} from 'react-router-dom';

import './Home.css';


const Home = () =>{

    const [open, setopen] = useState(true);

    function expandMenu(){
        setopen(!open);
    }

    return(
        <div className='menu'>
            <header className="header">
                <ul>
                    <li className={open?'menu-lateral-open':'menu-lateral-closed'}>                            
                        <button className="arrow" onClick={expandMenu}>
                        {open? 
                        <><img src="images/menu-lateral.png" alt="ícone menu lateral" /></>:<img src="images/menu-lateral.png" alt="ícone menu lateral" />}
                    </button>
                    </li>
                    <li>
                        <img title="logo" id="logo" src="images/logo.png" alt="logo da livraria"/>
                    </li>
                    <li className="busca">
                        <div  className="div-busca">                    
                            <input className='input' type="text"    placeholder="Buscar..."/>
                            <img title="Home" id="lupa" src="images/lupa.png" alt="ícone menu lateral"/>
                        </div>
                    </li> 
                    <li className="usuario">                    
                        <NavLink to='/Home'>
                            <img title="Usuario" src="images/usuario.png" alt="ícone um usuario"/>
                        </NavLink>
                    </li>
                    <li className="cesta">                    
                        <NavLink to='/Home'>
                            <img title="Cesta"  src="images/cesta.png" alt="ícone sacola de pedidos"/>
                        </NavLink>
                    </li>            
                </ul>
            </header>

            <div className="carrossel">

            </div>

            <div className='tela'>
                
                <div className={open?'menu-lateral-open':'menu-lateral-closed'}>
                    <ul className="ul">
                        <li className="li">
                            <div className="div-li">
                            <NavLink to='/Home'>
                                <h2>Página Inicial</h2>
                               
                            </NavLink></div>
                            <div className="linha"></div>
                        </li>
                        <li className="li">
                            <NavLink to='/Pedidos'>
                                <h2>Meus Pedidos</h2>
                            </NavLink>
                        </li>
                        <li className="li">
                            <NavLink to='Favoritos'>
                                <h2>Favoritos</h2>
                            </NavLink>
                        </li>                    
                        <li className="li">
                            <NavLink to=''>
                                <h2>Cupons</h2>
                            </NavLink>
                        </li>
                        <li className="li">
                            <NavLink to=''>
                                <h2>Ofertas</h2>
                            </NavLink>
                        </li>
                        <li className="li">
                            <NavLink to=''>
                                <h2>Mais Vendidos</h2>
                            </NavLink>
                        </li>

                    </ul>
                
                </div>
                <div className='display'>
                    <Outlet></Outlet>
                </div>
                
            </div>

            <footer>
                <div>
                    <p>
                        Copyright &#169; Universo dos Livrros
                        <script>document.write(new Date().getFullYear())</script>
                       
                    </p>
                </div>
            </footer>
        </div>    
        
    )

}


export default Home;