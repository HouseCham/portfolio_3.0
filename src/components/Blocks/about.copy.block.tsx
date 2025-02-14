import { FC } from "react";
import { Inter } from 'next/font/google';
const INTER = Inter({
    subsets: ['latin'],
});

interface CopyBlockProps {
    containerClass?: string;
    iconClass?: string;
    iconKey: string;
    title: string;
    copy: string;
};
/**
 * About section component block that contains the written copy
 * 
 * @param {string} 	classProp template literals of classes for contain
 * @param {array}	icon request props [ iconType, iconKey ] 
 * @param {string} 	title to be displayed 
 * @param {string} 	copy written content
 * @returns {jsx} <CopyBlock />
 */
const CopyBlock: FC<CopyBlockProps> = ({ containerClass = "", iconClass = "", iconKey, title, copy }) => {
	return (
		<>
		<div className={containerClass}>
			<span className={iconClass}>
				<i className={`${iconKey} text-2xl`}></i>
			</span>
			<h3 className={`${INTER.className} text-lg text-primary font-semibold`}>{title}</h3>
			<p className={`${INTER.className} text-primaryDim`}>
				{copy}
			</p>
		</div>
		</>
	)
};

export default CopyBlock;