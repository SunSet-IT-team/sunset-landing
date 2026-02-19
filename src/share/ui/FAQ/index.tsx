'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Plus } from 'lucide-react';

export interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    items: FAQItem[];
    className?: string;
    defaultOpenIndex?: number | null;
}

/**
 * FAQ Accordion component
 */
const FAQ = ({ items, className, defaultOpenIndex = null }: FAQProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={twMerge('w-full mx-auto py-8', className)}>
            <h2 className="heading mb-4">Часто задаваемые Вопросы</h2>

            <div className="flex flex-col divide-y divide-orange dark:divide-neutral-800">
                {items.map((item, index) => {
                    const isOpen = openIndex === index;

                    return (
                        <div key={index} className="py-2">
                            <button
                                onClick={() => toggle(index)}
                                className={twMerge(
                                    'w-full text-left flex items-center justify-between gap-4',
                                    'py-4 px-4 rounded-xl',
                                    'transition-all duration-200',
                                    'hover:bg-orange-50 dark:hover:bg-orange-950/30',
                                    isOpen && 'bg-orange-50 dark:bg-orange-950/30',
                                )}
                                aria-expanded={isOpen}>
                                <span className="heading-h3">{item.question}</span>

                                <Plus
                                    className={twMerge(
                                        'w-5 h-5',
                                        'transition-all duration-200',
                                        isOpen && 'rotate-45 text-orange',
                                    )}
                                />
                            </button>

                            <div
                                className={twMerge(
                                    'grid transition-all duration-300 ease-in-out',
                                    isOpen
                                        ? 'grid-rows-[1fr] opacity-100'
                                        : 'grid-rows-[0fr] opacity-0',
                                )}>
                                <div className="overflow-hidden">
                                    <p className="px-4 pb-4 pt-1 text leading-relaxed">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FAQ;
