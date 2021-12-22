import React from 'react';
import styles from './styles/Team.module.css';

const Team = () => {
	return (
		<div className={styles.container}>
			<h2>Our Team</h2>

			<div className={styles.members}>
				<Member
					image='/team.png'
					designation='Head, Information Technology'
					education='Engineer, BSc'>
					Sayed Tanvir Alam
				</Member>
				<Member
					image='/team.png'
					designation='Head, Information Technology'
					education='Engineer, BSc'>
					Sayed Tanvir Alam
				</Member>
				<Member
					image='/team.png'
					designation='Head, Information Technology'
					education='Engineer, BSc'>
					Sayed Tanvir Alam
				</Member>
				<Member
					image='/team.png'
					designation='Head, Information Technology'
					education='Engineer, BSc'>
					Sayed Tanvir Alam
				</Member>
				<Member
					image='/team.png'
					designation='Head, Information Technology'
					education='Engineer, BSc'>
					Sayed Tanvir Alam
				</Member>
				<Member
					image='/team.png'
					designation='Head, Information Technology'
					education='Engineer, BSc'>
					Sayed Tanvir Alam
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

export default Team;
