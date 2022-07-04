import './margin.styles.scss';

const Margin = () => {
	const arr = Array.from(Array(78).keys());
	return (
		<div className='margin'>
			{arr.map((el) => (
				<div className='margin-line'>
					<div>{el}</div>
				</div>
			))}
		</div>
	);
};

export default Margin;
