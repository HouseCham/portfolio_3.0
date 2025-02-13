import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
// import Footer from "@/components/Layout/Footer";

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