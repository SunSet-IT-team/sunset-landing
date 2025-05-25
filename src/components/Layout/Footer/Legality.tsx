import { FC } from 'react';

const data = [
    // {
    // 	id: 1,
    // 	text: 'Правила пользования платформой',
    // 	src: '',
    // },
    // {
    // 	id: 2,
    // 	text: 'Политика конфиденциальности',
    // 	src: '',
    // },
    {
        id: 3,
        text: 'Все права защищены',
        src: '',
    },
];

const Legality: FC = () => {
    return (
        <ul className="flex flex-col gap-1 text w-56">
            {data.map((item) => {
                return (
                    <li key={item.text + item.id} className="text-center">
                        {item.src ? <a href={item.src}>{item.text}</a> : <p>{item.text}</p>}
                    </li>
                );
            })}
        </ul>
    );
};

export default Legality;
