import { Link } from 'react-router-dom';

const Tab = ({ icon, url, name }) => {
	return (
		<Link href={url}>
			<img src={icon} alt={name} />
		</Link>
	);
};

export default Tab;
