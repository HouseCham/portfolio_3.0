import Section from '@/components/Structure/section';
import Container from '@/components/Structure/container';
import SectionTitle from '@/components/Blocks/section.title.block';
// -- Static information
import EXPERIENCE_CONTENT from '@/content/experience.json';
// -- Components
import { StepWithStickyColorVariant} from '@/components/Steps/StepperWithStickyColorVariant';
import StaticStep from '@/components/Steps/StaticStep';
import { FlickeringGrid } from '@/components/Layout/Pattern';
import BadgesBlock from '@/components/Blocks/about.badges.block';
// -- styles
import styles from '@/styles/sections/index/about.module.scss';
// -- fonts
import { Fira_Code } from 'next/font/google';
const FIRA_CODE = Fira_Code({
    weight: "600",
    subsets: ['latin'],
});

export default function Experience() {
    return (
        <Section className={''} id='my-experience'>
            <Container spacing={['verticalXXXLrg']}>
            <FlickeringGrid
                className="absolute inset-0 size-full overflow-hidden z-[-1]"
                squareSize={4}
                gridGap={6}
                color="#6B7280"
                maxOpacity={0.5}
                flickerChance={0.1}
            />
                <SectionTitle
                    title={EXPERIENCE_CONTENT.title}
                    preTitle={EXPERIENCE_CONTENT.pretitle}
                    subTitle={EXPERIENCE_CONTENT.subtitle}
                />
                <StepWithStickyColorVariant>
                    {
                        EXPERIENCE_CONTENT.experiences.map((experience, index) => {
                            return (
                                <StaticStep 
                                    key={`experience-${index}`} 
                                    step={index + 1} 
                                    title={experience.position}
                                    titleclassname={`${FIRA_CODE.className}`}
                                    className={`bg-backgroundDim2 bg-opacity-5 border border-solid border-backgroundDim2 p-8 ${index === 0 ? 'rounded-t-2xl' : ''} ${index ===  (EXPERIENCE_CONTENT.experiences.length-1)? 'rounded-b-2xl' : ''}`}
                                >
                                    <BadgesBlock 
                                        title={`${experience.company} | ${experience.date}`}
                                        containerClass={`${styles.container}`}
                                        iconKey={""}
                                        list={experience.codeSkills}
                                        headerIcon=''
                                    >
                                        <ul>
                                            {
                                                experience.description && experience.description.length > 0 && experience.description.map((entry, index) => {
                                                    return (
                                                        <li key={`experience-${index}`} className={`flex`}>
                                                            <i className="fa-solid fa-chevron-right mr-3 mt-1"></i>
                                                            <p 
                                                                key={`experience-${index}`} 
                                                                className={`${FIRA_CODE.className} text-primaryDim text-sm`}
                                                            >
                                                                {entry}
                                                            </p>
                                                        </li>
                                                    )
                                                })
                                            }
                                            
                                        </ul>
                                    </BadgesBlock>
                                </StaticStep>
                            )
                        })
                    }
                </StepWithStickyColorVariant>
            </Container>
        </Section>
    )
}