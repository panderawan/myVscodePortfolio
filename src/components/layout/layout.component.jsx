import { Outlet } from 'react-router-dom';
import Explorer from '../explorer/explorer.component';
import Menu from '../menu/menu.component';
import Sidebar from './../sidebar/sidebar.component';
import Footer from './../footer/footer.component';
import Tabsbar from './../tabsbar/tabsbar.component';
import './layout.styles.scss';

const Layout = () => {
  return (
    <>
      <Menu />
      <div className='main'>
        <Sidebar />
        <Explorer />
        <div className='outlet'>
          <Tabsbar />
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
