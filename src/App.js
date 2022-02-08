import './App.css';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Article from './pages/Article';

const App = () => {
	return (
		<div className='app'>
			<BrowserRouter>
				<nav>
					<h1>My Articles</h1>
          <NavLink exact to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
				</nav>

				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='/about'>
						<About />
					</Route>
					<Route path='/contact' component={Contact} />
          {/* Nótese que el path es dinámico y para eso usamos : esto le dice a react-router que es un parámetro de ruta y que puede cambiar*/}
          <Route path='/articles/:id' component={Article}/>
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
