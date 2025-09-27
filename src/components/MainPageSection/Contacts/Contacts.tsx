'use client';

import { FC, Suspense, useEffect, useState } from 'react';
import ContactForm from './ContactForm';
import { useNavStore } from '@/src/store/navStore';
import ConeModelWithLight from '../../Models/ConeModel/ConeModelWithLight';
import TorModelWithLight from '../../Models/TorModel/TorModelWithLight';
import { View } from '../../CanvasPortal/View';
import OrangeNotification from '../../ui/Notifications/OrangeNotification';

/**
 * Секция связи
 */
const Contacts: FC = () => {
    const { activeId } = useNavStore();
    const isActive = activeId == 4;

    const [isNotificationOpen, setIsNotificationOpen] = useState<boolean>(false);
    // Если секция не активная - закрываем уведомление, иначе - показываем
    useEffect(() => {
        if (!isActive) setIsNotificationOpen(false);
        else setIsNotificationOpen(true);
    }, [activeId]);

    return (
        <>
            <div className="lg:h-full overflow-hidden relative z-10">
                <ContactForm />
            </div>
            <OrangeNotification
                align="left"
                title="Не хотите ждать?"
                className="max-w-[220px] mb-[-4vh] md:mb-[2vh]"
                hidden={!isActive}
                isOpen={isNotificationOpen}
                setIsOpen={setIsNotificationOpen}>
                <div className="flex flex-col text-descr text-[16px] gap-2">
                    <a href="tel:+79937287798">+7 993 728 77 98</a>
                    <a href="mailto:manager@sunset-it.agency">manager@sunset-it.agency</a>
                </div>
            </OrangeNotification>
            <View className="fixed -bottom-[10vw] md:bottom-[unset] md:top-[76%] left-0 md:left-[20%] xl:left-[45%]  h-[50vw] md:h-[20vw] w-[50vw] md:w-[20vw] ">
                <Suspense fallback={null}>
                    <ConeModelWithLight active={isActive} />
                </Suspense>
            </View>
            <View className="fixed top-[10%] w-[300px] -right-[20vw] md:-top-[13%] md:-right-[10vw] h-[50vw] md:h-[30vw] md:w-[30vw]">
                <Suspense fallback={null}>
                    <TorModelWithLight active={isActive} />
                </Suspense>
            </View>
        </>
    );
};

export default Contacts;
