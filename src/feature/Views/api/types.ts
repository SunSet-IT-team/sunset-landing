/**
 * Интерфейс API для работы с просмотрами
 */
export interface ViewsApiMethods {
    /**
     * Просмотреть запись
     */
    postView: (postId: number) => Promise<{ views: number }>;
}
