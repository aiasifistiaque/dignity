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
			<footer>
				<a
					href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'>
					Powered by thinkcrypt.io
				</a>
			</footer>
		</>
	);
};

export default Page;
