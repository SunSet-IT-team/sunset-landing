import { TocItem } from '.';

/**
 * Функция вставляет якоря в контент страницы
 */
export function injectHeadingIds(html: string) {
    return html.replace(/<h([2-4])([^>]*)>(.*?)<\/h\1>/gi, (_, level, attrs, content) => {
        const text = content.replace(/<[^>]+>/g, '');
        const id = text.toLowerCase().replace(/\s+/g, '-');

        return `<h${level} id="${id}"${attrs}>${content}</h${level}>`;
    });
}

/**
 * Функция выбирает заголовки из контента
 */
export function extractToc(html: string): TocItem[] {
    const regex = /<h([2-4])[^>]*>(.*?)<\/h\1>/gi;
    const items: TocItem[] = [];

    let match;
    while ((match = regex.exec(html)) !== null) {
        const level = Number(match[1]) as 2 | 3 | 4;
        const title = match[2].replace(/<[^>]+>/g, '');
        const id = title.toLowerCase().replace(/\s+/g, '-');

        items.push({ id, title, level });
    }

    return items;
}
