import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './routes/homepage/homepage';
import About from './routes/about/about';
import Layout from './components/layout/layout.component';
import Contactme from './routes/contactme/contactme.component';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Homepage />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contactme />} />
			</Route>
		</Routes>
	);
}

export default App;

/* <div className='container'>
	<div className='file'>FILE</div>
	<div className='sidebar'>SIDEBAR</div>
	<div className='tabs'>TABS</div>
	<div className='explorer'>EXPLORER</div>
	<div className='content'>CONTENT</div>
	<div className='footer'>FOOTER</div>
</div>; */
