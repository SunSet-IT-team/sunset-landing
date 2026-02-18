'use client';

import { FC, HTMLAttributes, ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { twMerge } from 'tailwind-merge';

/**
 * Общие пропсы
 */
interface BaseProps extends HTMLAttributes<HTMLDivElement> {
    align: 'right' | 'left';
    hidden?: boolean;
    children?: ReactNode;
}

/**
 * Контролируемый режим
 */
interface ControlledProps extends BaseProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

/**
 * Неконтролируемый режим
 */
interface UncontrolledProps extends BaseProps {
    isOpen?: undefined;
    setIsOpen?: undefined;
}

export type IProps = ControlledProps | UncontrolledProps;

/**
 * Базовый элемент блока уведомлений
 */
const Notification: FC<IProps> = ({
    isOpen: isOpenProps,
    setIsOpen: setIsOpenProps,
    align,
    hidden,
    style,
    className,
    children,
}) => {
    // Локальное состояние для неконтролируемого режима
    const [_isOpen, _setIsOpen] = useState<boolean>(false);

    const isControlledMode = isOpenProps !== undefined && setIsOpenProps !== undefined;
    const isOpen = isControlledMode ? isOpenProps : _isOpen;
    const setIsOpen = isControlledMode ? setIsOpenProps : _setIsOpen;

    const [container, setContainer] = useState<HTMLElement | null>(null);

    useEffect(() => {
        const el = document.getElementById(`notifications-${align}`);
        setContainer(el);
    }, []);

    if (!container) return null;

    return createPortal(
        <div
            className={twMerge(
                'bg-[#FF6400] py-3 md:pb-8 md:pt-4 md:pl-[45px] md:pr-[75px] mb-[2vh] relative pointer-events-auto',
                align === 'right'
                    ? 'pl-8 pr-6 md:rounded-l-[6px]'
                    : 'pr-8 pl-6  md:rounded-r-[6px]',
                'min-w-[100vw] md:min-w-[unset]',
                'transition-[transform] duration-400 linear',
                isOpen
                    ? 'translate-x-0'
                    : align === 'right'
                      ? 'translate-x-full'
                      : '-translate-x-full',
                className,
            )}
            style={{
                ...(hidden
                    ? {
                          transform:
                              align === 'right'
                                  ? 'translateX(calc(100% + 25px))'
                                  : 'translateX(calc(-1 * (100% + 25px)))',
                      }
                    : {}),
                ...style,
            }}>
            {children}
            <button
                className={twMerge(
                    'border-blue-400 border-dashed md:border-none bg-transparent outline-none cursor-pointer absolute top-[50%] h-[99%] md:h-[25px] w-[25px] transition-[left,right] cursor-target',
                    align === 'right'
                        ? isOpen
                            ? 'border-r-2 md:border-r-0 left-0 md:left-[unset] md:right-[100%]  md:rounded-l-[4px]'
                            : 'right-[100%] rounded-l-[4px]'
                        : isOpen
                          ? 'border-l-2 md:border-l-0 right-0 md:right-[unset] md:left-[100%] md:rounded-r-[4px]'
                          : 'left-[100%] rounded-r-[4px]',
                    align === 'right' ? 'md:mr-[-1px]' : 'md:ml-[-1px]',
                )}
                style={{
                    backgroundColor: '#FF6400',
                    transform: align === 'right' ? 'translateY(-50%)' : 'translateY(-50%)',
                }}
                onClick={() => setIsOpen(!isOpen)}>
                <div
                    className={twMerge(
                        'transition-[transform] duration-700 ease h-[23px] w-[23px] md:h-[25px] md:w-[25px] md:rounded-[4px]',
                    )}
                    style={{
                        backgroundColor: '#FF6400',
                        backgroundImage: `url('/icons/arrow.svg')`,
                        backgroundSize: '16px 12px',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        ...(align === 'right'
                            ? {
                                  transform: isOpen
                                      ? 'rotateZ(90deg) rotateX(0deg)'
                                      : 'rotateZ(90deg) rotateX(180deg)',
                              }
                            : {
                                  transform: isOpen
                                      ? 'rotateZ(90deg) rotateX(180deg)'
                                      : 'rotateZ(90deg) rotateX(0)',
                              }),
                    }}></div>
            </button>
        </div>,
        container,
    );
};

export default Notification;
