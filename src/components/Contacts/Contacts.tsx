'use client';

import { FC, Suspense } from 'react';
import ContactForm from './ContactForm';
import ConeModelWithLight from '../Models/ConeModel/ConeModelWithLight';
import { View } from '../CanvasPortal/View';
import TorModelWithLight from '../Models/TorModel/TorModelWithLight';
import { useNavStore } from '@/src/store/navStore';

/**
 * Секция связи
 */
const Contacts: FC = () => {
    const { activeId } = useNavStore();
    const isActive = activeId == 4;
    return (
        <>
            <div className="lg:h-full overflow-hidden relative">
                <ContactForm />
            </div>
            <View className="absolute top-[43%] md:top-[76%] left-0 h-[20vw] w-[20vw] ">
                <Suspense fallback={null}>
                    <ConeModelWithLight active={isActive} />
                </Suspense>
            </View>
            <View className="absolute top-[13%] md:-top-[53%] -right-[10vw] h-[30vw] w-[30vw] ">
                <Suspense fallback={null}>
                    <TorModelWithLight active={isActive} />
                </Suspense>
            </View>
        </>
    );
};

export default Contacts;
