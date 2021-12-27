import React from 'react';
import Head from 'next/head';
import styles from './Page.module.css';
import Header from '../../nav/header/Header';
import Footer from '../../nav/footer/Footer';

const Page = ({ children }) => {
	return (
		<>
			<Head>
				<title>Dignity International Agency</title>
				<meta name='description' content='Dignity International Agency' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<main className={styles.main}>{children}</main>
			<Footer />
			<footer
				style={{
					backgroundColor: '#f1f1f1',
					display: 'flex',
					justifyContent: 'center',
					padding: '8px 24px',
				}}>
				<a
					style={{
						textAlign: 'center',
						letterSpacing: '2px',
						fontSize: 12,
						fontWeight: 500,
						color: 'rgba(0,0,0,.6)',
					}}
					href='http://thinkcrypt.io'
					target='_blank'
					rel='noopener noreferrer'>
					&copy;2022 Dignity International Agency | All Rights Reserved |
					Powered by thinkcrypt.io
				</a>
			</footer>
		</>
	);
};

export default Page;
