'use client';
import { useNavStore } from '@/src/store/navStore';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
const Logo: FC = () => {
    const { setActiveId } = useNavStore();
    return (
        <Link
            href="/"
            className="flex items-center text-2xl gap-2"
            onClick={() => {
                setActiveId(1);
            }}>
            <Image alt="Логотип компании Sunset" src={'/logo.webp'} width={73} height={81} />
            Sunset
        </Link>
    );
};

export default Logo;
