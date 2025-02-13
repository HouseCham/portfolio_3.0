import { FC } from "react";
import HeroContent from "@/content/hero.json";
// import HeroBg from "@/components/Hero/HeroBg";
import Button from "../Button";

const Hero: FC = () => {
	// const [typingStatus, setTypingStatus] = useState<string>('Initializing');
	return (
		<div> 
			<Button
				key={'contact-button'}
				text={HeroContent.buttons.primary.title}
				href="mailto:ramsesramirezvallejo@gmail.com"
			/>
		</div>
		// <div className={`${hero.section}`}>
		// 	<div spacing={'VerticalXXXL'}>
		// 		<TypeAnimation className={`${hero.preHeader}`}
		// 			sequence={[
		// 				HeroContent.intro.startDelay,
		// 				() => { setTypingStatus('typing') },
		// 				HeroContent.intro.start,
		// 				() => {	setTypingStatus('typed') },
		// 				HeroContent.intro.deleteDelay,
		// 				() => {	setTypingStatus('deleting') },
		// 				HeroContent.intro.end,
		// 				() => {	setTypingStatus('deleted') },
		// 				HeroContent.intro.restartDelay,
		// 			]}
		// 			speed={HeroContent.intro.speed}
		// 			deletionSpeed={HeroContent.intro.deletionSpeed}
		// 			wrapper={HeroContent.intro.wrapper}
		// 			repeat={Infinity}
		// 		/>
		// 		<section>
		// 			<h1 className={hero.header}>
		// 				{HeroContent.header.name}
		// 				</h1>
		// 			<h1 className={`${hero.header} ${hero.primaryDim}`}>
		// 				{HeroContent.header.usp}
		// 			</h1>
		// 		</section>
		// 		<section>
		// 			<p className={`${hero.primaryBright} subtitle ${space(["verticalLrg"])}`}>
		// 				{ HeroContent.paragraph }
		// 			</p>					
		// 		</section>
		// 		<section>
		// 			<button	className={`button ${button.primary}`}
		// 					onClick={ () => window.location = 'mailto:hello@andrewnelson.net' } >
		// 				{HeroContent.buttons.primary.title}
		// 			</button>
		// 			<Button	
		// 				text={HeroContent.buttons.primary.title}
		// 				onClick={ () => window.location = 'mailto:hello@andrewnelson.net' }
		// 				href="mailto:"
		// 			/>
		// 			<button className={`button ${button.secondary} leaveSite`}
		// 					onClick={ ()=> window.open("https://www.linkedin.com/in/--andrewnelson/", "_blank") } >
		// 				{HeroContent.buttons.secondary.title}
		// 			</button>
		// 		</section>
		// 	</div>
		// 	<HeroBg theme="bg-color-1" />
		// </div>
	)
};

export default Hero;