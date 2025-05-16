'use client';

import { FC } from 'react';
import NavItem from './NavItem';
import { useNavStore } from '@/src/store/navStore';
import { sections } from '@/src/data/data';

const Navbar: FC = () => {
    const { styles } = useNavStore();
    return (
        <nav>
            <ul className="">
                {sections.map((item) => {
                    if (item.id === 1) return null;
                    return (
                        <NavItem
                            key={item.id + item.text + item.href}
                            href={item.href}
                            id={item.id}
                            styles={styles[item.id]}
                            text={item.text}
                        />
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navbar;
