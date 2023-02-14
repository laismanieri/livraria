import { useState } from "react";
import {NavLink, Outlet} from 'react-router-dom';

import './Home.css';


const Home = () =>{

    const [open, setopen] = useState(true);

    function expandMenu(){
        setopen(!open);
    }

    return(
        <div className='tela'>
            
            <div className={open?'menu-lateral-open':'menu-lateral-closed'}>
                <button className="arrow" onClick={expandMenu}>
                    {open? 
                    <><img src="images/seta-direita.png" alt="ícone uma seta para a direita" /></>:<img src="images/seta-esquerda.png" alt="ícone uma seta para a direita" />}
                </button>
                <ul className="ul">
                    <li className="li-usuario">
                        <img title="Usuario" src="images/usuario.png" alt="ícone um usuario"/>
                    </li>
                    <br/><br/><br/>

                    <li className="li">
                        <NavLink to='/Home'>
                             <img title="Home"  src="images/home.png" alt="ícone home"/>
                        </NavLink>
                    </li>
                    <li className="li">
                        <NavLink to='/Pedidos'>
                             <img title="Meus Pedidos"  src="images/pedido.png" alt="ícone sacola de pedidos"/>
                        </NavLink>
                    </li>
                    <li className="li">
                        <NavLink to='Favoritos'>
                             <img title="Favoritos"  src="images/favorito.png" alt="ícone de coração para acessar os favoritos"/>
                        </NavLink>
                    </li>                    
                    <li className="li">
                        <NavLink to=''>
                             <img title="Cupom de Desconto"  src="images/cupom.png" alt="ícone de cupom de desconto"/>
                        </NavLink>
                    </li>
                    <li className="li">
                        <NavLink to=''>
                             <img title="Ofertas"  src="images/oferta.png" alt="ícone oferta"/>
                        </NavLink>
                    </li>
                    <li className="li">
                        <NavLink to=''>
                             <img title="Mais Vendidos"  src="images/estrela.png" alt="ícone de estrela para indicar os mais vendidos"/>
                        </NavLink>
                    </li>

                </ul>
               
            </div>
            <div className='display'>
                <Outlet></Outlet>
            </div>
            
        </div>
    )

}


export default Home;