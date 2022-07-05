import {Link} from 'react-router-dom'
import './homepage.styles.scss';
import {useTypewriter, Cursor} from 'react-simple-typewriter'

export const Homepage = () => {
	
	const {text} = useTypewriter({
		words: ['Développeur Web'],
	  })
	return (
		<>
			<div className='homepage-container'>

					<div className="content">	
						
						<div className="name">
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
							<a href="https://www.github.com/Panderawan">Mon Github</a>
						</button>

						<button>
							<Link to="/contact">Me Contacter</Link>
							{/* <a href="/contact">Me Contacter</a> */}
						</button>
</div>
					</div>
				</div>
		</>
	);
};

export default Homepage;
