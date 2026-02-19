'use client';

import { metrika, MetrikGoal } from '@/src/feature/Metrika/MetrikSender';
import { FC } from 'react';
import { FaInstagram, FaTelegramPlane, FaVk, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';

const data = [
    {
        id: 1,
        icon: <FaTelegramPlane className="w-[24px] mdw-[38px] h-[24px] md:h-[38px]" />,
        src: 'https://t.me/sunset_digital_team',
        type: 'Telegram',
        metrik: MetrikGoal.GO_TELEGRAM,
    },
    {
        id: 2,
        icon: <FaYoutube className="w-[24px] mdw-[38px] h-[24px] md:h-[38px]" />,
        src: 'https://www.youtube.com/@SunSetIT',
        type: 'YouTube',
        metrik: MetrikGoal.GO_YOUTUBE,
    },
    {
        id: 3,
        icon: <FaInstagram className="w-[24px] mdw-[38px] h-[24px] md:h-[38px]" />,
        src: 'https://www.instagram.com/sunset_digital_team/',
        type: 'Instagram',
        metrik: MetrikGoal.GO_INSTAGRAM,
    },
    {
        id: 4,
        icon: (
            <Image
                src="/icons/workspace.svg"
                alt="Workspace"
                className="w-[52px] h-[24px] md:h-[38px] object-contain"
                width={52}
                height={24}
            />
        ),
        src: 'https://workspace.ru/contractors/sunset-it/',
        type: 'WorkSpace',
        metrik: MetrikGoal.GO_WORKSPACE,
    },
    // {
    // 	id: 4,
    // 	icon: <FaVk size={38} />,
    // 	src: '',
    // },
];

const SocialMedia: FC = () => {
    return (
        <ul className="flex gap-5 justify-center">
            {data.map((item) => {
                return (
                    <li key={'social' + item.id}>
                        <a
                            href={item.src}
                            target="_blank"
                            className="cursor-target"
                            onClick={() => {
                                metrika(MetrikGoal.GO_MEDIA, {
                                    type: item.type,
                                });
                                metrika(item.metrik);
                            }}>
                            {item.icon}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};

export default SocialMedia;
