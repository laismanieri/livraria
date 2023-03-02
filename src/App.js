//Bibliotecas
import {Route, Routes, BrowserRouter} from 'react-router-dom';

// Estilo
import './App.css';
import Inicial from './pages/Inicial';


import Home from './pages/Home';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route element = {<Home/>} path='/' exact>
              <Route element = {<Inicial/>} path='/'/>
            </Route>
          </Routes>
        </BrowserRouter>
  
    </div>
  );
}

export default App;
