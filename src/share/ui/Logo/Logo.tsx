import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

/**
 * Лого
 */
const Logo: FC = () => {
    return (
        <Link
            href="/"
            className="flex pointer-events-auto items-center cursor-target cursor-pointer">
            <div className="relative w-[35px] h-[37px] md:w-[50px] md:h-[52px] ">
                <Image
                    alt="Логотип компании Sunset"
                    src="/logo.webp"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 35px, 37px (max-width: 1024px) 50px, 52px"
                />
            </div>
            <span className="heading-h3 ml-2">Sunset</span>
        </Link>
    );
};

export default Logo;
