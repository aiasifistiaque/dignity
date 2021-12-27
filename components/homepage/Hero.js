import React from 'react';
import styles from './styles/Hero.module.css';
import Link from 'next/link';

const Hero = () => {
	return (
		<div className={styles.hero}>
			<div className={styles.overlay}>
				<h1>DIGNITY INTERNATIONAL AGENCY</h1>
				<h3>Human Resource Consulatants &amp; Suppliers</h3>
				<h5>RL - 1534</h5>
				<Link href='/about'>
					<div className={styles.button}>
						<p>About Us</p>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Hero;
