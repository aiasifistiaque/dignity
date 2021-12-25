import React from 'react';
import styles from './styles/Mart.module.css';

const MartHome = () => {
	return (
		<div className={styles.section}>
			<h2>Our Affiliations</h2>
			<div className={styles.header}>
				<h3>Mart Fashion</h3>
			</div>
			<div className={styles.main}>
				<div className={styles.image}>
					<img src='/home/mart.png' alt='message' />
				</div>
				<div className={styles.text}>
					<div>
						<h2>MART FASHION</h2>
						<p>
							All over printing, readymade garments, export, import and order
							supply solution house
						</p>
					</div>

					<div className={styles.grayButton}>
						<p>See all products</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MartHome;
