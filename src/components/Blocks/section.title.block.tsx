import section from '@/styles/blocks/section.title.module.scss'
import { Fira_Code, Inter } from 'next/font/google';
const INTER = Inter({
	subsets: ['latin'],
});
const FIRA_CODE = Fira_Code({
	subsets: ['latin'],
});
/**
 * SectionTitleProps
 */
interface SectionTitleProps {
	preTitle: string;
	title: string;
	subTitle: string;
};
/**
 * Section header component
 * @param {string} preTitle
 * @param {string} title
 * @param {string} subTitle
 * @returns 
 */
export default function SectionTitle({ preTitle, title, subTitle }: SectionTitleProps) {
	return (
		<div className={`${section.title}`}>
			<h4 className={`${INTER.className} uppercase text-xs tracking-widest font-extrabold text-primaryDim`}>{preTitle}</h4>
			<h2 className={`${INTER.className} text-primary font-bold tracking-tight text-3xl sm:text-xl`}>{title}</h2>
			<p className={`${FIRA_CODE.className} subtitle font-medium text-r-s text-primaryDim`}>{subTitle}</p>
		</div>
	)

}