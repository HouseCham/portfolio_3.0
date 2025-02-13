import { FC } from "react";
// -- static information
import HeroContent from "@/content/hero.json";
// -- styles
import styles from "@/styles/sections/index/hero.module.scss";
// -- components
import Container from "@/components/Structure/container";
import Section from "@/components/Structure/section";
import HeroBg from "@/components/Hero/HeroBg";
// -- utils
import Spacing from "@/utils/spacing.util";
import Button from "../Button";
// -- fonts
import { Fira_Code } from 'next/font/google';
const FIRA_CODE = Fira_Code({
	weight: "600",
	subsets: ['latin'],
});
/**
 * 
 * @returns 
 */
const Hero: FC = () => {
	// const [typingStatus, setTypingStatus] = useState<string>('Initializing');
	return (
		<Section className={`${styles.section}`}>
			<Container spacing={'VerticalXXXL'}>
				{/* <TypeAnimation className={`${styles.preHeader}`}
					sequence={[
						HeroContent.intro.startDelay,
						() => { setTypingStatus('typing') },
						HeroContent.intro.start,
						() => {	setTypingStatus('typed') },
						HeroContent.intro.deleteDelay,
						() => {	setTypingStatus('deleting') },
						HeroContent.intro.end,
						() => {	setTypingStatus('deleted') },
						HeroContent.intro.restartDelay,
					]}
					speed={HeroContent.intro.speed}
					deletionSpeed={HeroContent.intro.deletionSpeed}
					wrapper={HeroContent.intro.wrapper}
					repeat={Infinity}
				/> */}
				{/* Header */}
				<section>
					<h1 className={`${styles.header} font-bold`}>
						{HeroContent.header.name}
					</h1>
					<h1 className={`${styles.header} ${styles.primaryDim} font-bold`}>
						{HeroContent.header.usp}
					</h1>
				</section>
				{/* Description */}
				<section>
					<p className={`${styles.primaryBright} subtitle ${Spacing(["verticalLrg"])} ${FIRA_CODE.className}`}>
						{HeroContent.paragraph}
					</p>
				</section>
				{/* Buttons */}
				<section className="">
					{/* Contact Btn */}
					<Button
						// className={`button ${buttonStyles.primary}`}
						type="primary"
						href={HeroContent.buttons.primary.url}
						text={HeroContent.buttons.primary.title}
						className="mr-4"
					/>
					{/* LinkedIn Btn */}
					<Button
						href={HeroContent.buttons.secondary.url}
						type="secondary"
						text={HeroContent.buttons.secondary.title}
						className="mt-2 sm:mt-0"
					/>
				</section>
			</Container>
			<HeroBg />
		</Section>
	)
};

export default Hero;