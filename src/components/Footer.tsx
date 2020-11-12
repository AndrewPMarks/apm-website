import React from 'react';
//import PrideFlag from '../flag.png';

export const Footer = () => {
	return (
		<div className='footer'>
			&copy; Andrew Marks {new Date().getFullYear()}{' '}
			{/* <img src={PrideFlag} alt='Pride Flag' className='flag' /> */}
		</div>
	);
};
