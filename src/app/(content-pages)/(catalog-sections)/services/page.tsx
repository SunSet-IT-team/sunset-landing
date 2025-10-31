import ToggleGridContent from '@/src/feature/ToggleGridContent';
import Card, { CardProps } from '@/src/share/ui/Card';

const placeholderTitle = 'Услуга консалтинг';
const placeholderImgae = 'https://i.pinimg.com/736x/10/e4/45/10e44517d1e6e81b38203b814cdde682.jpg';
const placeholderDescr =
    'Бла-бла бла аба ааайайуай а. Йуву й. Бла-бла бла аба ааайайуай а. Йуву й. Бла-бла бла аба ааайайуай а. Йуву й Бла-бла бла аба ааайайуай а. Йуву.';

const placeholderData: CardProps[] = [
    {
        title: placeholderTitle,
        src: placeholderImgae,
        descr: placeholderDescr,
    },
    {
        title: placeholderTitle,
        descr: placeholderDescr,
    },
    {
        title: placeholderTitle,
        src: placeholderImgae,
        descr: placeholderDescr,
    },
    {
        title: placeholderTitle,
        descr: placeholderDescr,
    },
    {
        title: placeholderTitle,
        src: placeholderImgae,
        descr: placeholderDescr,
    },
    {
        title: placeholderTitle,
        descr: placeholderDescr,
    },
];

/**
 * Страница всех услуг
 */
const Page = () => {
    return (
        <>
            <h1 className="main-heading">Услуги</h1>

            <ToggleGridContent data={placeholderData} className="w-full pt-8" />
        </>
    );
};

export default Page;
