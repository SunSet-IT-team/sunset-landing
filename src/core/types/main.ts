/**
 * Ошибка в ответе Api Wordpress сервера
 */
export interface WPError extends Error {
    wpCode?: 'rest_post_invalid_page_number';
}
