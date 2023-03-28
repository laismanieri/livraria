import {Route, Routes, BrowserRouter} from 'react-router-dom';

import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Carrinho from './components/pages/Carrinho';
import Pesquisa from './components/pages/Pesquisa';
import Contact from './components/pages/Contact';
import Cadastro from './components/pages/Cadastro';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element = {<Home/>} path='/' exact>

          </Route>
          <Route element = {<Login/>} path='/login'/>
          <Route element = {<Carrinho/>} path='/carrinho'/>
          <Route element = {<Pesquisa/>} path='/pesquisa'/>
          <Route element = {<Contact/>} path='/contact'/>
          <Route element = {<Cadastro/>} path='/cadastro'/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
