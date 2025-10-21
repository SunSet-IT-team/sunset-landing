'use client';

import TargetCursor from '@/components/TargetCursor';
import { useMediaQuery } from '@/src/hooks/useMediaQuery';
import { useState, useEffect } from 'react';

const Cursor = () => {
    const isMobile = useMediaQuery('(max-width: 767px)');

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted || isMobile) return null;

    return <TargetCursor />;
};

export default Cursor;
