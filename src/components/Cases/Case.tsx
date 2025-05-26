'use client';
import { motion } from 'framer-motion';
import type { Swiper as SwiperType } from 'swiper';
import Link from 'next/link';
import Image from 'next/image';
import { getRotation, useFrames, useTilt } from './anims';
import { metrika, MetrikGoal } from '@/src/feature/metrika/MetrikSender';

export type CasePreview = {
    id?: number;
    logo?: string;
    bg?: string;
    title?: string;
    description?: string;
    link?: string;
    tags?: string[];
    to?: string;
};

interface Props {
    id: number;
    isActive: boolean;
    isPrev: boolean;
    isNext: boolean;
    activeId: number;
    total: number;
    changeSlide: (direction: 'prev' | 'next') => void;
    caseData: CasePreview;
}

/**
 * Карточка кейса
 */
export default function Case({
    id,
    isActive,
    activeId,
    isPrev,
    isNext,
    changeSlide,
    total,
    caseData,
}: Props) {
    const frames = useFrames(activeId);
    const rotate = getRotation(isActive, id, activeId, total);

    const { ref, rotateX, rotateY } = useTilt(isActive, 24);

    return (
        <motion.div
            onClick={() => {
                if (isPrev) changeSlide('prev');
                if (isNext) changeSlide('next');
            }}
            className={`relative w-full h-[40vh] md:min-h-[350px] lg:h-[50vh] 
                rounded-xl overflow-hidden bg-white
                ${isActive ? '' : 'cursor-pointer'}`}
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
            <article
                className="w-full h-full bg-center bg-cover relative bg-white flex flex-col justify-end"
                style={{
                    backgroundImage: `url(${caseData.bg || ''})`,
                }}>
                <div
                    className="relative w-full h-[40%] -top-[0.45rem]"
                    style={{
                        backgroundImage: `linear-gradient(180deg, #ffffff45, #ffffffcf 80%, #ffffff)`,
                    }}>
                    {caseData.logo && (
                        <Image
                            className="mx-auto mt-10 md:mt-12 h-[50px] md:h-[90px] object-contain object-center"
                            src={caseData.logo}
                            alt={`Логотип ${caseData.title}`}
                            width={90}
                            height={90}
                        />
                    )}
                </div>

                {caseData.tags && caseData.tags.length > 0 && (
                    <div className="absolute w-full top-2 left-1 right-1 flex flex-row gap-2 flex-wrap">
                        {caseData.tags.map((tag) => (
                            <p
                                className="w-fit px-1 py-[1px]  rounded-[8px] mb-0 bg-orange text-tag"
                                key={tag}>
                                #{tag}
                            </p>
                        ))}
                    </div>
                )}

                <div
                    className={`relative w-full h-[60%] `}
                    style={{
                        background: `linear-gradient(to bottom, var(--orange) ${
                            caseData.to ? `, ${caseData.to}` : ', var(--blue-400)'
                        }`,
                    }}>
                    <svg
                        className="absolute -top-2 left-0 w-full"
                        viewBox="0 0 1440 150"
                        preserveAspectRatio="none">
                        <path
                            fill="#ffffff"
                            d="M0,64L48,90.7C96,117,192,171,288,170.7C384,171,480,117,576,85.3C672,53,768,43,864,64C960,85,1056,139,1152,160C1248,181,1344,171,1392,165.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                    </svg>
                    <div className="pt-[40px] pb-6 px-2 flex flex-col h-full">
                        <h3 className="heading-h3 mb-2">{caseData.title}</h3>
                        <p
                            className="text mb-4 flex-grow-[1]"
                            dangerouslySetInnerHTML={{ __html: caseData.description }}></p>
                        <a
                            target="_blank"
                            href={caseData.link}
                            onClick={() =>
                                metrika(MetrikGoal.GO_PORTFOLIO, {
                                    portfolioName: caseData.title,
                                })
                            }
                            className="text-button rounded-lg border-[1px] border-white border-solid px-2 py-1 
                            w-full transition-all duration-300 hover:bg-white hover:text-orange">
                            Взглянуть
                        </a>
                    </div>
                </div>
            </article>
        </motion.div>
    );
}
