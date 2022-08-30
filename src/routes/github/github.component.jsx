import {Link} from 'react-router-dom'
import './github.styles.scss';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
// import mailLogo from '../../assets/mail.gif'

export const Github = () => {
	
	const {text} = useTypewriter({
		words: ['En Construction'],
	  })
	return (
		<>
			<div className='github-container'>

					<div className="githubContent">	
						
						<div className="githubName">
							PAGE
						</div>
						
						<div className="githubActivity">
							<span cursor>
								{text}
							</span>
							<Cursor/>
						</div>
						{/* <div className="buttons">
							<button>
								<a href="https://www.github.com/Panderawan">GITHUB</a>
							</button>
							<button>
							<a href="https://www.linkedin.com/in/ruddyautem/">LINKEDIN</a>
							</button>
						<button>
								<Link to="/contact">CONTACT</Link>
							</button>

						</div> */}
					</div>
			</div>
		</>
	);
};

export default Github;
