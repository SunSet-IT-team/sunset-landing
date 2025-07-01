'use client';

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import Case from './Case';
import { data } from './data';

/**
 * Секция с примерами проектов
 */
export default function Cases() {
    const swiperRef = useRef<SwiperType | null>(null);
    const [activeId, setActiveId] = useState(0);

    /**
     * Переключить на следующий или предыдущий слайд
     */
    const handleSlideChange = (direction: 'prev' | 'next') => {
        if (!swiperRef.current) return;
        direction === 'prev' ? swiperRef.current.slidePrev() : swiperRef.current.slideNext();
    };

    return (
        <div className="mt-16 md:mt-6 text-center">
            <Swiper
                effect="coverflow"
                modules={[EffectCoverflow]}
                centeredSlides
                slidesPerView={1.5}
                loop
                loopAdditionalSlides={2}
                spaceBetween={0}
                onRealIndexChange={(s) => setActiveId(s.realIndex)}
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
                            <Case
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

            {/* <Link href="#" className="mt-10 md:mt-24 block heading-h3">
                Посмотреть все
            </Link> */}
        </div>
    );
}
