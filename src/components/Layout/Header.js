import React from 'react';
import classes from './Headers.module.css';
import mealsImage from '../Layout/assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
	return (
		<React.Fragment>
			<header className={classes.header}>
				<h1>ReactMeals</h1>
				<HeaderCartButton onClick={props.onShowCart} />
			</header>
			<div className={classes['main-image']}>
				<img src={mealsImage} alt='A table full of delicious food!' />
			</div>
		</React.Fragment>
	);
};

export default Header;
