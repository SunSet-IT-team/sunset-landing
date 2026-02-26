'use client';

import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import Case, { CasePreview } from './Case';
import { data } from './data';
import { useNavStore } from '@/src/share/store/navStore';
import { twMerge } from 'tailwind-merge';
import NewCase from './NewCase';
import OrangeNotification from '@/src/share/ui/Notifications/OrangeNotification';
import Link from 'next/link';
import Button from '@/src/share/ui/Button';

/**
 * Секция с примерами проектов
 */
export default function Cases() {
    const swiperRef = useRef<SwiperType | null>(null);
    const [activeId, setActiveId] = useState(0);
    const { activeId: sectionActiveId } = useNavStore();

    const isActive = sectionActiveId == 2;

    // Скрывать уведомление вместе со стрелочкой
    const [isNotificationOpen, setIsNotificationOpen] = useState<boolean>(true);
    const [displayedNotificationCard, setDisplayedNotificationCard] = useState<CasePreview>(
        data[activeId],
    );

    // Если секция не активная - закрываем уведомление, иначе - показываем
    useEffect(() => {
        if (!isNotificationOpen) setIsNotificationOpen(false);
        else setIsNotificationOpen(true);
    }, [sectionActiveId]);

    /**
     * Переключить на следующий или предыдущий слайд
     */
    const handleSlideChange = (direction: 'prev' | 'next') => {
        if (!swiperRef.current) return;
        direction === 'prev' ? swiperRef.current.slidePrev() : swiperRef.current.slideNext();
    };

    const onRealIndexChange = (s: SwiperType) => {
        const prevIsNotificationOpen = isNotificationOpen;
        setIsNotificationOpen(false);
        setActiveId(s.realIndex);

        setTimeout(() => {
            setDisplayedNotificationCard(data[s.realIndex]);
            // Чтобы если 1 раз скрыли - не показывлось снова
            prevIsNotificationOpen && setIsNotificationOpen(true);
        }, 800);
    };

    return (
        <div className="mt-16 md:mt-6 text-center">
            <Swiper
                effect="coverflow"
                modules={[EffectCoverflow]}
                centeredSlides
                slidesPerView={1.5}
                // loop
                loopAdditionalSlides={2}
                spaceBetween={0}
                slideToClickedSlide={true}
                onRealIndexChange={onRealIndexChange}
                coverflowEffect={{
                    rotate: 20,
                    depth: 350,
                    modifier: 1,
                    slideShadows: false,
                }}
                breakpoints={{
                    768: {
                        slidesPerView: 2.5,
                        spaceBetween: 40,
                    },
                }}
                onSwiper={(s) => (swiperRef.current = s)}
                className="mx-auto max-w-[830px] py-10 overflow-hidden swiper-cards">
                {data.map((card, i) => {
                    const total = data.length;
                    const prevIndex = (activeId - 1 + total) % total;
                    const nextIndex = (activeId + 1) % total;

                    return (
                        <SwiperSlide key={card.id} className="flex justify-center items-center">
                            <NewCase
                                id={card.id}
                                isActive={activeId === i}
                                isPrev={i === prevIndex}
                                isNext={i === nextIndex}
                                activeId={activeId}
                                changeSlide={handleSlideChange}
                                total={total}
                                caseData={card}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            {displayedNotificationCard && (
                <OrangeNotification
                    title={displayedNotificationCard.title}
                    isOpen={isNotificationOpen}
                    setIsOpen={setIsNotificationOpen}
                    align="right"
                    className="mb-[12vh] md:mb-[2vh]"
                    hidden={!isActive}>
                    <div
                        className={twMerge('max-w-none md:max-w-[445px] text-descr text-[16px]')}
                        dangerouslySetInnerHTML={{
                            __html: displayedNotificationCard.description,
                        }}></div>
                </OrangeNotification>
            )}

            <Link
                href="/cases"
                className="mt-10 md:mt-24 block mx-auto heading-h3 underline transition hover:text-orange text-center md:text-left xl:text-center">
                Посмотреть все
            </Link>
        </div>
    );
}
