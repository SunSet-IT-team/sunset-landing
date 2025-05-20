'use client';
import { motion } from 'framer-motion';
import type { Swiper as SwiperType } from 'swiper';
import Link from 'next/link';
import { getRotation, useFrames, useTilt } from './anims';

interface Props {
    id: number;
    img: string;
    isActive: boolean;
    isPrev: boolean;
    isNext: boolean;
    activeId: number;
    total: number;
    swiper: SwiperType | null;
}

/**
 * Карточка кейса
 */
export default function Case({
    id,
    img,
    isActive,
    activeId,
    isPrev,
    isNext,
    swiper,
    total,
}: Props) {
    const frames = useFrames(activeId);
    const rotate = getRotation(isActive, id, activeId, total);

    const { ref, rotateX, rotateY } = useTilt(isActive, 24);

    return (
        <Link
            href="#"
            onClick={(e) => {
                if (isActive || !swiper) return;

                e.preventDefault();

                if (isPrev) swiper.slidePrev();
                if (isNext) swiper.slideNext();
            }}>
            <motion.div
                className={'relative w-full h-[350px] rounded-xl overflow-hidden bg-white'}
                ref={ref}
                initial={{
                    scale: 0.85,
                    rotate: rotate,
                    x: frames.xKeyframes[0],
                    y: frames.yKeyframes[0],
                }}
                animate={{
                    scale: isActive ? 1 : 0.85,
                    rotate: rotate,
                    x: isActive ? 0 : frames.xKeyframes,
                    y: isActive ? 0 : frames.yKeyframes,
                    ...(isActive && { zIndex: 1 }),
                }}
                transition={{
                    duration: isActive ? 3 : 8,
                    ease: 'easeInOut',
                    repeat: isActive ? 0 : Infinity,
                    repeatType: 'mirror',
                }}
                style={{
                    perspective: 1000, // глубина
                    rotateX,
                    rotateY,
                }}
                key={id}>
                <div
                    className="w-full h-full bg-center bg-cover text-sm text-neutral-900 text"
                    style={{ backgroundImage: `url(${img})` }}></div>
            </motion.div>
        </Link>
    );
}
