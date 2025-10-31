'use client';
import { useNavStore } from '@/src/share/store/navStore';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

/**
 * Лого для лендинга
 */
const LogoLanding: FC = () => {
    const { setActiveId } = useNavStore();
    return (
        <Link
            href="/"
            className="flex items-center main-heading gap-2 pointer-events-auto cursor-target"
            onClick={() => setActiveId(1)}>
            <div className="relative w-[35px] h-[37px] md:w-[50px] md:h-[52px] lg:w-[73px] lg:h-[81px] ">
                <Image
                    alt="Логотип компании Sunset"
                    src="/logo.webp"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 35px, 37px (max-width: 1024px) 50px, 52px"
                />
            </div>
            <span className="main-heading">Sunset</span>
        </Link>
    );
};

export default LogoLanding;
