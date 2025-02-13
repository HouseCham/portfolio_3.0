import styles from '@/styles/utils/spacing.module.scss';

/**
 * Selector class factory for spacial geomtry utility component
 * @param 	{array} 	spacing array of strings to select spacing class
 * @returns {string} 	returns string of class references
 */
export default function Spacing(spacing: string | string[] | undefined): string {
	if (!spacing) return '';
	const classes = [];
	if (Array.isArray(spacing)) {
		spacing.forEach(space => {
			classes.push(styles[space]);
		});
	} else {
		classes.push(styles[spacing]);
	}
	return classes.join(' ');
}