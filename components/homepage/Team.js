import React from 'react';
import styles from './styles/Team.module.css';

const Team = () => {
	return (
		<div className={styles.container}>
			<h2>Our Team</h2>

			<div className={styles.members}>
				{data.map((item, i) => (
					<Member
						key={i}
						image={item.image}
						designation={item.position}
						education={item.education}>
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
		name: 'Kamruzzaman Chowdhury Tuhin',
		position: 'Chairman',
		image: '/dignity/team/k1.jpg',
		education: '',
	},
	{
		id: 1,
		name: 'Shihab Chowdhury',
		position: 'Managing Director',
		image: '/dignity/team/s2.jpg',
		education: 'Engineer, BSc(IUB), MBA(DU)',
	},
	{
		id: 2,
		name: 'Sayeed Tanvir Alam',
		position: 'International Relationship Manager',
		image: '/dignity/team/t1.jpg',
		education: 'Engineer, BSc',
	},
	{
		id: 3,
		name: 'Muhammad Asif Hossain',
		position: 'Head, Information Technology',
		image: '/dignity/team/a1.jpg',
		education: 'Engineer, BSc',
	},
	{
		id: 4,
		name: 'Debashish Sarker',
		position: 'Head, Human Resource',
		image: '/dignity/team/d1.jpg',
		education: 'Engineer, MSc',
	},
	{
		id: 5,
		name: 'Sanjish Saha',
		position: 'Administrative Officer',
		image: '/dignity/team/s1.jpg',
		education: 'Engineer, BSc',
	},
	{
		id: 6,
		name: 'Soyab Mucktakim',
		position: 'Account Officer',
		image: '/dignity/team/Shoyeb.jpg',
		education: 'Master’s In Accounting',
	},
	{
		id: 7,
		name: 'Asif Istiaque',
		position: 'Senior Full Stack Developer, IT',
		image: '/dignity/team/a2.jpeg',
		education: 'Engineer, MSc',
	},
];

export default Team;
