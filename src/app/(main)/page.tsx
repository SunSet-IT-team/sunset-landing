'use client';

import Container from '@/src/components/ui/Container';
import Section from '../../components/Section/Section';
import { sections } from '@/src/data/data';
import { Leva } from 'leva';

export default function Page() {
    return (
        <>
            <Container className="relative font-akony h-full -mt-40  z-20">
                {sections.map((section) => (
                    <Section sectionId={section.id} key={section.id + section.text}>
                        {section.content}
                    </Section>
                ))}
            </Container>
            <Leva />
        </>
    );
}
