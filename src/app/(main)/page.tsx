import AccordionSection from '@/src/components/AccordionSection';
import HomeLogo from '@/src/components/MainPageSection/Home/HomeLogo';
import { sections } from './data';
import Container from '@/src/share/ui/Container';
import SectionInitializer from '@/src/components/AccordionSection/SectionInitializer';
import SEOAPI from '@/src/feature/SEO/api';
import { mapSEODTO } from '@/src/feature/SEO/api/mapping';
import { generatePageMeta } from '@/src/feature/SEO/model/page';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface PageProps {
    searchParams: Promise<{
        preview: string;
    }>;
}

/**
 * Генерируем мета-информацию
 */
export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
    const { preview } = await searchParams;

    const isEditor = preview && preview === '1';

    let seo;
    try {
        const page = await SEOAPI.getSEOBySlug({
            type: 'pages',
            slug: 'main',
            cache: !isEditor,
        });
        seo = mapSEODTO(page);
    } catch {
        notFound();
    }

    return generatePageMeta(seo);
}

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
