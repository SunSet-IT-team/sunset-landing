'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useNavStore } from '@/src/share/store/navStore';
import { sections } from '@/src/app/(main)/data';

/**
 * Инициализация открытой секции
 */
export default function SectionInitializer() {
    const searchParams = useSearchParams();
    const { setActiveId } = useNavStore();

    useEffect(() => {
        const sectionParam = searchParams.get('block');

        if (!sectionParam) return;

        // Можно поддержать и id и текст
        const sectionById = sections.find((s) => s.id === Number(sectionParam));

        const sectionByText = sections.find(
            (s) => s.url.toLowerCase() === sectionParam.toLowerCase(),
        );

        const targetSection = sectionById || sectionByText;

        if (targetSection) {
            setActiveId(targetSection.id);
        }
    }, [searchParams, setActiveId]);

    return null;
}
