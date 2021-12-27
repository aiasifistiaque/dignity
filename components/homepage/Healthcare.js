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
			<div className={styles.subText}>
				<h5>
					Our aim is to set the standard for a practical and affordable service
					to industries to manage occupational health ad safety within their
					specific working environments. Our Mission is to provide professional
					innovative occupational health and safety solution.
				</h5>
			</div>

			<div className={styles.members}>
				{data.map((item, i) => (
					<Member
						key={i}
						image={item.image}
						designation={item.position}
						education={item.department}>
						{item.name}
					</Member>
				))}
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

const data = [
	{
		id: 0,
		name: 'Dr. Shah Shahjada Pintu',
		position: 'Asst. Professor, Surgery Department',
		image: '/dignity/doctor/dr1.jpg',
		department: 'Rangpur Medical College & Hospital',
	},
	{
		id: 1,
		name: 'Dr. Abu Hanif Pavel',
		position: 'Asst. Professor, Surgery Department',
		image: '/dignity/doctor/dr2.jpg',
		department: 'Rangpur Medical College & Hospital',
	},
	{
		id: 2,
		name: 'Dr. Nure Aftab Siddique',
		position: 'Register, Surgery Department',
		image: '/dignity/doctor/dr3.jpg',
		department: 'Rangpur Medical College & Hospital',
	},
	{
		id: 3,
		name: 'Dr. S M Kamal',
		position: 'Asst. Register, Surgery Department',
		image: '/dignity/doctor/dr4.jpg',
		department: 'Rangpur Medical College & Hospital',
	},
];

export default Healthcare;
