'use client';

import { FC, Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { View } from '../CanvasPortal/View';
import { useNavStore } from '@/src/store/navStore';
import { LogoAnimationModelWithLight } from '../Models/LogoAnimationModel/LogoAnimationModelWithLight';

const Home: FC = () => {
    const phrases = ['digital-команда', 'двигатель', 'делаем сайты', 'делаем приложения'];
    const [index, setIndex] = useState(0);

    const { activeId } = useNavStore();
    const isActive = activeId == 1;

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((i) => (i + 1) % phrases.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main>
            <h1 className="heading">
                <strong className="text-orange">SunSet IT</strong> —<br />
                <motion.div
                    key={phrases[index]}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.6 }}>
                    <strong className="text-blue-200">{phrases[index]}</strong>
                </motion.div>{' '}
                для вашего бизнеса
            </h1>
            <p className="mt-10 text">
                Мы&nbsp;&mdash; за&nbsp;ясные планы, прозрачные результаты и&nbsp;спокойный сон
                заказчика. Помогаем малому и&nbsp;среднему бизнесу быстро запустить, улучшить или
                обновить сайты, веб-приложения и&nbsp;другие цифровые продукты под ключ.
            </p>
            <p className="mt-2 text">
                К&nbsp;нам приходят с&nbsp;идеей&nbsp;&mdash; а&nbsp;уходят с&nbsp;результатом.
            </p>
            {/* <View className="absolute h-[50vw] w-[50vw]">
                <Suspense fallback={null}>
                    <LogoAnimationModelWithLight />
                </Suspense>
            </View> */}
        </main>
    );
};

export default Home;
