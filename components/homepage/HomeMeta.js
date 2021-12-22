import React from 'react';
import Head from 'next/head';

const HomeMeta = () => {
	return (
		<Head>
			<title>Dignity International Agency</title>
			<meta name='description' content='arewa books' />
			<link rel='icon' href='/favicon.ico' />
			<meta
				name='viewport'
				content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
			/>
			<meta name='description' content={about}></meta>
			<meta
				property='og:title'
				content='Dignity International Agency'
				key='ogtitle'
			/>
			<meta property='og:description' content={about} key='ogdesc' />
			<meta
				property='og:url'
				content={`https://dignity.vercel.app/`}
				key='ogurl'
			/>
			<meta property='og:image' content={'/seo.jpg'} key='ogimage' />
			<meta
				property='og:site_name'
				content={'Dignity International Agency'}
				key='ogsitename'
			/>
		</Head>
	);
};

const about = `"Dignity International Agency" One of the leading manpower recruiting agencies in Bangladesh, supplying manpower to the entire Middle East, Asia, Europe region. We are providing the best recruitment options and elite employment service in Bangladesh since 2015. The company was established with the ultimate vision of serving Bangladesh with the most reliable overseas recruitment services and it is now top list manpower recruiting agencies in 
Bangladesh. We have set great records of recruiting several thousands of workers in the Middle East with the best employment options and manpower benefits.`;

export default HomeMeta;
