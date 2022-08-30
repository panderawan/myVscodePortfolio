import { NavLink } from 'react-router-dom';
import './explorer.styles.scss';
import {
	Ellipsis,
	ChevronRight,
	ChevronBottom,
	homeIcon,
	aboutIcon,
	contactIcon,
	projectsIcon,
	githubIcon
} from './../icons/icons';

const explorerItems = [
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

const Explorer = () => {
	return (
		<div className='explorer-container'>
			<div className='header'>
				<p>EXPLORER</p>
				<Ellipsis className='ellipsis' />
			</div>
			<div className='category'>
				<ChevronBottom className='chevron' />
				<p>PORTFOLIO</p>
			</div>

			<nav className='explorer-items'>
				{explorerItems.map(({ name, path, Icon }) => (
					<NavLink to={path} key={name}>
						<div className='item-container'>
							<Icon className='icon' />
							<p className='itemName'>{name}</p>
						</div>
					</NavLink>
				))}
			</nav>
			<div className='explorer-footer'>
				<div className='outline'>
					<ChevronRight className='chevron' />
					<p>OUTLINE</p>
				</div>
				<div className='timeline'>
					<ChevronRight className='chevron' />
					<p>TIMELINE</p>
				</div>
			</div>
		</div>
	);
};

export default Explorer;
