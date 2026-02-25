import AccordionSection from '@/src/components/AccordionSection';
import HomeLogo from '@/src/components/MainPageSection/Home/HomeLogo';
import { sections } from './data';
import Container from '@/src/share/ui/Container';
import SectionInitializer from '@/src/components/AccordionSection/SectionInitializer';

export default function Page() {
    return (
        <>
            <Container className="relative font-akony h-full z-20 lg:pr-[80px]">
                <div className="flex flex-col md:flex-row items-stretch h-full w-full">
                    <SectionInitializer />
                    {sections.map((section) => (
                        <AccordionSection
                            key={section.id}
                            id={section.id}
                            title={section.text}
                            url={section.url}>
                            {section.content}
                        </AccordionSection>
                    ))}
                </div>
                <HomeLogo />
            </Container>
        </>
    );
}
