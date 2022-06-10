import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home';
import Layout from './components/layout/layout.component';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
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
