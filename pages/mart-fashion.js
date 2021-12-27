import React from 'react';
import Page from '../components/core/page/Page';
import InnerPages from '../components/core/page/InnerPages';
import MartProducts from '../components/Mart/MartProducts';

const MartFashion = () => {
	return (
		<Page>
			<InnerPages page='mart' title='Mart Fashion'>
				<MartProducts />
			</InnerPages>
		</Page>
	);
};

export default MartFashion;
