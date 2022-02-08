import './App.css';
import { BrowserRouter, Route, Switch, NavLink, Redirect } from 'react-router-dom';
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
					<NavLink exact to='/'>
						Home
					</NavLink>
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
					<Route path='/articles/:id' component={Article} />
					{/* Usamos un * para indicar que haga match con cualquier cosa (por eso va último). Usamos un componente Redirect de react-router. Decimos que el path sea el home */}
					<Route path='*'><Redirect path='/'/></Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
