import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './routes/homepage/homepage.component';
import About from './routes/about/about.component';
import Layout from './components/layout/layout.component';
import Contactme from './routes/contactme/contactme.component';
import Projects from './routes/projects/projects.component';
import Github from './routes/github/github.component';

function App() {
	return (
		<BrowserRouter>
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Homepage />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contactme />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/github' element={<Github />} />
			</Route>
		</Routes>
		</BrowserRouter>
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
