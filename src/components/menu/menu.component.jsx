import VscLogo from '../../assets/vsclogo.svg';
import { Minimize, Restore, Close } from '../icons/icons';
import styled from 'styled-components';

const Menu = () => {
  const menuItems = [
    'File',
    'Edit',
    'Selection',
    'View',
    'Go',
    'Run',
    'Terminal',
    'Help',
  ];

  return (
    <MenuContainer>
      <MenuLinks>
        <img src={VscLogo} alt='' />
        {menuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </MenuLinks>
      <Title>Ruddy Autem - Visual Studio Code</Title>
      <Icons>
        <Minimize />
        <Restore />
        <Close />
      </Icons>
    </MenuContainer>
  );
};

export default Menu;

const MenuContainer = styled.div`
  box-sizing: border-box;
  border-bottom: 1px solid var(--pf-lightdark);
  display: flex;
  background-color: #1e1f2b;
  color: var(--pf-lightgray);
  font-family: 'Monaco', sans-serif;
  height: 30px;
`;

const MenuLinks = styled.nav`
  display: flex;
  align-items: center;
  flex: 1;
  margin-right: auto;
  list-style: none;

  > :first-child {
    display: flex;
    width: 1.2rem;
    height: 1rem;
    cursor: pointer;
    padding-left: 7px;
    padding-right: 5px;
  }
  > :first-child:hover {
    background-color: transparent;
    cursor: default;
  }

  * {
    font-size: 0.75em;
    padding: 2px 7.5px;
  }

  *:hover {
    cursor: pointer;
    background-color: var(--pf-darkgray);
    border-radius: 5px;
  }
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

const Title = styled.p`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  font-size: 0.65rem;
  color: var(--pf-lightgray);
  margin: auto;
  @media screen and (max-width: 992px) {
    flex: 4;
  }
`;

const Icons = styled.div`
  color: var(--pf-lightgray);
  display: flex;
  flex: 1;
  align-items: center;
  margin-left: auto;
  * {
    padding: 6px 13px;
    height: 15px;
    width: 16px;
    cursor: pointer;
  }
  > :first-child {
    margin-left: auto;
  }

  > :hover {
    background-color: var(--pf-darkgray);
  }
  > :last-child:hover {
    background-color: red;
    color: white;
  }
  @media screen and (max-width: 992px) {
    display: none;
  }
`;
