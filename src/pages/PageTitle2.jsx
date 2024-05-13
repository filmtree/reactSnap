import './styles.css';
import { Helmet } from 'react-helmet';

const Title = 'React Pages Title - helmet';
export default function App() {
	return (
		<div className='App'>
			<Helmet>
				<title>{Title}</title>
			</Helmet>
			<h2>Helmet Title</h2>
		</div>
	);
}
