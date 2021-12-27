import React from 'react';
import styles from './Fashion.module.css';
import { data } from './data';

const MartProducts = () => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<p>Our Products</p>
			</div>
			<div className={styles.items}>
				{data.map((item, i) => (
					<img src={item.image} alt={i} key={i} />
				))}
			</div>
		</div>
	);
};

export default MartProducts;
