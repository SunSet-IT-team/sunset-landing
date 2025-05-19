import Container from '@/src/components/ui/Container';
import { sections } from '@/src/data/data';
import AccordionSection from '@/src/components/AccordionSection';

export default function Page() {
    return (
        <>
            <Container className="relative font-akony h-full z-20">
                <div className="flex flex-col md:flex-row items-stretch h-full w-full">
                    {sections.map((section) => (
                        <AccordionSection key={section.id} id={section.id} title={section.text}>
                            {section.content}
                        </AccordionSection>
                    ))}
                </div>
            </Container>
        </>
    );
}
