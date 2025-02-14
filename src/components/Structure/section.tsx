// Section structure scss
import sections from '@/styles/structure/section.module.scss';
import { FC } from 'react';

/**
 * Section component props
 */
interface SectionProps {
	id?: string;
	className?: string;
	children: React.ReactNode;
};
/**
 * Structural Component
 * Section / Container / Componenents / Blocks / Utils       
 * @param {string}	classProp template literals of classes for contain
 * @param {jsx} 	children children elements
 * @returns {jsx}	<Section />
 */
const Section:FC<SectionProps> = ({ id, className = "", children }) => {
	return (
		<div id={id} className={`${sections.default} ${className}`}>
			{children}
		</div>
	);
};

export default Section;