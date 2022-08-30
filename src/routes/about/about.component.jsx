import {Link} from 'react-router-dom'
import './about.styles.scss';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
// import mailLogo from '../../assets/mail.gif'

export const About = () => {
	
	const {text} = useTypewriter({
		words: ['En Construction'],
	  })
	return (
		<>
			<div className='about-container'>

					<div className="aboutContent">	
						
						<div className="aboutName">
							PAGE
						</div>
						
						<div className="aboutActivity">
							<span cursor>
								{text}
							</span>
							<Cursor/>
						</div>
						
					</div>
			</div>
		</>
	);
};

export default About;
