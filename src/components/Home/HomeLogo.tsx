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
            className={`max-w-[300px] max-h-[300px] lg:max-w-[350px] lg:max-h-[350px]  xl:max-w-[500px] xl:max-h-[500px]
                   h-[50vw] w-[50vw]  absolute z-30 
                    
                    transition-all duration-300 ease-in-out
                ${
                    !isActive
                        ? 'bottom-[150%] md:bottom-[7%] right-[105%] md:right-[110%] opacity-0'
                        : 'bottom-[25%] sm:bottom-[15%] right-[5%] md:right-[1%] md:bottom-[7%] opacity-100'
                }
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
