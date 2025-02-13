// -- static information
import FooterContent from '@/content/footer.json'
// -- styles
import styles from '@/styles/structure/footer.module.scss';
import Link from 'next/link';
// -- components
import Container from '@/components/Structure/container';
import { ReactNode } from 'react';
// -- fonts
import { Fira_Code } from 'next/font/google';
const FIRA_CODE = Fira_Code({
	weight: "600",
});
/**
 * Footer component
 * @returns 
 */
const Footer = () => {
	/**
	 * Function to render social icons depending on the social type
	 * @param {string} social
	 * @returns {ReactNode} SVG component
	 */
	const renderSocialListIcons = (social: string): ReactNode => {
		switch (social) {
			case 'linkedin':
				return <i className="fa-brands fa-linkedin text-3xl"></i>;
			case 'github':
				return <i className="fa-brands fa-github text-3xl"></i>;
			case 'upwork':
				return <i className="fa-brands fa-square-upwork text-3xl"></i>;
			default:
				return <></>;
		};
	};
	return (
		<footer className={styles.container}>
			<Container spacing={['verticalXXLrg', 'bottomLrg']}>
				<section className={styles.sections}>
					{/*  */}
					<ul className={styles.thanks} style={{ maxWidth: '80%' }}>
						<li><h4 className='uppercase font-bold tracking-widest text-sm text-gray-400'>References</h4></li>
						{
							FooterContent.acknowledgments.map(({ person, link, note }, index) => {
								return (
									<li key={index}>
										<Link href={link} rel="noreferrer" target="_blank">
											<span className={`${FIRA_CODE.className} text-gray-300 font-bold`}>
												{person} <i className="fa-solid fa-arrow-up-right-from-square"></i>
											</span>
										</Link>
										<p className='text-gray-400 font-normal'>{note}</p>
									</li>
								)
							})
						}
					</ul>
					{/* Links */}
					{/* <ul className={styles.links}>
						<li><h4>Links</h4></li>
						{
							FooterContent.links.map(({ person, link, note }, index) => {
								return (
									<li key={index}>
										<Link href={link} rel="noreferrer" target="_blank">
											{person} <i className="fa-solid fa-arrow-up-right-from-square"></i>
										</Link>
										<p>{note}</p>
									</li>
								)
							})
						}
					</ul> */}
					{/* Social */}
					<ul className={styles.social}>
						<li><h4 className='uppercase font-bold tracking-widest text-sm text-gray-400'>Social</h4></li>
						<li className={styles.socialList}>
							{
								FooterContent.social.map(({ url, icon }, index) => {
									return (
										<Link key={index} href={url} rel="noreferrer" target="_blank">
											{renderSocialListIcons(icon)}
										</Link>
									)
								})
							}
						</li>
					</ul>
				</section>
			</Container>
			<canvas id="gradient-canvas" className={''} data-transition-in ></canvas>
		</footer>
	)
}

export default Footer;