import {Route, Routes, BrowserRouter} from 'react-router-dom';

import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Carrinho from './components/pages/Carrinho';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element = {<Home/>} path='/' exact>

          </Route>
          <Route element = {<Login/>} path='/login'/>
          <Route element = {<Carrinho/>} path='/carrinho'/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
