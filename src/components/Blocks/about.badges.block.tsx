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
import { MainMenusGradientCard } from '../Cards/GradientCard';
const INTER = Inter({
	subsets: ['latin'],
});
/**
 * BadgesBlockProps interface
 */
interface BadgesBlockProps {
	title: string;
	list: Stack[];
	fullContainer?: string;
	iconKey: string;
	headerIcon: string;
	containerClass: string;
	block?: string;
	copy?: string;
	children?: React.ReactNode;
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
const BadgesBlock: FC<BadgesBlockProps> = ({ title, copy, list, fullContainer, block = "", iconKey, headerIcon, containerClass, children }) => {
	const { ref, inView } = useInView({
		"threshold": 0.8,
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
			{/* Children */}
			{
				children && (
					<div className='mb-8'>
						{children}
					</div>
				)
			}
			{/* Badges | Skills */}
			<MainMenusGradientCard
				className="px-4 pb-8 h-fit lg:p-5"
				description=""
				title=""
			>
				<Badges 
					list={list} 
					block={block} 
					inView={inView} 
					fullContainer={fullContainer}
				/>
			</MainMenusGradientCard>
		</div>
	)
}

export default BadgesBlock;