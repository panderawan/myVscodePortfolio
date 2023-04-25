import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
  Ellipsis,
  ChevronRight,
  ChevronBottom,
  homeIcon,
  aboutIcon,
  contactIcon,
  projectsIcon,
  githubIcon,
} from './../icons/icons';

const explorerItems = [
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

const Explorer = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <ExplorerContainer>
      <Header>
        <p>EXPLORER</p>
        <Ellipsis />
      </Header>
      <Category onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <ChevronBottom /> : <ChevronRight />}
        <p>PORTFOLIO</p>
      </Category>

      <ExplorerItems>
        {isOpen &&
          explorerItems.map(({ name, path, Icon }) => (
            <StyledNavLink to={path} key={name}>
              <Icon />
              <p>{name}</p>
            </StyledNavLink>
          ))}
      </ExplorerItems>
      <ExplorerFooter>
        <FooterLink>
          <ChevronRight />
          <p>OUTLINE</p>
        </FooterLink>
        <FooterLink>
          <ChevronRight />
          <p>TIMELINE</p>
        </FooterLink>
      </ExplorerFooter>
    </ExplorerContainer>
  );
};

export default Explorer;

const ExplorerContainer = styled.div`
  width: 250px;
  height: calc(100vh - 29px - 19px);
  background-color: #1e1f2b;
  box-sizing: border-box;
  border-right: 1px solid var(--pf-lightdark);
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: default;
  user-select: none;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
  height: 25px;
  font-size: 0.7em;
  font-weight: normal;
  color: var(--pf-darkgray);
  > svg {
    display: flex;
    margin-left: auto;
    margin-right: 8px;
    color: var(--pf-lightgray);
    padding: 2px 3px;
  }
  > svg:hover {
    background-color: var(--pf-darkgray);
    border-radius: 5px;
    cursor: pointer;
  }
`;

const Category = styled.div`
  display: flex;
  align-items: center;
  color: var(--pf-lightgray);
  font-size: 0.7em;
  font-weight: 700;
  cursor: pointer;
  > svg {
    color: var(--pf-lightgray);
  }
`;

const ExplorerItems = styled.div``;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  font-size: 0.7rem;
  height: 20px;
  > svg {
    display: flex;
    margin-left: 15px;
  }
  > p {
    display: flex;
    text-decoration: none;
    margin-left: 5px;
    color: var(--pf-lightwhite);
  }
  &.active,
  &:hover {
    background-color: var(--pf-hovergray);
  }
`;

const ExplorerFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 100%;
  color: var(--pf-lightwhite);
  font-size: 0.6em;
  font-weight: 700;
  flex-direction: column;
  flex-grow: 1;
`;
const FooterLink = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  line-height: 0.5;
  > svg {
    display: flex;
    align-items: center;
  }
  &:hover {
    background-color: var(--pf-hovergray);
  }
`;
