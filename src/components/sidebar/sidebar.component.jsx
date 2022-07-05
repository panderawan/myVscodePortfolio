import {Link } from 'react-router-dom'
import './sidebar.styles.scss'
import {FileLogo, GithubIcon,AccountIcon,MailIcon, ProfileLogo, SettingsLogo } from '../icons/icons';

const sidebarItems = [
    {
        Icon: AccountIcon,
        path: '/'
    },
    {
        Icon: GithubIcon,
        path: '/2'
    },
    {
        Icon: FileLogo,
        path: '/3'
    },
    {
        Icon: MailIcon,
        path: '/contact'
    },
    {
        Icon: FileLogo,
        path: '/5'
    },
    {
        Icon: ProfileLogo,
        path:'/6'
    },
    {
        Icon: SettingsLogo,
        path:'/7'
    }
]
const Sidebar = () => {
    return (
        <>
                <div className='tabs'>
                {sidebarItems.map(({ Icon, path }) => (<Link to={path} key={path}>
                    <div className="iconContainer">
                    <Icon className="icon"/>
                        </div>


                    </Link>))}
			    </div>
        </>
	);
};
export default Sidebar;
