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
  display: flex;
  background-color: #282a3a;
  overflow: hidden;
`;

const StyledOutlet = styled.div`
  overflow-y: auto;
  height: calc(100vh - 30px - 18px);
  width: 100%;
  &::-webkit-scrollbar {
    width: 0.4em;
    background-color: #f5f5f5;
  }
`;
