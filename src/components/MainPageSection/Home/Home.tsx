'use client';

import { FC } from 'react';
import TypeSlogan from './TypeSlogan';
import { isWebGLSupported } from '@/src/utils/share';

const Home: FC = () => {
    return (
        <div className="max-w-[calc(100%-70px)] mr-[70px] pointer-events-auto relative">
            <main className="w-full">
                <TypeSlogan />
                <p className="mt-10 text">
                    navigator - {navigator.webdriver ? 'да' : 'neet'} <br />
                    navigator.hardwareConcurrency - {navigator.hardwareConcurrency} <br />
                    ramGB - {(navigator as any).deviceMemory || 4} <br />
                    isWebGLSupported - {isWebGLSupported() ? 'да' : 'neet'} <br />
                </p>
                <p className="mt-10 text">
                    Мы&nbsp;&mdash; за&nbsp;ясные планы, прозрачные результаты и&nbsp;спокойный сон
                    заказчика. Помогаем малому и&nbsp;среднему бизнесу быстро запустить, улучшить
                    или обновить сайты, веб-приложения и&nbsp;другие цифровые продукты под ключ.
                </p>
                <p className="mt-2 text">
                    К&nbsp;нам приходят с&nbsp;идеей&nbsp;&mdash; а&nbsp;уходят с&nbsp;результатом.
                </p>
            </main>
        </div>
    );
};

export default Home;
