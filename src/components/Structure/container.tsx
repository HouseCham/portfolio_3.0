// Utility packages
import Spacing from '@/utils/spacing.util';
// Structure scss
import styles from '@/styles/structure/container.module.scss';
import { FC } from 'react';
/**
 * Container component props
 */
interface ContainerProps {
	className?: string;
	spacing?: string[];
	children: React.ReactNode;
};
/**
 * Structural container component
 * @param {string} className - additional classes
 * @param {string[]} spacing - spacing classes
 * @param {React.ReactNode} children - child components
 * @returns 
 */
const Container:FC<ContainerProps> = ({ className = "", spacing, children }) => {
	return ( 
		<div className={`${styles.readingWidth} ${className} ${Spacing(spacing)}`}>
			{children}
		</div>
	);
}

export default Container;