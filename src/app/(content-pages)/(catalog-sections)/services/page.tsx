import Card from '@/src/share/ui/Card';

const placeholderTitle = 'Услуга консалтинг';
const placeholderImgae = 'https://i.pinimg.com/736x/10/e4/45/10e44517d1e6e81b38203b814cdde682.jpg';
const placeholderDescr =
    'Бла-бла бла аба ааайайуай а. Йуву й. Бла-бла бла аба ааайайуай а. Йуву й. Бла-бла бла аба ааайайуай а. Йуву й Бла-бла бла аба ааайайуай а. Йуву.';

/**
 * Страница всех услуг
 */
const Page = () => {
    return (
        <>
            <h1 className="main-heading">Услуги</h1>

            <div className="flex flex-col gap-5 w-full pt-8">
                <Card title={placeholderTitle} src={placeholderImgae} descr={placeholderDescr} />
            </div>

            <div className="grid grid-cols-3  gap-4 w-full pt-8">
                <Card
                    title={placeholderTitle}
                    src={placeholderImgae}
                    descr={placeholderDescr}
                    type="col"
                />
            </div>
        </>
    );
};

export default Page;
