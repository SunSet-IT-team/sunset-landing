'use client';

import { useNavStore } from '@/src/store/navStore';

/**
 * Гланая фотка для стартовой секции
 */
const HomeLogo = () => {
    const { activeId } = useNavStore();
    const isActive = activeId == 1;
    return (
        <div
            className={`h-[50vw] w-[50vw] max-w-[500px] max-h-[500px] absolute z-30 bottom-[10%] pointer-events-none
                    transition-all duration-300 ease-in-out
                ${!isActive ? 'right-[110%] opacity-0' : 'right-[5%] opacity-100'}
                `}
            style={{
                backgroundImage: `url('/home_logo.webp')`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        />
    );
};

export default HomeLogo;
