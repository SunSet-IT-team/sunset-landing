'use client';

import { useNavStore } from '@/src/store/navStore';

interface AccordionSectionProps {
    children: React.ReactNode;
    id: number; // Айди секции
    title: string; // Название секции
}

/**
 * Секция, которая открывает аккордионы
 */
const AccordionSection = ({ children, id, title }: AccordionSectionProps) => {
    const { setActiveId, activeId } = useNavStore();

    // Выбрана ли текущая вкладка
    const isActive = activeId == id;

    // Для того, чтобы опустить текст
    const isActiveText = activeId >= id;

    // Расчёт - первая вкладка должна показывать только если она актива
    const flexGrow = isActive
        ? id === 1
            ? 'flex-[2.15]'
            : 'flex-[2.65]'
        : id === 1
        ? 'flex-[0]'
        : 'flex-[1]';

    // Расчёт -  также для первой вкладки
    const width = id === 1 && !isActive ? 'w-0' : '';

    // Расчёт - границы должны быть только для услуг и активной первой секции
    const border = id === 3 ? 'border-x' : id === 1 && isActive ? 'border-r' : '';

    // Расчёт - паддинги
    const padding =
        id === 1 && !isActive
            ? ''
            : (activeId !== 1 && id === 2) || id === 1
            ? 'pr-6'
            : id === 4
            ? 'pl-6'
            : 'px-6';

    return (
        <>
            <div
                className={` min-w-0 overflow-hidden ]
                    ${border} border-darkGrey border-opacity-50
                    transition-all duration-300 ease-in-out
                    ${padding}
                    relative ${flexGrow} ${width}`}>
                {id != 1 && (
                    <h2
                        className={`transition-all duration-300 ease-in-out
                         relative z-20 heading
                     ${isActiveText ? 'mt-[120px]' : 'mt-[44px]'}`}>
                        <button onClick={() => setActiveId(id)}>{title}</button>
                    </h2>
                )}

                <div
                    className={`w-full overflow-x-hidden
                    transition-all duration-300 ease-in-out
                    relative z-10
                    ${id === 1 ? 'mt-[150px]' : ''}
                     ${isActive ? 'opacity-1' : 'opacity-0'}`}>
                    {children}
                </div>
            </div>
        </>
    );
};

export default AccordionSection;
