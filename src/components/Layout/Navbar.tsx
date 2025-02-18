"use client";
import Link from 'next/link'
// -- styles
import styles from '@/styles/structure/navbar.module.scss';
// -- static information
import NavbarContent from '@/content/navbar.json'
import settings from '@/content/settings.json'
import React, { useState } from 'react';
/**
 * Functional component to render the Navbar
 * @returns {TSX.Element} Navbar
 */
const Navbar = () => {
	const [menuState, setMenuState] = useState<boolean>(false);
	const toggleMenu = () => {setMenuState(!menuState)};
	/**
	 * Function to handle smooth scrolling when clicking on a link
	 * @param {React.MouseEvent<HTMLAnchorElement>} e 
	 * @param {string} href
	 */
	const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
		// If the link is an anchor link (e.g., "#about-me")
		if (href.startsWith("#")) {
			e.preventDefault(); // Prevent the default jump
			const section = document.querySelector(href);
			if (section) {
				section.scrollIntoView({ behavior: "smooth" });
			}
			setMenuState(false); // Close the mobile menu if needed
		}
	};
	
	return (
		<nav id="portfolio-navbar" className={styles.container}>
			<ul className={`${styles.menu} pr-5`}>
				{/* Menu Header */}
				<li className={styles.menuHeader}>
					<Link 
						className={styles.logo} 
						target='_self' 
						href="#main-hero" 
						onClick={(e) => handleSmoothScroll(e, "#main-hero")}  
					>
						{settings.name}
					</Link>
					<button onClick={toggleMenu} className={styles.mobileToggle} data-open={menuState}>
						<div>
							<span></span>
							<span></span>
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
										<Link 
											href={url} 
											target={target}
											onClick={(e) => handleSmoothScroll(e, url)}
										>
											{title}
										</Link>
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