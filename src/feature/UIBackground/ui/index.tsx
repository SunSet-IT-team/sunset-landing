'use client';

import Container from '@/src/components/ui/Container';
import GradientCircle from './GradientСircle';
import { useNavStore } from '@/src/store/navStore';

/**
 * Задний фон для интеракивных элементов
 */
const UIBackground = () => {
    const { activeId } = useNavStore();

    const hiddenClass = '!opacity-0 !w-0 !h-0';

    const g1 =
        'w-[200vw] h-[200vw] md:w-[1588px] md:h-[1588px] left-0 top-0 -translate-y-1/2 md:-translate-y-1/4 -translate-x-1/2';
    const g2 =
        'w-[200vw] h-[200vw] md:w-[1208px] md:h-[1208px] left-[50%] md:left-[20%] top-[40%] md:top-[40%] -translate-y-1/2 -translate-x-1/2';
    const g3 =
        'w-[200vw] h-[200vw] md:w-[1208px] md:h-[1208px] right-0 md:left-0 translate-x-1/2 md:right-[unset] top-0 md:-translate-y-1/2 md:translate-x-0';
    const g4 =
        'w-[200vw] h-[200vw] md:w-[1208px] md:h-[1208px] left-0 md:left-[unset] right-0 bottom-0 md:bottom-[unset] md:top-[40%] translate-y-1/2 md:-translate-y-1/2 -translate-x-1/4 md:translate-x-1/4';

    return (
        <div className="fixed inset-0 mix-blend-hard-light pointer-events-none">
            <Container className="relative h-full visible">
                <GradientCircle className={`${g1} ${activeId == 1 ? '' : hiddenClass}`} />
                <GradientCircle className={`${g2} ${activeId == 2 ? '' : hiddenClass}`} />
                <GradientCircle className={`${g3} ${activeId == 3 ? '' : hiddenClass}`} />
                <GradientCircle className={`${g4} ${activeId == 4 ? '' : hiddenClass}`} />
            </Container>
        </div>
    );
};

export default UIBackground;
