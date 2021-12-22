import React from 'react';
import Page from '../core/page/Page';
import Hero from './Hero';
import ChairmanMessage from './ChairmanMessage';
import styles from './styles/Home.module.css';
import MdMessage from './MdMessage';
import HomeMeta from './HomeMeta';

const Home = () => {
	return (
		<Page>
			<HomeMeta />
			<div className={styles.container}>
				<Hero />
				<ChairmanMessage />
				<MdMessage />
			</div>
		</Page>
	);
};

export default Home;
