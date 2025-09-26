'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { getRotation, useFrames, useTilt } from './anims';
import { metrika, MetrikGoal } from '@/src/feature/Metrika/MetrikSender';

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
export default function NewCase({
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
                rounded-[10px] overflow-hidden bg-white
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
                    <div className="absolute w-full top-[15px] left-[15px] right-1 flex flex-row gap-2 flex-wrap">
                        {caseData.tags.map((tag) => (
                            <p
                                className="w-fit px-1 py-[1px] rounded-[4px] mb-0 bg-blue-400 text-tag"
                                key={tag}>
                                #{tag}
                            </p>
                        ))}
                    </div>
                )}

                <div
                    className={`relative w-full lg:min-h-[50%] min-h-[40%] bg-blue-400 text-left rounded-tl-[8px] rounded-tr-[8px]`}>
                    <div className="p-[15px] pt-[30px] lg:pt-[20px] lg:px-[8px] flex flex-col h-full items-start">
                        <h3 className="heading-h3 mb-2">{caseData.title}</h3>
                        <p
                            className="text lg:text-[16px] mb-4 flex-grow-[1]"
                            dangerouslySetInnerHTML={{ __html: caseData.description }}></p>
                        <a
                            target="_blank"
                            href={caseData.link}
                            onClick={() =>
                                metrika(MetrikGoal.GO_PORTFOLIO, {
                                    portfolioName: caseData.title,
                                })
                            }
                            className="text-button text-center w-full lg:w-full sm:w-auto rounded-[4px] bg-black py-2 px-[25px] transition-all duration-300 hover:bg-white hover:text-black">
                            Взглянуть
                        </a>
                    </div>
                </div>
            </article>
        </motion.div>
    );
}
