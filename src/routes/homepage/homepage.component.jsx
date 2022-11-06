
import { useNavigate } from 'react-router-dom';
import './homepage.styles.scss'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { useEffect } from 'react';

export const Homepage = () => {
	
	const {text} = useTypewriter({
		words: ['Développeur Web'],
	})
	const navigate = useNavigate();
	return (
		<>
			<div className='homepage-container'>

					<div className="content">	
						
						<div className="myName">
							RUDDY AUTEM
						</div>
						
						<div className="activity">
							<span cursor>
								{text}
							</span>
							<Cursor/>
						</div>
						<div className="buttons">
							<button onClick={() => window.location.replace("https://google.com")}>
								GITHUB
							</button>
							<button onClick={() => window.location.replace("https://www.linkedin.com/in/ruddyautem/")}>
							{/* <img src={mailLogo}/> */}
							LINKEDIN
							</button>
						<button onClick={() => navigate('/contact')}>
							{/* <img src={mailLogo}/> */}
								CONTACT
							</button>

						</div>
					</div>
			</div>
		</>
	);
};

export default Homepage;
