import Breadcrumbs from '@/src/feature/Breadcrumbs';
import { ServicesPagination } from '@/src/feature/ServicesPagination';
import ToggleGridContent from '@/src/feature/ToggleGridContent';

// export const revalidate = 86400; // 24 часа

/**
 * Страница всех услуг
 */
const Page = () => {
    const breadcrumbs = [{ title: 'Главная', href: '/' }, { title: 'Услуги' }];
    return (
        <>
            <Breadcrumbs items={breadcrumbs} className="mb-4" />
            <ServicesPagination>
                <ToggleGridContent className="w-full pt-8" />
            </ServicesPagination>
        </>
    );
};

export default Page;
