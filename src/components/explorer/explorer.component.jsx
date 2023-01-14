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
  return (
    <ExplorerContainer>
      <Header>
        <p>EXPLORER</p>
        <Ellipsis />
      </Header>
      <Category>
        <ChevronBottom />
        <p>PORTFOLIO</p>
      </Category>

      <ExplorerItems>
        {explorerItems.map(({ name, path, Icon }) => (
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
  width: 150px;
  height: calc(100vh - 29px - 19px);
  background-color: #1e1f2b;
  box-sizing: border-box;
  border-right: 1px solid hsla(0, 0%, 0%, 0.2);
  position: relative;
  display: flex;
  flex-direction: column;
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
  color: hsla(100, 100%, 100%, 0.1);
  > svg {
    display: flex;
    margin-left: auto;
    margin-right: 8px;
    color: hsla(100, 100%, 100%, 0.4);
    padding: 2px 3px;
  }
  > svg:hover {
    background-color: hsla(100, 100%, 100%, 0.1);
    border-radius: 5px;
    cursor: pointer;
  }
`;

const Category = styled.div`
  display: flex;
  align-items: center;
  color: hsla(100, 100%, 100%, 0.4);
  font-size: 0.7em;
  font-weight: 700;
  cursor: pointer;
  > svg {
    color: hsla(100, 100%, 100%, 0.6);
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
    color: hsla(100, 100%, 100%, 0.6);
  }
  &.active,
  &:hover {
    background-color: hsla(100, 100%, 100%, 0.05);
  }
`;

const ExplorerFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 100%;
  color: hsla(100, 100%, 100%, 0.4);
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
    background-color: hsla(100, 100%, 100%, 0.05);
  }
`;
