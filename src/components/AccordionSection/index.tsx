'use client';

import IconsSlider from '@/src/feature/IconsSlider';
import { useNavStore } from '@/src/store/navStore';
import { twMerge } from 'tailwind-merge';

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
            ? 'flex-[1] md:flex-[2.15]'
            : 'flex-[1] md:flex-[2.65]'
        : id === 1
        ? 'h-0 flex-[0] md:h-[unset]'
        : 'h-[52px] xl:flex-[1] md:h-[unset]';

    // Расчёт -  также для первой вкладки
    const width = id === 1 && !isActive ? 'w-full md:w-0' : 'w-full md:w-[50px] xl:w-[unset]';

    // Расчёт - границы должны быть только для услуг и активной первой секции
    const border =
        id === 3
            ? 'border-y md:border-x md:border-y-0'
            : id === 1 && isActive
            ? 'border-b md:border-r md:border-b-0'
            : '';

    // Расчёт - паддинги
    const padding =
        id === 1 && !isActive
            ? ''
            : (activeId !== 1 && id === 2) || id === 1
            ? 'py-3 md:pr-3 md:py-0 2xl:pr-6'
            : id === 4
            ? 'py-3 md:pl-3 md:py-0 2xl:pl-6'
            : 'py-3 md:px-3 md:py-0 2xl:px-6';

    return (
        <>
            <div
                className={` min-w-0 overflow-hidden
                    ${border} border-darkGrey border-opacity-50
                    transition-all duration-300 ease-in-out
                    ${padding}
                    relative ${flexGrow} ${width}`}
                onClick={() => setActiveId(id)}>
                {id != 1 && (
                    <h2
                        className={twMerge(
                            'transition-all duration-300 ease-in-out origin-bottom-left',
                            'relative z-20 heading cursor-pointer',
                            id == 4 ? 'xl:-tracking-wider 2xl:tracking-wider' : '',
                            isActiveText
                                ? `md:mt-[104px] ${
                                      isActive
                                          ? 'cursor-text text-blue-200 md:[transform:none]'
                                          : 'md:[transform:rotate(90deg)_translateX(50%)] '
                                  } xl:mt-[120px] xl:[transform:none]`
                                : 'md:mt-[32px] md:[transform:rotate(90deg)_translateX(50%)] xl:mt-[44px] xl:[transform:none]',
                            isActive ? '' : 'cursor-target',
                        )}>
                        {title}
                    </h2>
                )}
                <div
                    className={`w-full overflow-hidden
                    transition-all duration-300 ease-in-out
                    relative z-10
                    ${id === 1 ? 'mt-[20px] md:mt-[150px]' : ''}
                     ${isActive ? 'opacity-1' : 'opacity-0 pointer-events-none'}`}>
                    {children}
                </div>
                {id === 1 && <IconsSlider />}
            </div>
        </>
    );
};

export default AccordionSection;
