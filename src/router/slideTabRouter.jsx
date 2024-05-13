import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import SlideRoutes from 'react-slide-routes';

// https://github.com/nanxiaobei/react-slide-routes

const Home = () => <div className='card home'>Home</div>;
const About = () => <div className='card about'>About</div>;
const Contact = () => <div className='card contact'>Contact</div>;

const App = () => (
	<BrowserRouter>
		<nav>
			<NavLink to='/' end>
				Home
			</NavLink>
			<NavLink to='/about'>About</NavLink>
			<NavLink to='/contact'>Contact</NavLink>
		</nav>

		<SlideRoutes>
			<Route path='/' element={<Home />} />
			<Route path='/about' element={<About />} />
			<Route path='/contact' element={<Contact />} />
		</SlideRoutes>
	</BrowserRouter>
);

export default App;
