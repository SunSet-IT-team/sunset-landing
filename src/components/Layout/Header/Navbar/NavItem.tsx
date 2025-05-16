'use client';

import { DynamicCircleModel } from '@/src/components/Models';
import CirclesLight from '@/src/components/Models/Circles/CirclesLight';
import Button from '@/src/components/ui/Button';
import { CLOSED_MENU_ITEM_WIDTH, ANIMATION_DURATION } from '@/src/data/constants';
import { sections } from '@/src/data/data';
import { useNavStore } from '@/src/store/navStore';
import { IStyle } from '@/src/types/main';
import { View } from '@react-three/drei';
import { motion } from 'framer-motion';
import { FC, Suspense } from 'react';
import { twMerge } from 'tailwind-merge';
import { Euler, Vector3 } from 'three';

interface IProps {
    id: number;
    text: string;
    styles: IStyle;
    href: string;
}

const NavItem: FC<IProps> = ({ id, styles, text, href }) => {
    const { activeId, setActiveId, stack } = useNavStore();

    return (
        <motion.li
            onClick={() => {
                setActiveId(id);
            }}
            initial={{
                width: CLOSED_MENU_ITEM_WIDTH,
                right: (sections.length - id) * CLOSED_MENU_ITEM_WIDTH,
                top: styles.top === 0 ? '50%' : styles.top,
                transform: styles.top === 0 ? 'translateY(-3%)' : 'none',
            }}
            animate={{
                right: styles.right,
                top: styles.top === 0 ? '50%' : styles.top,
                transform: styles.top === 0 ? 'translateY(-3%)' : 'none',
                width: styles.width,
            }}
            transition={{ duration: ANIMATION_DURATION, type: 'spring' }}
            key={text + href + id}
            className={twMerge(
                'pl-5 absolute top-0 h-[calc(100vh)] before:w-0.5 before:h-[calc(100vh+100px)] before:absolute before:-top-[130px] before:bottom-10 before:left-0 before:bg-grey',
                id === 2 && stack.includes(2) && 'before:-left-20',
                `right-[${styles.right}px]`,
            )}>
            <Button className={twMerge('text-lg p-3', activeId === id && 'text-blue-300')}>
                {text}

                {id === 2 && (
                    <>
                        <View
                            className={twMerge(
                                'absolute bottom-10 w-full -right-[250px]  h-[500px]',
                                (activeId === id || stack.includes(id)) &&
                                    'left-0 right-0 bottom-36 w-[200px]',
                            )}>
                            <Suspense fallback={null}>
                                <DynamicCircleModel
                                    rotation={new Euler(0.0, 6.11, 0.0)}
                                    position={new Vector3(2.84, -3.36, 0.0)}
                                    scale={new Vector3(5.57, 5.57, 5.57)}
                                />
                                <CirclesLight />
                            </Suspense>
                        </View>
                    </>
                )}
                {id === 3 && (
                    <>
                        <View
                            className={twMerge(
                                'absolute bottom-10 -right-[125px] w-full h-[500px]',
                                (activeId === id || stack.includes(id)) &&
                                    '-left-[140px] right-0 bottom-36  w-[200px]',
                            )}>
                            <Suspense fallback={null}>
                                <DynamicCircleModel
                                    rotation={new Euler(0.0, 0, 0.0)}
                                    position={new Vector3(2.81, -3.92, 0.0)}
                                    scale={new Vector3(6.7, 6.7, 6.7)}
                                />
                                <DynamicCircleModel
                                    rotation={new Euler(0.0, 6.13, 0.0)}
                                    position={new Vector3(4.94, -4.86, 0.0)}
                                    scale={new Vector3(8.88, 8.88, 8.88)}
                                />
                                <CirclesLight />
                                <CirclesLight />
                            </Suspense>
                        </View>
                    </>
                )}
                {id === 4 && (
                    <>
                        <View
                            className={twMerge(
                                'absolute bottom-10  w-full h-[500px]',
                                (activeId === id || stack.includes(id)) &&
                                    '-left-[240px] right-0 w-[200px] bottom-36',
                            )}>
                            <Suspense fallback={null}>
                                <DynamicCircleModel
                                    rotation={new Euler(0.0, 0, 0.0)}
                                    position={new Vector3(2.81, -3.92, 0.0)}
                                    scale={new Vector3(6.7, 6.7, 6.7)}
                                />
                                <DynamicCircleModel
                                    rotation={new Euler(0.0, 6.11, 0.0)}
                                    position={new Vector3(2.99, -3.36, 0.0)}
                                    scale={new Vector3(5.57, 5.57, 5.57)}
                                />
                                <CirclesLight />
                                <CirclesLight />
                            </Suspense>
                        </View>
                    </>
                )}
            </Button>
        </motion.li>
    );
};

export default NavItem;
