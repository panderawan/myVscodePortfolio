import { Outlet } from 'react-router-dom';
import Explorer from '../explorer/explorer.component';
import Menu from '../menu/menu.component';
import Sidebar from './../sidebar/sidebar.component';
import Footer from './../footer/footer.component';
import Tabsbar from './../tabsbar/tabsbar.component';
import styled from 'styled-components';

const Layout = () => {
  return (
    <>
      <Menu />
      <StyledMain>
        <Sidebar />
        <Explorer />
        <StyledOutlet>
          <Tabsbar />
          <Outlet />
        </StyledOutlet>
      </StyledMain>
      <Footer />
    </>
  );
};

export default Layout;

const StyledMain = styled.div`
  width: 100%;
  display: flex;
  background-color: #282a3a;
`;

const StyledOutlet = styled.div`
  flex: 1;
  overflow: hidden;
`;
