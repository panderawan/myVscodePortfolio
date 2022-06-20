import './footer.styles.scss';
import { GitRepo, CrossGit, WarningGit, Prettier, Bell } from '../icons/icons';

const Footer = () => {
	return (
		<>
			<footer className='footer-container'>
				<div className='footer-links'>
					<nav className="footerLeft">
						<li className="gitMain">
							<GitRepo />
							main*
						</li>
						<li className="crossWarning">
							<CrossGit />
							0
							<WarningGit/>
							0
						</li>
					</nav>				
					<nav className="footerRight">
						<li className="prettierBelt">

						<Prettier />
						Prettier
						</li>

						<li className="bell">
						<Bell/>
						</li>
					</nav>
				</div>
			</footer>
		</>
	);
};

export default Footer;
