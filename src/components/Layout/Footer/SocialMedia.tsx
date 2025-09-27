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
    },
    {
        id: 2,
        icon: <FaYoutube className="w-[24px] mdw-[38px] h-[24px] md:h-[38px]" />,
        src: 'https://www.youtube.com/@SunSetIT',
        type: 'YouTube',
    },
    {
        id: 3,
        icon: <FaInstagram className="w-[24px] mdw-[38px] h-[24px] md:h-[38px]" />,
        src: 'https://www.instagram.com/sunset_digital_team/',
        type: 'Instagram',
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
                            onClick={() =>
                                metrika(MetrikGoal.GO_MEDIA, {
                                    type: item.type,
                                })
                            }>
                            {item.icon}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};

export default SocialMedia;
