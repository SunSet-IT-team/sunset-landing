import { ViewsApiMethods } from './types';

/**
 * API по работе с просмотрами
 */
const ViewsAPI: ViewsApiMethods = {
    postView: async (postId: number) => {
        // Отправляем POST-запрос на API WordPress, получаем актуальное число просмотров
        const res = await fetch(
            `https://server.sunset-it.agency/wp-json/sunset/v1/view/${postId}`,
            {
                method: 'POST',
            },
        );
        const data: any = await res.json();
        console.log(data);

        if (!res.ok) {
            const error = new Error(data.message || 'Ошибка при запросе записей') as any;
            error.wpCode = data.code;
            throw error;
        }

        return { views: data.views };
    },
};

export default ViewsAPI;
