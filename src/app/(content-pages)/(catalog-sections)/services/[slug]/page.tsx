import ServiceAPI from '@/src/entities/service/api';
import { mapServiceDTO } from '@/src/entities/service/api/mapping';
import { WPContent } from '@/src/share/ui/WPContent';
import { notFound } from 'next/navigation';

/**
 * Страница какой-то конкретной услуги
 */
const Page = async ({ params }: { params: { slug: string } }) => {
    let service;
    try {
        const res = await ServiceAPI.getServicesBySlug(params.slug);
        service = mapServiceDTO(res);
    } catch {
        notFound();
    }

    return (
        <div className="mb-4 flex flex-col gap-8">
            <h1
                className="wp-block-heading"
                dangerouslySetInnerHTML={{ __html: service.title }}></h1>
            <WPContent>{service.content}</WPContent>
        </div>
    );
};

export default Page;
