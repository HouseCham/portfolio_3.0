"use client";
import { FC } from 'react';
import { useInView } from 'react-intersection-observer';
// -- styles
import badges from '@/styles/blocks/badges.module.scss';
// -- components
import Badges from '@/components/Blocks/Projects/BadgeList';
import { Stack } from '@/interfaces/feature';
// -- fonts
import { Inter } from 'next/font/google';
const INTER = Inter({
	subsets: ['latin'],
});
/**
 * BadgesBlockProps interface
 */
interface BadgesBlockProps {
	title: string;
	copy?: string;
	list: Stack[];
	fullContainer?: string;
	block?: string;
	iconKey: string;
	headerIcon: string;
	containerClass: string;
};
/**
 * Functional component for displaying a block of badges or skills
 * @param {string} 	title to be displayed
 * @param {string} 	copy written content
 * @param {array}	list of badges or skills
 * @param {string}	fullContainer template literals of classes for contain
 * @param {string}	block template literals of classes for contain
 * @param {string}	iconKey request props [ iconType, iconKey ]
 * @param {string}	headerIcon request props [ iconType, iconKey ]
 * @returns 
 */
const BadgesBlock: FC<BadgesBlockProps> = ({ title, copy, list, fullContainer, block = "", iconKey, headerIcon, containerClass }) => {
	const { ref, inView } = useInView({
		"threshold": 0.3,
		"triggerOnce": true
	})
	return (
		<div ref={ref} className={`${badges.badgeBlockContainer} ${containerClass}`}>
			{/* Icon */}
			<span>
				<i className={`${iconKey} ${headerIcon} text-2xl`}></i>
			</span>
			{/* Title */}
			<h3 className={`${INTER.className} text-lg text-primary font-semibold`}>
				{title}
			</h3>
			{/* Copy */}
			{copy && <p className={`${INTER.className} text-primaryDim`}>{copy}</p>}
			{/* Badges | Skills */}
			<Badges 
				list={list} 
				block={block} 
				inView={inView} 
				fullContainer={fullContainer}
			/>
		</div>
	)
}

export default BadgesBlock;