'use client';

import { FC } from 'react';
import TypeSlogan from './TypeSlogan';

const Home: FC = () => {
    return (
        <main>
            <TypeSlogan />
            <p className="mt-10 text">
                Мы&nbsp;&mdash; за&nbsp;ясные планы, прозрачные результаты и&nbsp;спокойный сон
                заказчика. Помогаем малому и&nbsp;среднему бизнесу быстро запустить, улучшить или
                обновить сайты, веб-приложения и&nbsp;другие цифровые продукты под ключ.
            </p>
            <p className="mt-2 text">
                К&nbsp;нам приходят с&nbsp;идеей&nbsp;&mdash; а&nbsp;уходят с&nbsp;результатом.
            </p>
        </main>
    );
};

export default Home;
