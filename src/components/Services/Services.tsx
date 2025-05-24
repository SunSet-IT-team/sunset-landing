'use client';
import { FC, Suspense, useState } from 'react';
import BallModelWithLight from '../Models/BallModel/BallModelWithLight';
import TriangleModelWithLight from '../Models/TriangleModel/TriangleModelWithLight';
import { View } from '../CanvasPortal/View';
import { useNavStore } from '@/src/store/navStore';

// export const data = [
//     {
//         id: 1,
//         title: 'Разработка сайтов «под ключ»: интернет-магазины и корпоративные порталы',
//         description:
//             'Клиенты уходят с устаревшего сайта? Мы сделаем продающий ресурс за 30 дней: адаптивный дизайн, SEO-оптимизация, быстрая загрузка (<1 c), интеграция CRM и онлайн-оплата. Конверсия ↑ до 40 %. Стоимость от 50 000 ₽.',
//     },
//     {
//         id: 2,
//         title: 'Техническая поддержка и ускорение сайта 24/7',
//         description:
//             'Сайт падает в разгар продаж или медленно открывается? Берём ваш проект на сопровождение: исправляем ошибки, обновляем плагины, усиливаем безопасность и повышаем скорость. Прозрачная отчётность. Час работы — 1 200 ₽.',
//     },
//     {
//         id: 3,
//         title: 'PWA и мобильные web-приложения для роста мобильного трафика',
//         description:
//             '80 % посетителей приходят со смартфонов. Превратим сайт в прогрессивное web-приложение (PWA) с push-уведомлениями и офлайн-режимом: +25 % повторных продаж и удержания пользователей. Цена от 50 000 ₽.',
//     },
//     {
//         id: 4,
//         title: 'Индивидуальная digital-разработка и сложные интеграции',
//         description:
//             'Нужен нестандартный сервис, ERP-интеграция или внутренний портал? Соберём команду под задачу, поможем сформировать техническое задание и доведём проект до результата под SLA. Бесплатный аудит идеи.',
//     },
// ];

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
            'Берём ваш проект на&nbsp;сопровождение.<br/>Час работы&nbsp;&mdash; 1&nbsp;200&nbsp;₽',
    },
    {
        id: 3,
        title: 'PWA и мобильные web-приложения',
        description: 'Превратим сайт в&nbsp;web-приложени.<br/>Цена от&nbsp;50&nbsp;000&nbsp;₽',
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
                className="mt-8 ml-2 md:ml-auto md:mr-auto grid grid-rows-4 gap-y-6 md:gap-y-8 lg:gap-y-10 relative
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

            <View className="absolute top-[13%] md:-top-[33%] right-0 opacity-50 h-[20vw] w-[20vw] ">
                <Suspense fallback={null}>
                    <BallModelWithLight active={isActive} />
                </Suspense>
            </View>

            <View className="absolute bottom-0 left-0 w-[20vw] h-[20vw] opacity-50 ">
                <Suspense fallback={null}>
                    <TriangleModelWithLight active={isActive} />
                </Suspense>
            </View>
        </>
    );
};

export default Services;
