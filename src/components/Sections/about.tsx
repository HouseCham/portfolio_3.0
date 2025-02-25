// Section scss
import about from '@/styles/sections/index/about.module.scss';

// -- Static information
import ABOUT_CONTENT from '@/content/about.json';

// -- Components
import Image from 'next/image';
import Section from '@/components/Structure/section';
import Container from '@/components/Structure/container';
import SectionTitle from '@/components/Blocks/section.title.block';
import CopyBlock from '@/components/Blocks/about.copy.block';
import BadgesBlock from '@/components/Blocks/about.badges.block';

// -- styles
import { DotsPattern } from '@/components/Layout/Pattern';
import { cn } from '@/utils';

import UserGIF from "@/components/Images/user.gif";

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {tsx} <About />
 */
export default function About() {
	return (
		<Section className={about.section} id='about-me'>
			<Container spacing={['verticalXXXLrg']}>
				{/* Dots Pattern layout */}
				<DotsPattern
					className={cn(
						"[mask-image:radial-gradient(550px_circle_at_center,white,transparent)]",
					)}
				/>
				{/* Title */}
				<SectionTitle
					title={ABOUT_CONTENT.title}
					preTitle={ABOUT_CONTENT.pretitle}
					subTitle={ABOUT_CONTENT.subtitle}
				/>
				{/* Content */}
				<section className={about.content}>
					<div className={`${about.image} hidden md:block`}>
						<Image 
							src={UserGIF.src}
							width={UserGIF.width} 
							height={UserGIF.height} 
							alt={ABOUT_CONTENT.imageOptions.alt}
						/>
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title={ABOUT_CONTENT.softSkills.title}
							containerClass={about.container}
							iconClass={`${about.icon} text-neon12`}
							iconKey={"fa-solid fa-ear-listen"}
							copy={ABOUT_CONTENT.softSkills.description}
						/>
						<BadgesBlock 
							title={ABOUT_CONTENT.hardSkills.title}
							containerClass={about.container}
							list={ABOUT_CONTENT.hardSkills.stack} 
							fullContainer="fullContainer"
							block="methods" 
							iconKey="fa-solid fa-fingerprint"
							copy={ABOUT_CONTENT.hardSkills.description}
							headerIcon={`${about.icon} text-neon12`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}