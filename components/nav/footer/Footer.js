import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={styles.container}>
			<div>
				<h5>Contact Us</h5>
				<div className={styles.offices}>
					<div className={styles.office}>
						<h6>Dhaka Office</h6>
						<p>372/1, East Rampura, Dhaka-1219, Bangladesh</p>
						<p>Cell: +880 1789 789 222, +880 1737 837 314</p>
						<p>Phone: +8802-55132481</p>
						<p>
							Email: dignityinternationalagency@gmail.com,
							<br />
							shihab.dignity@gmail.com
						</p>
					</div>
					<div className={styles.office}>
						<h6>Rangpur Office:</h6>
						<p>Mahigonj Bazar, Mahigonj, Rangpur</p>
						<p>Cell: +880 1786 507 268, +880 1786 507 168</p>
						<p>PPhone: +880521-63294</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
