"use client";
import { FC, useState } from 'react'
import { useInView } from 'react-intersection-observer';
// -- components
import Image from 'next/image'
// -- styles
import styles from '@/styles/sections/projects/featured.module.scss'
// -- static information
import { IProject } from '@/interfaces/feature'
import Badges from '@/components/Blocks/Projects/BadgeList'
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
		"threshold": 0.6,
		"triggerOnce": false
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
							<p>
								<strong className='text-2xl sm:text-3xl'>{descriptionTitle}</strong> <span className='text-lg sm:text-2xl'>{description}</span>
							</p>
						</div>
						<div className={styles.stackContainer}>
							<Badges
								list={stack}
								block="stack"
								color={false}
							/>
						</div>
						<div className={styles.viewProject}>
							<i className="fa-solid fa-arrow-right-from-bracket"></i>
						</div>
					</div>
				</div>

				<div className={styles.imageContainer}>
					<span className={`${styles.imageAnimationContainer}`}>
						{images.map(({ key, url, h, w }, index) => {
							return (
								<div key={`${index}-${key}`}>
									<div className={`animate__animated ${inView ? "animate__bounceInUp" : "animate__bounceOutDown"}`}>
										<Image 
											priority
											src={url} 
											width={Number(w)}
											height={Number(h)}
											alt={project}
											className={`${isHover ? "" : ""} mx-auto w-80 sm:w-96 md:w-8/12`}
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

