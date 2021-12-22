import React from 'react';
import Head from 'next/head';
import styles from './Page.module.css';

const Page = ({ children }) => {
	return (
		<>
			<Head>
				<title>Dignity International Agency</title>
				<meta name='description' content='Dignity International Agency' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={styles.main}>{children}</main>
			<footer
				style={{
					backgroundColor: 'whitesmoke',
					display: 'flex',
					justifyContent: 'center',
					padding: 8,
					borderTop: '1px solid rgba(0,0,0,.1)',
				}}>
				<a
					style={{ textAlign: 'center', letterSpacing: '3px', fontSize: 14 }}
					href='http://thinkcrypt.io'
					target='_blank'
					rel='noopener noreferrer'>
					Powered by thinkcrypt.io
				</a>
			</footer>
		</>
	);
};

export default Page;
