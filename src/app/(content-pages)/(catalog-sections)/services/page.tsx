import ServiceAPI from '@/src/entities/service/api';
import { mapServiceDTO } from '@/src/entities/service/api/mapping';
import { Service } from '@/src/entities/service/api/types';
import Breadcrumbs from '@/src/feature/Breadcrumbs';
import ToggleGridContent from '@/src/feature/ToggleGridContent';
import { PaginationInitializer } from '@/src/share/ui/Pagination/ui/PaginationInitializer';

// export const revalidate = 86400; // 24 часа

/**
 * Страница всех услуг
 */
const Page = async () => {
    const breadcrumbs = [{ title: 'Главная', href: '/' }, { title: 'Услуги' }];

    let services: Service[] = [];
    let totalPages: number = 1;
    try {
        const res = await ServiceAPI.getServices({ page: 1, per_page: 12 });
        services = res.data.map((s) => mapServiceDTO(s));
    } catch {}

    return (
        <>
            <Breadcrumbs items={breadcrumbs} className="mb-4" />
            <PaginationInitializer itemsPerPage={12}>
                <ToggleGridContent
                    className="w-full pt-8"
                    initialServices={services}
                    initialTotalPages={totalPages}
                />
            </PaginationInitializer>
        </>
    );
};

export default Page;
