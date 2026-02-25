import { FC } from 'react';
import clsx from 'clsx';
import CTAEnhancer from './CTAEnhancer';

interface Props {
    /**
     * Контент, который необходимо отобразить на сайте
     */
    children: string | TrustedHTML;

    /**
     * Дополнительные css стили
     */
    className?: string;
}

/**
 * Компонент для вставки HTML-контента из wordpress
 */
export const WPContent: FC<Props> = ({ children, className }) => {
    return (
        <>
            <div
                className={clsx('content', className)}
                dangerouslySetInnerHTML={{ __html: children }}
            />
            <CTAEnhancer />
        </>
    );
};
