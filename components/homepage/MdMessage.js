import React from 'react';
import styles from './styles/Message.module.css';

const MdMessage = () => {
	return (
		<div className={styles.mdContainer}>
			<div className={styles.text}>
				<h2>Message from Managing Director</h2>
				<p>
					We are committed to instilling the values of integrity, ethics,
					values, and honesty in our shareholders and stockholders. We aim to
					provide a human resource service that benefits both employers and
					employees, as well as to be a dependable, honest, and committed
					corporate recruiter. We envision ourselves as a premier corporate
					manpower recruiter agency in Bangladesh. We build a bridge for the
					rest of the world, allowing for a borderless search and placement
					business model in which candidates can be sourced and placed where the
					perfect employee and employers can be discovered anywhere in the
					world.
				</p>
			</div>
			<div className={styles.image}>
				<img src='/home/md.png' alt='message' />
			</div>
		</div>
	);
};

export default MdMessage;
