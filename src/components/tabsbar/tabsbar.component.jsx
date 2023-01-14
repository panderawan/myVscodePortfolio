import {
  aboutIcon,
  contactIcon,
  githubIcon,
  homeIcon,
  projectsIcon
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
        <NavLink to={path} key={name}>
          <TabsbarItem>
            <TabsbarIcon>
              <Icon />
            </TabsbarIcon>
            <p>{name}</p>
          </TabsbarItem>
        </NavLink>
      ))}
    </TabsbarContainer>
  );
};

export default Tabsbar;

const TabsbarContainer = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
  a {
    width: 95px;
    text-decoration: none;
  }
`;

const TabsbarItem = styled.div`
  display: flex;
  align-items: center;

  justify-content: center;
  font-size: 0.7rem;
  color: hsla(100, 100%, 100%, 0.6);
  box-sizing: border-box;
  height: 23px;
  position: relative;
  ${NavLink}.active & {
    border-bottom: 0.5px solid hsl(40, 100%, 70%);
  }
`;
const TabsbarIcon = styled.div`
  margin-right: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
