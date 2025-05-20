'use client';

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import Case from './Case';
import Button from '../ui/Button';
import Link from 'next/link';

export default function Cases() {
    const cards = ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5', 'Card 6'];
    const swiperRef = useRef<SwiperType | null>(null);
    const [activeId, setActiveId] = useState(0);

    return (
        <div className="mt-16 md:mt-6 text-center">
            <Swiper
                effect="coverflow"
                modules={[EffectCoverflow]}
                centeredSlides
                slidesPerView={2.4}
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

            <Link href="#" className="mt-10 md:mt-24 block heading-h3">
                Посмотреть все
            </Link>
        </div>
    );
}
