/**
 * Функция которая генеририрует события для я.метрики
 */
export const metrika = (roal: MetrikGoal, data?: any) => {
    window.ym(102180098, 'reachGoal', roal, data);
};

/**
 * Перечисление возможных событий на сайте
 */
export enum MetrikGoal {
    SEND_FORM = 'sendForm', // Отправка формы "связаться"
    GO_MEDIA = 'goMedia', // Переход в соц-сети
    GO_PORTFOLIO = 'goPortfolio', // Просмотр портфолио
    GO_INSTAGRAM = 'goInstagram', // Переход в инст
    GO_TELEGRAM = 'goTelegram', // Переход в тг
    GO_YOUTUBE = 'goYoutube', // Переход в ютуб
    GO_WORKSPACE = 'goWorkspace', // Переход в воркспейс
    CLICK_PHONE = 'clickPhone', // Нажали на номер телефона
    CLICK_EMAIL = 'clickEmail', // Нажали на email
}
