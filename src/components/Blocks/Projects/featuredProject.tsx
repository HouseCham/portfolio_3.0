"use client";
import { FC, useState } from 'react'
// -- components
import Image from 'next/image'
// -- styles
import styles from '@/styles/sections/projects/featured.module.scss'
// -- static information
import { IProject } from '@/interfaces/feature'
import Badges from '@/components/Blocks/Projects/BadgeList'
import { useInView } from 'react-intersection-observer';
/**
 * FeaturedProjectProps
 */
interface FeaturedProjectProps {
	projectInfo: IProject
	index: number
};
/**
 * FeaturedProject
 * @param {IProject} projectInfo
 * @param {number} index
 * @returns 
 */
const FeaturedProject: FC<FeaturedProjectProps> = ({ projectInfo, index }) => {
	const { project, repo, descriptionTitle, description, stack, images, url } = projectInfo;
	const [isHover, setIsHover] = useState(false);

	const { ref, inView } = useInView({
		"threshold": 0.75,
		"triggerOnce": true
	})

	return (
		<section
			key={index}
			ref={ref}
			className={styles.project}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			onClick={() => window.open(url, '_blank')}
		>
				<div className={styles.details}>
					<div className={styles.projectHeader}>
						<div className={styles.header}>
							<h3 className="highlight bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent font-bold text-lg">{project}</h3><span className={styles.privateOr}><i className="fa-brands fa-github"></i>{repo}</span>
						</div>
						<div className={styles.description}>
							<p><strong>{descriptionTitle}</strong> {description}</p>
						</div>
						<div className={styles.stackContainer}>
							<Badges
								list={stack}
								block="stack"
								color={false}
								inView={inView}
							/>
						</div>
						<div className={styles.viewProject}>
							<i className="fa-solid fa-arrow-right-from-bracket"></i>
						</div>
					</div>
				</div>

				<div className={styles.imageContainer}>
					<span className={`${styles.imageAnimationContainer}`}>
						{images.map(({ key, url, hover, h, w }, index) => {
							return (
								<div key={`${index}-${key}`}>
									<div className={inView ? "animate__animated animate__bounceInUp" : ""}>
										<Image 
											src={url} 
											width={0}
											alt={project}
											className={`${isHover ? "" : ""} mx-auto invisible sm:visible sm:w-96 md:w-8/12`}
											style={{ "maxWidth": "450px" }} 
										/>
									</div>
								</div>
							)
						}
						)}
					</span>
				</div>
		</section>
	)
}

export default FeaturedProject;

