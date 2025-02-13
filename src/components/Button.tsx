import Link from "next/link";
import { FC } from "react";
// -- fonts
import { Fira_Code } from 'next/font/google';
const FIRA_CODE = Fira_Code({
    weight: "600",
});
/**
 * ButtonProps is an interface that defines the props
 */
interface ButtonProps {
    text: string;
    type?: "primary" | "secondary";
    isSubmit?: boolean;
    onClick?: () => void;
    className?: string;
    href?: string;
}
/**
 * Functional component that renders a button element
 * @param {string} text - The text to display on the button
 * @param {string} type - The type of button to render
 * @param {boolean} isSubmit - Whether the button is a submit button
 * @param {() => void} onClick - The function to call when the button is clicked
 * @param {string} className - The class name to apply to the button
 * @param {string} href - The href to navigate to when the button is clicked
 * @returns 
 */
const Button: FC<ButtonProps> = ({ text, onClick, className = "", type = "primary", isSubmit = false, href }) => {
    const DEFAULT_STYLES = "cursor-pointer text-base font-bold px-10 py-3 rounded-full border-none inline-block transition duration-700 hover:transition hover:duration-700"
    const buttonStyle = type === "primary" 
    ? "text-background bg-secondary hover:bg-secondaryBright" 
    : "bg-transparent text-primary border border-solid border-primaryDark hover:text-primaryBright hover:bg-primaryDark";

    if (href !== undefined) {
        return (
            <Link 
                href={href} 
                className={`${DEFAULT_STYLES} ${buttonStyle} ${FIRA_CODE.className} ${className}`}
                style={{ border: type === "primary" ? "none" : "1px solid #bfbfbf" }}
            >
                {text} <span className="ml-1">{type === "primary" ? null : <i className="fa-solid fa-up-right-from-square"></i>}</span>
            </Link>
        )
    };
    return (
        <button
            type={isSubmit ? "submit" : "button"} 
            className={`${DEFAULT_STYLES} ${buttonStyle} ${FIRA_CODE.className} ${className}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;