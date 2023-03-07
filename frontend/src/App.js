import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home'
import Container from './components/layout/Container';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';



function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Switch>
        <Container customClass="min-height">
        <Home/>
        </Container>  
        </Switch>
        <Footer/>
    </Router>

    </>
  );
}

export default App;
