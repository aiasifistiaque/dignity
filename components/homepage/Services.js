import React from 'react';
import styles from './styles/Service.module.css';

const Services = () => {
	return (
		<div className={styles.container}>
			<h2>Our Services</h2>
			<h5>
				Our vision is to be a leader in the placement of Bangladesh Manpower
				globally.
			</h5>
			<div className={styles.services}>
				<Service src='/services/1.png'>Mart Fashion</Service>
				<Service src='/services/2.png'>
					Human resource Consultants {`&`} Suppliers
				</Service>
				<Service src='/services/3.png'>Dignity IT Solution</Service>
				<Service src='/services/4.png'>Health Care Unit</Service>
				<Service src='/services/5.png'>Neer - A Volunteer Organization</Service>
				<Service src='/services/6.png'>Dignity Export Import House</Service>
			</div>
		</div>
	);
};

const Service = ({ children, src }) => {
	return (
		<div className={styles.service}>
			<img src={src} alt='service' />
			<h6>{children}</h6>
		</div>
	);
};

export default Services;
