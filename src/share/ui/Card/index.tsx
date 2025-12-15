import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

export interface CardProps {
    src?: string;
    title?: string;
    excerpt?: string;
    url?: string;
    type?: 'col' | 'row';
}

/**
 * Шаблон карточки чего угодно
 */
const Card = (data: CardProps) => {
    const type = data.type || 'row';
    const title = data.title || 'Название не указано';
    const descr = data.excerpt || '';
    const src = data.src;
    const url = data.url;

    const content = (
        <>
            {type === 'row' ? (
                // Горизонтальная версия
                <>
                    <div className="rounded-[6px] aspect-[3/2] w-[35%]">
                        {src ? (
                            <img
                                className="rounded-[6px] aspect-[3/2] w-full object-cover object-center"
                                src={src}
                                alt={title}
                            />
                        ) : (
                            <div className="rounded-[6px] aspect-[3/2] w-full bg-orange" />
                        )}
                    </div>
                    <div className="w-[60%]">
                        <h2 className="heading-h3 mb-3 break-words hyphens-auto">{title}</h2>
                        <p
                            className="text-descr max-w-[400px]"
                            dangerouslySetInnerHTML={{ __html: descr }}></p>
                    </div>
                </>
            ) : (
                // Вертикальная версия
                <>
                    <div className="rounded-[6px] aspect-square w-full">
                        {src ? (
                            <img
                                className="rounded-[6px] aspect-square w-full object-cover object-center"
                                src={src}
                                alt={title}
                            />
                        ) : (
                            <div className="rounded-[6px] aspect-square w-full bg-orange" />
                        )}
                    </div>
                    <div className="w-full">
                        <h2 className="text-button mb-3">{title}</h2>
                        <p className="text-descr" dangerouslySetInnerHTML={{ __html: descr }}></p>
                    </div>
                </>
            )}
        </>
    );

    const Article = (
        <article
            className={twMerge(
                type === 'row' ? 'flex flex-row gap-4 justify-between' : 'flex flex-col gap-4',
            )}>
            {content}
        </article>
    );

    return url ? <Link href={url}>{Article}</Link> : Article;
};

export default Card;
