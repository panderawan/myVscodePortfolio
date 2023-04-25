import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
  FileLogo,
  GithubIcon,
  AccountIcon,
  MailIcon,
  ProfileLogo,
  SettingsLogo,
} from '../icons/icons';

const sidebarItems = [
  {
    Icon: AccountIcon,
    path: '/',
  },
  {
    Icon: FileLogo,
    path: '/about',
  },
  {
    Icon: MailIcon,
    path: '/contact',
  },
  {
    Icon: FileLogo,
    path: '/projects',
  },
  {
    Icon: GithubIcon,
    path: '/github',
  },
  {
    Icon: ProfileLogo,
  },
  {
    Icon: SettingsLogo,
  },
];
const Sidebar = () => {
  const firstFiveItems = sidebarItems.slice(0, 5);
  const lastTwoItems = sidebarItems.slice(5);
  return (
    <SideTabsContainer>
      <Tabs>
        {firstFiveItems.map(({ Icon, path }) => (
          <NavLink to={path} key={path}>
            <Icon className='icon' />
          </NavLink>
        ))}
      </Tabs>
      <LowerTabs>
        {lastTwoItems.map(({ Icon }, index) => (
          <Icon key={index} className='icon' />
        ))}
      </LowerTabs>
    </SideTabsContainer>
  );
};

export default Sidebar;

const SideTabsContainer = styled.div`
  box-sizing: border-box;
  border-right: 1px solid var(--pf-lightdark);
  display: flex;
  background-color: #161821;
  height: calc(100vh - 30px - 17px);
  width: 40px;
  flex-direction: column;
  align-items: center;
  margin-top: -1px;
  cursor: pointer;
`;

const Tabs = styled.div`
  > .active {
    > .icon {
      fill: var(--pf-almostwhite);
      border-left: 3px solid var(--pf-almostwhite);
      padding-left: 7px;
    }
  }
  .icon {
    padding: 10px;
    fill: hsla(100, 100%, 100%, 0.4);
  }
  .icon:hover {
    fill: var(--pf-almostwhite);
  }
`;

const LowerTabs = styled(Tabs)`
  display: flex;
  flex-direction: column;
  margin-top: auto;
`;
