import { Link } from 'react-router-dom'
import './homepage.styles.scss'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

export const Homepage = () => {
	
	const {text} = useTypewriter({
		words: ['Développeur Web'],
	  })
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
							<button>
								<a href="https://www.github.com/Panderawan">GITHUB</a>
							</button>
							<button>
							{/* <img src={mailLogo}/> */}
							<a href="https://www.linkedin.com/in/ruddyautem/">LINKEDIN</a>
							</button>
						<button>
							{/* <img src={mailLogo}/> */}
								<Link to="/contact">CONTACT</Link>
							</button>

						</div>
					</div>
			</div>
		</>
	);
};

export default Homepage;
