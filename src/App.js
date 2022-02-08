import './App.css';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

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
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
