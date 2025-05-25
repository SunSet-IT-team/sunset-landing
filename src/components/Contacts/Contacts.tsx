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
            <div className="lg:h-full overflow-hidden relative z-10">
                <ContactForm />
            </div>
            <View className="absolute -bottom-[10vw] md:bottom-[unset] md:top-[76%] left-0 h-[50vw] md:h-[20vw] w-[50vw] md:w-[20vw] ">
                <Suspense fallback={null}>
                    <ConeModelWithLight active={isActive} />
                </Suspense>
            </View>
            <View className="absolute -top-[30%] w-[300px] -right-[20vw] md:-top-[53%] md:-right-[10vw] md:h-[30vw] md:w-[30vw]">
                <Suspense fallback={null}>
                    <TorModelWithLight active={isActive} />
                </Suspense>
            </View>
        </>
    );
};

export default Contacts;
