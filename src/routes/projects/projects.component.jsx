import {Link} from 'react-router-dom'
import './projects.styles.scss';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
// import mailLogo from '../../assets/mail.gif'

export const Projects = () => {
	
	const {text} = useTypewriter({
		words: ['En Construction'],
	  })
	return (
		<>
			<div className='projects-container'>

					<div className="projects-content">	
						
						<div className="projectsName">
							PAGE
						</div>
						
						<div className="projectsActivity">
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

export default Projects;
