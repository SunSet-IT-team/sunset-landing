'use client';

import { FC, useEffect, useState } from 'react';
import ContactForm from './ContactForm';
import { useNavStore } from '@/src/share/store/navStore';
import { metrika, MetrikGoal } from '@/src/feature/Metrika/MetrikSender';
import View3DLoader from '@/src/feature/3d/helpers/components/View3DLoader';
import dynamic from 'next/dynamic';
import { Html } from '@react-three/drei';
import OrangeNotification from '@/src/share/ui/Notifications/OrangeNotification';
import { FaTelegramPlane } from 'react-icons/fa';

const DynamicConeWithLight = dynamic(
    () => import('../../../share/models/ConeModel/ConeModelWithLight'),
    {
        ssr: false,
        loading: () => null,
    },
);

const DynamicTorModelWithLight = dynamic(
    () => import('../../../share/models/TorModel/TorModelWithLight'),
    {
        ssr: false,
        loading: () => null,
    },
);

/**
 * Секция связи
 */
const Contacts: FC = () => {
    const { activeId, isSectionChanged } = useNavStore();
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
                className="max-w-[220px] md:max-w-[340px]  mb-[-4vh] md:mb-[2vh]"
                hidden={!isActive}
                isOpen={isNotificationOpen}
                setIsOpen={setIsNotificationOpen}>
                <div className="flex flex-col text-descr text-[16px] gap-2">
                    <div className="flex flex-row gap-4 items-center">
                        <a
                            href="tel:+79937287798"
                            className="cursor-target"
                            onClick={() => metrika(MetrikGoal.CLICK_PHONE)}>
                            +7 993 728 77 98
                        </a>
                        <a
                            href="https://t.me/sunset_digital_team"
                            target="_blank"
                            onClick={() => {
                                metrika(MetrikGoal.GO_MEDIA, {
                                    type: 'Telegram',
                                });
                                metrika(MetrikGoal.GO_TELEGRAM);
                            }}>
                            <FaTelegramPlane className="w-[20px] h-[20px]" />
                        </a>
                    </div>
                    <a
                        href="mailto:manager@sunset-it.agency"
                        className="cursor-target"
                        onClick={() => metrika(MetrikGoal.CLICK_EMAIL)}>
                        manager@sunset-it.agency
                    </a>
                </div>
            </OrangeNotification>
            {isSectionChanged && (
                <>
                    <View3DLoader className="fixed -bottom-[10vw] md:bottom-[unset] md:top-[76%] left-0 md:left-[20%] xl:left-[45%]  h-[50vw] md:h-[20vw] w-[50vw] md:w-[20vw] ">
                        <DynamicConeWithLight active={isActive} />
                    </View3DLoader>
                    <View3DLoader className="fixed top-[10%] w-[300px] -right-[20vw] md:-top-[13%] md:-right-[10vw] h-[50vw] md:h-[30vw] md:w-[30vw]">
                        <DynamicTorModelWithLight active={isActive} />
                    </View3DLoader>
                </>
            )}
        </>
    );
};

export default Contacts;
