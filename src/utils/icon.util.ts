//-- framework icons
import ReactIcon from "@/components/Icons/Frameworks/react.svg";
import NextJsIcon from "@/components/Icons/Frameworks/nextjs.svg";
//-- db icons
import DbIcon from "@/components/Icons/Db/database.svg";
//-- coding icons
import BootstrapIcon from "@/components/Icons/Code/bootstrap.svg";
import CSharpIcon from "@/components/Icons/Code/c-sharp.svg";
import CssIcon from "@/components/Icons/Code/css.svg";
import GolangIcon from "@/components/Icons/Code/golang.svg";
import HtmlIcon from "@/components/Icons/Code/html.svg";
import JsIcon from "@/components/Icons/Code/js.svg";
import SassIcon from "@/components/Icons/Code/sass.svg";
import TsIcon from "@/components/Icons/Code/typescript.svg";

/**
 * Helper function to get the correct icon for a technology
 * @param {string} icon 
 * @returns 
 */
export const GetTechIcon = (icon: string) => {
    switch (icon) {
        case 'react':
            return ReactIcon;
        case 'nextjs':
            return NextJsIcon;
        case 'db':
            return DbIcon;
        case 'bootstrap':
            return BootstrapIcon;
        case 'csharp':
            return CSharpIcon;
        case 'css':
            return CssIcon;
        case 'golang':
            return GolangIcon;
        case 'html':
            return HtmlIcon;
        case 'js':
            return JsIcon;
        case 'sass':
            return SassIcon;
        case 'ts':
            return TsIcon;
        default:
            return null;
    }
};