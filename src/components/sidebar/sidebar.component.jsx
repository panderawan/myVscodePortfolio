import { Outlet, Link } from 'react-router-dom'
import './sidebar.styles.scss'
import {FileLogo, GithubIcon,AccountIcon,MailIcon } from '../icons/icons';

const sidebarItems = [
    {
        Icon: AccountIcon,
        path:'/1'
    },
    {
        Icon: GithubIcon,
        path:'/2'
    },
    {
        Icon: FileLogo,
        path:'/3'
    },
    {
        Icon: MailIcon,
        path:'/4'
    },
    {
        Icon: FileLogo,
        path:'/5'
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
        <Outlet/>
        </>
	);
};

export default Sidebar;
