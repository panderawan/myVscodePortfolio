import Homepage from './routes/homepage/homepage.component';
import About from './routes/about/about.component';
import Layout from './components/layout/layout.component';
import Contactme from './routes/contactme/contactme.component';
import Projects from './routes/projects/projects.component';
import Github from './routes/github/github.component';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path='/' element={<Homepage />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contactme />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/github' element={<Github />} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;