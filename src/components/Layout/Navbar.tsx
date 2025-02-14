"use client";
import Link from 'next/link'
// -- styles
import styles from '@/styles/structure/navbar.module.scss';
// -- static information
import NavbarContent from '@/content/navbar.json'
import settings from '@/content/settings.json'
import { useState } from 'react';

const Navbar = () => {
	const [menuState, setMenuState] = useState<boolean>(false);
	const toggleMenu = () => {
		setMenuState(!menuState);
	};
	
	return (
		<nav id="portfolio-navbar" className={styles.container}>
			<ul className={`${styles.menu} pr-5`}>
				{/* Menu Header */}
				<li className={styles.menuHeader}>
					<Link className={styles.logo} href="/"  >
						{settings.name}
					</Link>
					<button onClick={toggleMenu} className={styles.mobileToggle} data-open={menuState}>
						<div>
							<span>holis</span>
							<span>quiubo</span>
						</div>
					</button>
				</li>
				{/* Menu Content */}
				<li className={styles.menuContent}>
					<ul>
						{
							NavbarContent.map(({ url, title, target }, index) => {
								return (
									<li key={index}>
										<Link href={url} target={target}>{title}</Link>
									</li>
								)
							})
						}
					</ul>
				</li>
			</ul>
			<span className={styles.menuBlackout}></span>
		</nav>
	)
}

export default Navbar