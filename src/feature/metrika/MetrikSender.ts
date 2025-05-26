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
}
