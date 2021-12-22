import React from 'react';
import styles from './styles/Hero.module.css';

const Hero = () => {
	return (
		<div className={styles.hero}>
			<div className={styles.overlay}>
				<h1>DIGNITY INTERNATIONAL AGENCY</h1>
				<h3>Human Resource Consulatants &amp; Suppliers</h3>
				<h5>RL - 1534</h5>
				<div className={styles.button}>
					<p>About Us</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
