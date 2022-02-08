import './App.css';
// BrowserRouter es un enrutador. Anidamos nuestros componentes que usan rutas dentro de éste. Route nos permite generar una ruta.
import { BrowserRouter, Route } from 'react-router-dom' 
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

const App = () => {
  return (
    <div className="app">
      {/* Este componente envuelve todo componente que use rutas */}
      <BrowserRouter>
      <nav>
        <h1>My Articles</h1>
        {/* Creamos una ruta usando Route y anidamos el componente que usará esa ruta. La prop path es el path o la ruta de la página */}
        <Route path=''>
          {/* Anidamos el componente Home dentor de Route */}
          <Home/>
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
        {/* Este es otra forma de escribir/anidar un componente dentro de una ruta*/}
        <Route path='/contact' component={Contact}/>
      </nav>
      </BrowserRouter>
    </div>
  );
}

export default App;
