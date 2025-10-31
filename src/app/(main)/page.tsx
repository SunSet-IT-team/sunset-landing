import AccordionSection from '@/src/components/AccordionSection';
import HomeLogo from '@/src/components/MainPageSection/Home/HomeLogo';
import { sections } from './data';
import Container from '@/src/share/ui/Container';

export default function Page() {
    return (
        <>
            <Container className="relative font-akony h-full z-20 lg:pr-[80px]">
                <div className="flex flex-col md:flex-row items-stretch h-full w-full">
                    {sections.map((section) => (
                        <AccordionSection key={section.id} id={section.id} title={section.text}>
                            {section.content}
                        </AccordionSection>
                    ))}
                </div>
                <HomeLogo />
            </Container>
        </>
    );
}
