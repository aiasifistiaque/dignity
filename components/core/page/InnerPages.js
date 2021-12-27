import React from 'react';
import styles from './Page.module.css';

const InnerPages = ({ page, title, children }) => {
	const bg =
		page == 'about'
			? styles.about
			: page == 'whu'
			? styles.whu
			: page == 'mart'
			? styles.mart
			: styles.default;

	return (
		<div className={styles.inner}>
			<div className={`${styles.cover} ${bg}`}>
				<div className={styles.detail}>
					<h2>{title}</h2>
				</div>
			</div>
			<div className={styles.children}>{children}</div>
		</div>
	);
};

export default InnerPages;
