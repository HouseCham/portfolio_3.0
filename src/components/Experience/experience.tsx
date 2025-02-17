import Section from '@/components/Structure/section';
import Container from '@/components/Structure/container';
import SectionTitle from '@/components/Blocks/section.title.block';
// -- Static information
import EXPERIENCE_CONTENT from '@/content/experience.json';

export default function Experience() {
    return (
        <Section className={''} id='my-experience'>
            <Container spacing={['verticalXXXLrg']}>
                <SectionTitle
                    title={EXPERIENCE_CONTENT.title}
                    preTitle={EXPERIENCE_CONTENT.pretitle}
                    subTitle={EXPERIENCE_CONTENT.subtitle}
                />
            </Container>
        </Section>
    )
}