'use client';
import { FC, Suspense } from 'react';

import { useNavStore } from '@/src/store/navStore';
import TriangleModelWithLight from '../../Models/TriangleModel/TriangleModelWithLight';
import { View } from '../../CanvasPortal/View';
import BallModelWithLight from '../../Models/BallModel/BallModelWithLight';

export const data = [
    {
        id: 1,
        title: 'Разработка сайтов «под ключ»',
        description:
            'Интернет-магазины и&nbsp;корпоративные порталы.<br/>Стоимость от&nbsp;50&nbsp;000&nbsp;₽',
    },
    {
        id: 2,
        title: 'Техническая поддержка сайта',
        description:
            'Берём Ваш проект на&nbsp;сопровождение.<br/>Никакого фриланса, только штатные программисты',
    },
    {
        id: 3,
        title: 'PWA и мобильные web-приложения',
        description: 'Превратим сайт в&nbsp;web-приложение.<br/>Цена от&nbsp;50&nbsp;000&nbsp;₽',
    },
    {
        id: 4,
        title: 'Индивидуальная digital-разработка',
        description: 'Есть идея? Давайте обсудим!<br/>Аудит&nbsp;&mdash; в&nbsp;подарок :)',
    },
];

/**
 * Костыль для шахмотного порядка
 */
const mappginRows = {
    0: 'lg:row-start-1',
    1: 'lg:row-start-2',
    2: 'lg:row-start-3',
    3: 'lg:row-start-4',
};

/**
 * Секция услуги
 */
const Services: FC = () => {
    const { activeId } = useNavStore();
    const isActive = activeId == 3;

    return (
        <>
            <div
                className="mt-8 ml-2 md:ml-auto md:mr-auto grid grid-rows-4 gap-y-6 md:gap-y-8 lg:gap-y-2 3xl:gap-y-10 relative
                z-20 md:gap-x-2 md:grid-cols-3 xl:grid-cols-2 max-w-[600px] lg:max-w-[670px]">
                {data.map((item, index) => {
                    return (
                        <div
                            key={item.title}
                            className={`md:col-span-2 xl:col-span-1 ${mappginRows[index]}
                                ${index % 2 == 0 ? 'md:!col-start-1' : 'md:!col-start-2'}`}>
                            <h3 className="heading-h3 mb-2">{item.title}</h3>
                            <p
                                className="text-descr"
                                dangerouslySetInnerHTML={{ __html: item.description }}
                            />
                        </div>
                    );
                })}
            </div>

            <View className="absolute bottom-[0%] md:bottom-[unset] md:-top-[33%] left-[0%] md:left-[unset] md:right-0 h-[40vw] md:h-[20vw] w-[40vw] md:w-[20vw]">
                <Suspense fallback={null}>
                    <BallModelWithLight active={isActive} />
                </Suspense>
            </View>

            <View className="absolute -top-[10%] md:top-[unset] md:bottom-0 -right-[10%]  md:right-[unset] md:left-0 w-[55vw] md:w-[25vw] h-[55vw] md:h-[25vw] max-w-[250px] max-h-[250px]">
                <Suspense fallback={null}>
                    <TriangleModelWithLight active={isActive} />
                </Suspense>
            </View>
        </>
    );
};

export default Services;
