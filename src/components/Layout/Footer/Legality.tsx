import Link from 'next/link';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

const data = [
    {
        id: 1,
        text: 'Согласшение на обработку персональных данных',
        href: '/personal-data-agreement',
    },
    {
        id: 2,
        text: 'Политика конфиденциальности',
        href: '/privacy-policy',
    },
    {
        id: 3,
        text: '© 2025 Все права защищены',
        href: '',
    },
];

const Legality: FC = () => {
    return (
        <ul className="flex flex-col md:flex-row md:justify-between gap-1 text w-full">
            {data.map((item) => {
                return (
                    <li
                        key={item.text + item.id}
                        className={twMerge(
                            'w-[100%] md:w-[33%]',
                            item.id != 1 && item.id != 3
                                ? 'text-center'
                                : item.id == 1
                                ? 'text-center md:text-start'
                                : 'text-center md:text-end',
                        )}>
                        {item.href ? (
                            <Link
                                href={item.href}
                                className="transition-all duration-300 hover:text-orange">
                                {item.text}
                            </Link>
                        ) : (
                            <p>{item.text}</p>
                        )}
                    </li>
                );
            })}
        </ul>
    );
};

export default Legality;
