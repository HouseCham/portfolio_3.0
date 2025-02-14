import Image from "next/image"
import { FC } from "react"
/**
 * Interface for CustomImg component
 */
interface CustomImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    priority?: boolean;
};
/**
 * Functional component for rendering image with custom error handling
 * @param {string} src - Image source
 * @param {string} alt - Image alt text
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @param {boolean} priority - Image priority
 * @returns {JSX.Element} - CustomImg component
 */
const CustomImage: FC<CustomImageProps> = ({ src, alt, width, height, priority = false }) => {
    return (
        <Image 
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/images/default.webp'; }}
        />
    )
};

export default CustomImage;