import './contact.styles.scss';

const contactItems = [
	{
		social: 'email',
		link: 'ruddy.autem@gmail.com',
		href: 'mailto:ruddy.autem@gmail.com'
	},
	{
		social: 'linkedIn',
		link: 'ruddyautem',
		href: 'https://www.linkedin.com/in/ruddyautem/'
	},
	{
		social: 'github',
		link: 'panderawan',
		href: 'https://github.com/panderawan/'
	}
];

const Contact = () => {
	return (
		<div className='contacts-container'>
			<p className='line'>
				<span className='social'>.social </span> &#123;
			</p>
			{contactItems.map((item, index) => (
				<p className='line' key={index}>
					&nbsp;&nbsp;&nbsp;&nbsp;
					{item.social} :{''}
					<a href={item.href} rel='noopener'>
						{item.link}
					</a>
					;
				</p>
			))}
			<p className='line'>&#125;</p>
		</div>
	);
};

export default Contact;
