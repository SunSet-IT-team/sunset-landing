export type RouteData = {
    title: string;
    slug: string;
};

/**
 * Состыковка страниц, названий и slug
 */
export const routeData = {
    // Главная
    main: {
        title: 'Главная',
        slug: '/',
    },
    // Услуги
    services: {
        title: 'Услуги',
        slug: '/services',
    },
    // Кейсы
    cases: {
        title: 'Кейсы',
        slug: '/cases',
    },
    // Блог
    blog: {
        title: 'Блог',
        slug: '/blog',
    },
} as const;
