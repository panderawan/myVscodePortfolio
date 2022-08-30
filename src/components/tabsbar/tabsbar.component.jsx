import { NavLink } from 'react-router-dom';
import './tabsbar.styles.scss';
import {
	homeIcon,
	aboutIcon,
	contactIcon,
	projectsIcon,
	githubIcon
} from './../icons/icons';

const tabsbarItems = [
	{
		name: 'home.jsx',
		path: '/',
		Icon: homeIcon
	},
	{
		name: 'about.html',
		path: '/about',
		Icon: aboutIcon
	},
	{
		name: 'contact.css',
		path: '/contact',
		Icon: contactIcon
	},
	{
		name: 'projects.js',
		path: '/projects',
		Icon: projectsIcon
	},
	{
		name: 'github.md',
		path: '/github',
		Icon: githubIcon
	}
];

const Tabsbar = () => {
	return (
		<div className='tabsbar-container'>
			{tabsbarItems.map(({ name, path, Icon }) => (
				<NavLink to={path} key={name}>
					<div className='tabsbar-item-container'>
						<Icon className='tabsbar-icon' />
						<p className='tabsbar-name'>{name}</p>
					</div>
				</NavLink>
			))}
		</div>
	);
};

export default Tabsbar;
