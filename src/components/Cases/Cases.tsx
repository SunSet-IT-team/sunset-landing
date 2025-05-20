'use client';

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import Case from './Case';
import Button from '../ui/Button';

export default function Cases() {
    const cards = ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5', 'Card 6'];
    const swiperRef = useRef<SwiperType | null>(null);
    const [activeId, setActiveId] = useState(0);

    return (
        <div className="px-16 mt-6 text-center">
            <Swiper
                effect="coverflow"
                modules={[EffectCoverflow]}
                centeredSlides
                slidesPerView={2.5}
                loop
                loopAdditionalSlides={2}
                spaceBetween={40}
                onRealIndexChange={(s) => setActiveId(s.realIndex)}
                coverflowEffect={{
                    rotate: 20,
                    depth: 350,
                    modifier: 1,
                    slideShadows: false,
                }}
                onSwiper={(s) => (swiperRef.current = s)}
                className="mx-auto max-w-[830px] py-10 overflow-hidden swiper-cards">
                {cards.map((card, i) => {
                    const total = cards.length;
                    const prevIndex = (activeId - 1 + total) % total;
                    const nextIndex = (activeId + 1) % total;

                    return (
                        <SwiperSlide key={card} className="flex justify-center items-center">
                            <Case
                                id={i}
                                img=""
                                isActive={activeId === i}
                                isPrev={i === prevIndex}
                                isNext={i === nextIndex}
                                activeId={activeId}
                                swiper={swiperRef.current}
                                total={total}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            <Button className="mt-10 p-5">Посмотреть все</Button>
        </div>
    );
}
