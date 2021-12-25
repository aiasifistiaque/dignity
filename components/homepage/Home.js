import React from 'react';
import Page from '../core/page/Page';
import Hero from './Hero';
import ChairmanMessage from './ChairmanMessage';
import styles from './styles/Home.module.css';
import MdMessage from './MdMessage';
import HomeMeta from './HomeMeta';
import Services from './Services';
import Team from './Team';
import MartHome from './MartHome';
import Healthcare from './Healthcare';

const Home = () => {
	return (
		<Page>
			<HomeMeta />
			<div className={styles.container}>
				<Hero />
				<ChairmanMessage />
				<Services />
				<MdMessage />
				<Team />
				<MartHome />
				<Healthcare />
			</div>
		</Page>
	);
};

export default Home;
