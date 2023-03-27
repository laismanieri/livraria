import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Carrinho from './components/pages/Carrinho';
import Contact from './components/pages/Contact';
import Livro from './components/layout/Livro';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element = {<Home/>} path='/' exact>
          </Route>
          <Route element = {<Login/>} path='/login'/>
          <Route element = {<Carrinho/>} path='/carrinho'/>
          <Route element = {<Contact/>} path='/contact'/>
          <Route element = {<Livro/>} path='/livro'/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
