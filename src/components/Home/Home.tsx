'use client';

import { FC } from 'react';
import { useNavStore } from '@/src/store/navStore';
import TypeSlogan from './TypeSlogan';

const Home: FC = () => {
    const { activeId } = useNavStore();
    const isActive = activeId == 1;

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

            {/* <View className="absolute h-[50vw] w-[50vw]">
                <Suspense fallback={null}>
                    <LogoAnimationModelWithLight />
                </Suspense>
            </View> */}
        </main>
    );
};

export default Home;
