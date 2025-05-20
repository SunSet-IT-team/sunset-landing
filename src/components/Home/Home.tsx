'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

const Home: FC = () => {
    return (
        <main>
            <h1 className="heading">
                <strong className="text-orange">SunSet IT</strong> —<br />
                <strong className="text-blue-200">digital-команда</strong> для вашего бизнеса
            </h1>
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
