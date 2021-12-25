import React, { useState } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = () => {
	const [dropdown, setDropdown] = useState(false);

	return (
		<>
			<Dropdown active={dropdown} off={() => setDropdown(false)} />

			<div className={styles.nav}>
				<div className={styles.brand}>
					<img src='/icon.png' alt='icon' />
					<div className={styles.brandName}>
						<h3>Dignity</h3>
						<h4>International Agency</h4>
					</div>
				</div>
				<div className={styles.toggle} onClick={() => setDropdown(true)}>
					<img src='/icons/toggle.png' alt='toggle' />
				</div>
				<div className={styles.navItems}>
					<Item href='/'>Home</Item>
					<Item href='/'>About Us</Item>
					<Item href='/'>Why hire us</Item>
				</div>
			</div>
		</>
	);
};

const Item = ({ href, children }) => {
	return (
		<Link href={href}>
			<div className={styles.item}>
				<p>{children}</p>
			</div>
		</Link>
	);
};

const Dropdown = ({ active, off }) => {
	const variants = {
		open: { opacity: 1 },
		closed: { opacity: 0 },
	};
	return (
		<motion.div
			animate={active ? 'open' : 'closed'}
			variants={variants}
			className={styles.dd}
			style={{ zIndex: active ? 99 : 0, display: active ? 'flex' : 'none' }}>
			<div onClick={off} className={styles.closeIcon}>
				<img src='/icons/close.png' alt='x' />
			</div>
			<div className={styles.ddItems}>
				<Item href='/'>Home</Item>
				<Item href='/'>About Us</Item>
				<Item href='/'>Why hire us</Item>
			</div>
		</motion.div>
	);
};

export default Header;
