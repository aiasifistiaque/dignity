import React from 'react';
import styles from './styles/Message.module.css';

const ChairmanMessage = () => {
	return (
		<div className={styles.chairmanContainer}>
			<div className={styles.image}>
				<img src='/home/chairman.png' alt='message' />
			</div>
			<div className={styles.text}>
				<h2>Message from Chairman</h2>
				<p>
					Employees are by far the most valued asset of our organzation.
					{` '`}Dignity International Agency{`' `} Company dedicated in grooming
					this asset by providing effective manpower solutions to international
					businesses. Our team of consultants and human resource specialists put
					their years of experience and skill to work on our clients{`'`}{' '}
					recruiting projects. We are quite proud of the fact that Dignity
					International Agency{`'`}s services have been widely acknowledged and
					appreciated by its clients. This feedback motivates us to do even
					better in our area of expertise. We ensure that our candidates,
					whether they have previous abroad employment experience or embarking
					on their first overseas assignment, are available at the most
					competitive pay scales and are equipped in every way to achieve
					optimum efficiency. Even our constant expansion of our workforce and
					client base cannot sway our dedication to you or force us to
					compromise on quality. We are confident in our ability to meet every
					area of your labor requirements to your complete satisfaction. We
					propose to form a strategic alliance with your firm in order to
					deliver the most efficient, cost-effective, and ethical manpower from
					Bangladesh. We can be relied on to hire technical and non-technical
					personnel.
				</p>
			</div>
		</div>
	);
};

export default ChairmanMessage;
