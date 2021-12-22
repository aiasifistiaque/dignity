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
				<Service src='/service.png'>Mart Fashion</Service>
				<Service src='/service.png'>
					Human resource Consultants {`&`} Suppliers
				</Service>
				<Service src='/service.png'>Dignity IT Solution</Service>
				<Service src='/service.png'>Health Care Unit</Service>
				<Service src='/service.png'>Neer - A Volunteer Organization</Service>
				<Service src='/service.png'>Dignity Export Import House</Service>
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
