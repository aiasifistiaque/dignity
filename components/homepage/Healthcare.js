import React from 'react';
import styles from './styles/Mart.module.css';

const Healthcare = () => {
	return (
		<div className={styles.healthcare}>
			<div className={styles.headerContainer}>
				<div className={styles.header}>
					<h3>Health Care Unit</h3>
				</div>
			</div>
			<div className={styles.members}>
				<Member
					image='/team.png'
					designation='Asst. Professor, Surgery Department'
					education='Rangpur Medical College & Hospital'>
					Dr. Shah Shahjada Pintu
				</Member>
				<Member
					image='/team.png'
					designation='Asst. Professor, Surgery Department'
					education='Rangpur Medical College & Hospital'>
					Dr. Shah Shahjada Pintu
				</Member>
				<Member
					image='/team.png'
					designation='Asst. Professor, Surgery Department'
					education='Rangpur Medical College & Hospital'>
					Dr. Shah Shahjada Pintu
				</Member>
				<Member
					image='/team.png'
					designation='Asst. Professor, Surgery Department'
					education='Rangpur Medical College & Hospital'>
					Dr. Shah Shahjada Pintu
				</Member>
			</div>
		</div>
	);
};

const Member = ({ image, children, designation, education }) => {
	return (
		<div className={styles.member}>
			<img src={image} alt={children} />
			<h6>{children}</h6>
			<p style={{ color: '#105652' }}>{designation}</p>
			<p>{education}</p>
		</div>
	);
};

export default Healthcare;
