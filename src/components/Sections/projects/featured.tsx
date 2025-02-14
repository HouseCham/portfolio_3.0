"use client";
// -- components
import Section from '@/components/Structure/section';
import Container from '@/components/Structure/container';
import SectionTitle from '@/components/Blocks/section.title.block';
// -- styles
import styles from '@/styles/sections/projects/featured.module.scss';
// -- static information
import content from '@/content/projects/featured.json';
import FeaturedProject from '@/components/Blocks/Projects/featuredProject';

const FeaturedProjects = () => {
	return (
		<Section className={styles.hasBg}>
			<Container spacing={'verticalXXXXLrg'}>
				<SectionTitle
					title="Featured Projects"
					preTitle="UX and Full Stack"
					subTitle="Focused on the experience, driven by the engineering."
				/> 				{
					content.map((data, index) => {
						return (
							<FeaturedProject 
								key={`project-${index}`} 
								index={index} 
								projectInfo={data} 
							/>
						)
					})
				}
			</Container>
			<div className={styles.bgContainer}>
				<span className={styles.orbitalBg}>
					<span className={`${styles.bgSection}`}><span className={`${styles.bgInner} ${styles.heroLeft} ${styles.heroOrbital}`}></span></span>
					<span className={`${styles.bgSection}`}><span className={`${styles.bgInner} ${styles.heroCenter}`}></span></span>
					<span className={`${styles.bgSection}`}><span className={`${styles.bgInner} ${styles.heroRight} ${styles.heroOrbital}`}></span></span>
				</span>
				<span className={styles.afterGlowBg}></span>
			</div>
		</Section>
	)
};

export default FeaturedProjects;