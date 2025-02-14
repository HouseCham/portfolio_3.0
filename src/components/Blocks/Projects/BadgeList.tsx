import 'animate.css';
// -- styles
import badges from '@/styles/blocks/badges.module.scss';
import { Stack } from '@/interfaces/feature';
import { FC } from "react";
/**
 * IBadgesProps
 */
interface IBadgesProps {
    list: Stack[];
    block: string;
    color?: boolean;
    inView?: boolean;
    fullContainer?: string;
}
/**
 * Function to return a list of badges
 * @param {Stack[]} list
 * @param {string} block
 * @param {boolean} color
 * @param {string} fullContainer
 * @param {string} iconClass
 * @returns 
 */
const Badges: FC<IBadgesProps> = ({ list, block, color = false, inView, fullContainer = "" }) => {
    return (
        <ul
            className={`${badges.list} ${badges[block]} ${badges[fullContainer]}`}
        >
            {
                inView && list.map(({ key, name }, index) => {
                    return (
                        <li
                            key={`badge-li-${index}-${name}`}
                            className={`animate__animated animate__zoomIn ${badges.item}`}
                        >
                            {IconModule(key, color)}
                            <span className={badges.title}>{name}</span>
                        </li>

                    )
                })
            }
        </ul>
    )
}
/**
 * Function to return an icon module
 * @param {string} iconKey 
 * @param {boolean} color 
 * @returns 
 */
const IconModule = (iconKey: string, color: boolean) => {
    const colored = (color === false) ? '' : 'colored'
    return (
        <i className={`${iconKey} ${colored}`} />
    )
}

export default Badges;