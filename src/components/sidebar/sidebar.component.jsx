import {NavLink} from 'react-router-dom'
import './sidebar.styles.scss'
import {FileLogo, GithubIcon,AccountIcon,MailIcon, ProfileLogo, SettingsLogo } from '../icons/icons';

// const pathname = window.location.pathname

const sidebarItems = [
    {
        Icon: AccountIcon,
        path: '/'
    },
    {
        Icon: FileLogo,
        path: '/about'
    },
    {
        Icon: MailIcon,
        path: '/contact'
    },
    {
        Icon: FileLogo,
        path: '/projects'
    },
    {
        Icon: GithubIcon,
        path: '/github'
    },
    {
        Icon: ProfileLogo,
        path: '6'
    },
    {
        Icon: SettingsLogo,
        path:'7'
    }
]
const Sidebar = () => {
    return (
        <>
                <div className='sideTabs'>
                {sidebarItems.map(({ Icon, path }) => (<NavLink to={path} key={path}>
                    <Icon className="icon"/>
                    </NavLink>))}
			    </div>
        </>
	);
};
export default Sidebar;
