import {
  aboutIcon,
  contactIcon,
  githubIcon,
  homeIcon,
  projectsIcon,
} from './../icons/icons';

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const tabsbarItems = [
  {
    name: 'home.jsx',
    path: '/',
    Icon: homeIcon,
  },
  {
    name: 'about.html',
    path: '/about',
    Icon: aboutIcon,
  },
  {
    name: 'contact.css',
    path: '/contact',
    Icon: contactIcon,
  },
  {
    name: 'projects.js',
    path: '/projects',
    Icon: projectsIcon,
  },
  {
    name: 'github.md',
    path: '/github',
    Icon: githubIcon,
  },
];

const Tabsbar = () => {
  return (
    <TabsbarContainer>
      {tabsbarItems.map(({ name, path, Icon }) => (
        <StyledNavLink to={path} key={name}>
          <TabsbarIcon>
            <Icon />
            <p>{name}</p>
          </TabsbarIcon>
        </StyledNavLink>
      ))}
    </TabsbarContainer>
  );
};

export default Tabsbar;

const TabsbarContainer = styled.div`
  display: flex;
  height: 25px;
  width: 100%;
  align-items: center;
  overflow-y: hidden;
  position: fixed;
  overflow-y: scroll;
  background-color: #282a3a;
  z-index: 1;
`;

const StyledNavLink = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  color: hsla(100, 100%, 100%, 0.6);
  box-sizing: border-box;
  height: 23px;
  min-width: 90px;
  text-decoration: none;
  &.active {
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 5%;
      background: hsl(40, 100%, 70%);
    }
  }
`;

const TabsbarIcon = styled.div`
  margin-right: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  & p {
    margin-left: 3px;
  }
`;
