import './styles.css';
import { useEffect } from 'react';
export default function App() {
	useEffect(() => {
		document.title = 'React Pages Title';
	}, []);
	return (
		<div className='App'>
			<h2>useEffect - Document.title</h2>
		</div>
	);
}
