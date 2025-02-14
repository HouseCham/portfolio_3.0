import Footer from "@/components/Layout/Footer";
// -- dynamic import
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@/components/Layout/Navbar"));
/**
 * LayoutProps interface
 */
interface LayoutProps {
	children: React.ReactNode;
};
/**
 * Layout component
 * @param {React.ReactNode} children - child components
 * @returns 
 */
export default function Layout(props: LayoutProps) {
	return (
		<>
			<Navbar />
			<main>{props.children}</main>
			<Footer />
		</>
	)
}